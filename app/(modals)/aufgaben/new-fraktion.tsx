import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "../../../components/Themed";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useContentfulDataStore, userDataStore } from "../../../hooks/useStore";
import { Image } from "react-native";
import { useEffect, useState } from "react";
import StyledButton from "../../../components/StyledButton";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export default function Aufgabe() {
  const [hyaenenName, setHyaenenName] = useState("");
  const [global, fetchGlobal] = useContentfulDataStore((state) => [
    state.global,
    state.fetchGlobal,
  ]);

  const userData = userDataStore();
  const user = auth().currentUser;

  const params = useLocalSearchParams();
  useEffect(() => {
    if (!global) {
      fetchGlobal();
    }
  }, [global, fetchGlobal]);
  const router = useRouter();

  const urls = () => {
    if (!global) {
      return;
    }
    switch (params.fraktion) {
      case "mytopia":
        return {
          logo: global.mytopiaLogo?.url,
          text: global.einbuergerungMytopiaText,
          image: global.einbuergerungMytopiaImage?.url,
        };
      case "hyaenen":
        return {
          logo: global.hyaenenLogo?.url,
          text: global.wechselZuHyaenenText,
          image: global.wechselZuHyaenenImage?.url,
        };
      case "zirkel":
        return {
          logo: global.zirkelLogo?.url,
          text: global.wechselZuZirkelText,
          image: global.wechselZuZirkelImage?.url,
        };
      case "vertraute":
        return {
          logo: global.vertrauteLogo?.url,
          text: global.wechselZuVertrauteText,
          image: global.wechselZuVertrauteImage?.url,
        };
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
            {urls()?.image && (
              <View className="p-4">
                <Image
                  resizeMode="contain"
                  className="w-full h-64"
                  source={{ uri: urls()?.image! }}
                />
              </View>
            )}
            {urls()?.text && (
              <Text className="text-2xl font-semibold text-center my-4 px-12">
                {urls()?.text}
              </Text>
            )}
            {params.fraktion == "hyaenen" && (
              <View className="p-4">
                <Text className="text-center max-w-prose">
                  Rebellen lassen sich ihren Namen nicht einfach geben. Wähle
                  selbst einen neuen:
                </Text>
                <TextInput
                  className="max-w-72 w-full rounded border p-4 my-8"
                  value={hyaenenName}
                  autoComplete="name"
                  inputMode="text"
                  onChangeText={setHyaenenName}
                  placeholder="Name"
                  maxLength={32}
                />
              </View>
            )}
          </View>
        </ScrollView>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <StyledButton
            fraktion={params.fraktion as string}
            text="Schließen"
            onPress={async () => {
              // Bei Wechsel zu Hyänen soll der Name gespeichert werden
              if (params.fraktion == "hyaenen") {
                await firestore()
                  .collection("users")
                  .doc(user?.uid)
                  .update({
                    "citizenship.hyaenen.name":
                      hyaenenName.length > 0 ? hyaenenName : "Namenlos",
                  });
              }
              userData.fetchUserData();
              router.push("tabs");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
