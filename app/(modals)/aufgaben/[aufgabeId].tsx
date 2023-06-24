import * as Location from "expo-location";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { Image, PermissionsAndroid, Platform } from "react-native";
import { Aufgabe } from "../../../@types/graphql/graphql";
import RichText from "../../../components/RichText";
import StyledButton from "../../../components/StyledButton";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "../../../components/Themed";
import {
  useAufgabeStore,
  useContentfulDataStore,
} from "../../../hooks/useStore";

export default function AufgabeScreen() {
  const [aufgaben, fetchContent, global, fetchGlobal] = useContentfulDataStore(
    (state) => [
      state.aufgaben,
      state.fetchAufgabeContent,
      state.global,
      state.fetchGlobal,
    ]
  );

  const [aufgabe, quizState, setAufgabe, resetQuiz] = useAufgabeStore(
    (state) => [state.aufgabe, state.quiz, state.setAufgabe, state.quiz.reset]
  );

  const params = useLocalSearchParams();
  const aufgabenItemId = params.aufgabeId as string;
  const [routerPathNameAndParams, setRouterPathNameAndParams] = useState<{
    pathname: string;
    params: object;
  }>();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [ersatzAufgabe, setErsatzAufgabe] = useState<Aufgabe | undefined>();
  async function checkForLocationPermissions() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return false;
    } else return true;
  }

  async function checkForStepCounterPermissions() {
    const isAvailable = await Pedometer.isAvailableAsync();
    let isAuthorized;

    if (Platform.OS == "ios") {
      isAuthorized = (await Pedometer.requestPermissionsAsync()).granted;
    }
    if (Platform.OS == "android") {
      isAuthorized =
        (await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION
        )) == "granted";
    }

    if (isAvailable && isAuthorized) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (aufgabe && !aufgabe?.content) {
      fetchContent([aufgabe.sys.id]);
    }
  }, [aufgabe, fetchContent]);

  useEffect(() => {
    if (aufgaben && ersatzAufgabe) {
      setAufgabe(
        aufgaben.find((aufgabe) => aufgabe.sys.id == ersatzAufgabe.sys.id)!
      );
    } else if (aufgaben && aufgabenItemId) {
      setAufgabe(aufgaben.find((aufgabe) => aufgabe.sys.id == aufgabenItemId)!);
    }
  }, [aufgaben, aufgabenItemId, setAufgabe, ersatzAufgabe]);

  useEffect(() => {}, [aufgaben]);

  useEffect(() => {
    if (!global) {
      fetchGlobal();
    }
  }, [global, fetchGlobal]);

  const router = useRouter();
  async function switchTask() {
    fetchContent([aufgabe?.sys.id!]);
    switch (aufgabe?.task?.__typename) {
      case "GpsTask":
        if (await checkForLocationPermissions()) {
          setRouterPathNameAndParams({
            pathname: "/aufgaben/gps",
            params: aufgabe.task!,
          });
        } else {
          setErsatzAufgabe(aufgabe.task.ersatzAufgabe!);
        }
        break;
      case "QuizTask":
        resetQuiz();
        setRouterPathNameAndParams({
          pathname: "/aufgaben/quiz/0",
          params: aufgabe.task!,
        });
        break;

      case "StepcounterTask":
        if (await checkForStepCounterPermissions()) {
          setRouterPathNameAndParams({
            pathname: "(modals)/aufgaben/stepcounter",
            params: aufgabe.task!,
          });
        } else {
          setErsatzAufgabe(aufgabe.task.ersatzAufgabe!);
        }
    }
  }

  useEffect(() => {
    if (aufgabe) {
      switchTask();
    }
  }, [aufgabe]);

  if (!aufgabe?.content) {
    return (
      <View className="w-full h-full items-center flex justify-center">
        <Text>Lädt</Text>
      </View>
    );
  }

  const logoUrl = () => {
    if (!global) {
      return;
    }
    switch (aufgabe.fraktion) {
      case "mytopia":
        return global!.mytopiaLogo?.url;
      case "hyaenen":
        return global!.hyaenenLogo?.url;
      case "zirkel":
        return global!.zirkelLogo?.url;
      case "vertraute":
        return global!.vertrauteLogo?.url;
      default:
        break;
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex w-full h-full">
        <ScrollView className="flex-1">
          <View>
            <Image
              className="w-16 h-16 mx-auto mt-8 mb-4"
              source={{ uri: logoUrl() ?? undefined }}
            />
            <Text className="text-2xl font-semibold text-center my-4 px-12">
              {aufgabe?.title}
            </Text>
            <RichText
              content={aufgabe?.content?.json}
              links={aufgabe?.content?.links}
            />
          </View>
        </ScrollView>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <StyledButton
            fraktion={aufgabe.fraktion!}
            text="Los geht's"
            onPress={() => {
              router.push(routerPathNameAndParams);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
