import auth from "@react-native-firebase/auth";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Text, TextInput, View } from "../../../components/Themed";

export default function ResetPasswordScreen() {
  const [email, onChangeEmail] = useState("");

  const validateEmail = (email: String) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className={`w-full h-full flex items-center`}
    >
      <Stack.Screen
        options={{
          headerLargeTitle: true,
          headerTitle: "Passwort zurücksetzen",
          headerLeft:
            Platform.OS === "android"
              ? () => null
              : () => (
                  <Text>
                    <Link href="../">Abbrechen</Link>
                  </Text>
                ),
        }}
      />
      <View className="w-full h-full">
        <View className="flex gap-y-8 items-center px-4 pt-8">
          <TextInput
            className="max-w-72 w-full rounded border p-4"
            value={email}
            autoComplete="email"
            inputMode="email"
            onChangeText={onChangeEmail}
            placeholder="E-Mail"
            autoCapitalize="none"
            clearButtonMode="always"
            textContentType="emailAddress"
          />
          {/* Sign in With Email */}
          <Pressable
            className="border rounded-full p-4 w-64 flex items-center bg-[#7B61FF]"
            onPress={async () => {
              if (!validateEmail(email)) {
                Alert.alert(
                  "E-Mail ungültig",
                  "Bitte überprüfe die eingegebene E-Mail Adresse"
                );
                throw Error("E-Mail ungültig");
              }
              try {
                await auth().sendPasswordResetEmail(email);
                Alert.alert(
                  "E-Mail versandt",
                  "Wir haben dir eine E-Mail mit einem Link zum Zurücksetzen des Passwort geschickt."
                );
                router.back();
              } catch (e) {
                console.error("Oh no! ", e);
                Alert.alert("Oh no!", String(e));
              }
            }}
          >
            <Text className="text-white font-bold">Passwort zurücksetzen</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
