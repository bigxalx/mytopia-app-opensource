import { Stack, useRouter } from "expo-router";
import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { Button, Image, PermissionsAndroid, Platform } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { StepcounterTask } from "../../../../@types/graphql/graphql";
import { SafeAreaView, Text, View } from "../../../../components/Themed";
import {
  useAufgabeStore,
  useContentfulDataStore,
} from "../../../../hooks/useStore";

export default function StepCounterAufgabe() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const [global] = useContentfulDataStore((state) => [state.global]);

  const [aufgabe] = useAufgabeStore((state) => [state.aufgabe]);
  const router = useRouter();
  const task = aufgabe?.task as StepcounterTask;

  const subscribe = async () => {
    try {
      const isAvailable = await Pedometer.isAvailableAsync();
      let isAuthorized;

      if (Platform.OS == "ios") {
        isAuthorized = await Pedometer.requestPermissionsAsync();
        setIsPedometerAvailable(String(isAvailable && isAuthorized.granted));
      }
      if (Platform.OS == "android") {
        isAuthorized =
          (await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION
          )) == "granted";
        setIsPedometerAvailable(String(isAvailable && isAuthorized));
      }

      if (isAvailable && isAuthorized) {
        return Pedometer.watchStepCount((result) => {
          setCurrentStepCount(result.steps);
          if (task.schritte && result.steps > task.schritte) {
            router.push("/aufgaben/ergebnis");
          }
        });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => {
      subscription.then((stepcounter) => stepcounter?.remove());
    };
  }, []);

  if (!aufgabe) {
    return (
      <View className="w-full h-full items-center justify-center">
        <Text>Fehler</Text>
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
        <View className="flex-1 flex">
          <Image
            className="w-16 h-16 mx-auto mt-8 mb-4"
            source={{ uri: logoUrl() ?? undefined }}
          />
          <Text className="text-2xl font-semibold text-center my-4 px-12">
            {aufgabe?.title}
          </Text>
          <View className="w-full flex flex-1 items-center justify-center">
            {task.schritte && (
              <AnimatedCircularProgress
                size={200}
                width={15}
                fill={(currentStepCount / task.schritte) * 100}
                tintColor={
                  aufgabe?.fraktion == "mytopia"
                    ? "#7B61FF"
                    : aufgabe?.fraktion == "hyaenen"
                    ? "#DC0C0C"
                    : aufgabe?.fraktion == "zirkel"
                    ? "#005F00"
                    : aufgabe?.fraktion == "vertraute"
                    ? "#120947"
                    : ""
                }
                backgroundColor="transparent"
              >
                {(fill: number) => (
                  <Text
                    className={`text-xl font-bold ${
                      aufgabe?.fraktion == "mytopia"
                        ? "text-[#7B61FF]"
                        : aufgabe?.fraktion == "hyaenen"
                        ? "text-[#DC0C0C]"
                        : aufgabe?.fraktion == "zirkel"
                        ? "text-[#005F00]"
                        : aufgabe?.fraktion == "vertraute"
                        ? "text-[#120947]"
                        : ""
                    }`}
                  >
                    {currentStepCount}
                  </Text>
                )}
              </AnimatedCircularProgress>
            )}
          </View>
        </View>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <Button title="Abbrechen" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    </>
  );
}
