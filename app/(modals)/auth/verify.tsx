import auth from "@react-native-firebase/auth";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import { Text, View } from "../../../components/Themed";

export default function Verify() {
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
          headerTitle: "Login",
          headerLeft:
            Platform.OS === "android"
              ? () => null
              : () => <Link href="../">Abbrechen</Link>,
        }}
      />
      <View className="w-full h-full">
        <View className="flex gap-y-8 items-center px-4 pt-8">
          <Text className="text-base font-bold">
            Aus Sicherheitsgründen musst du dich erst erneut anmelden
          </Text>

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
            autoComplete="password"
            onChangeText={onChangePassword}
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry
            clearButtonMode="always"
            textContentType="password"
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
              }
              try {
                await auth().signInWithEmailAndPassword(email, password);
                router.back();
              } catch (e) {
                console.error("Oh no! ", e);
                Alert.alert("Oh no!", String(e));
              }
            }}
          >
            <Text className="text-white font-bold">Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
