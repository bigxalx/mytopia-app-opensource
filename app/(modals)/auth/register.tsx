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

export default function RegisterScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

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
          headerTitle: "Registrieren",
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
          <TextInput
            className="max-w-72 w-full rounded border p-4"
            value={password}
            inputMode="text"
            onChangeText={onChangePassword}
            placeholder="Password"
            secureTextEntry
            clearButtonMode="always"
            textContentType="newPassword"
            passwordRules="minlength: 8;"
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
                await auth().createUserWithEmailAndPassword(email, password);
                await auth().currentUser?.sendEmailVerification();
                router.push("/auth/waitingForEmailVerification");
              } catch (e) {
                console.error("Oh no! ", e);
                Alert.alert("Oh no!", String(e));
              }
            }}
          >
            <Text className="text-white font-bold">Registrieren</Text>
          </Pressable>
          <Text className="text-xs text-center">
            Durch das Klicken auf "Registrieren" akzeptierst du die{" "}
            <Link className="underline" href="https://www.mytopia.world/agb">
              AGB
            </Link>{" "}
            und stimmst der Verarbeitung deiner Daten gemäß der{" "}
            <Link
              className="underline"
              href="https://www.mytopia.world/datenschutz"
            >
              Datenschutzerklärung
            </Link>{" "}
            zu.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
