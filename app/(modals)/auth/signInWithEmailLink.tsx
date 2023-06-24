import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { Text, View } from "../../../components/Themed";

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
        paddingHorizontal: 20,
      }}
      className={`w-full h-full flex items-center`}
    >
      <Stack.Screen
        options={{
          headerTitle: "Registrieren",
          headerLeft: () => <Text>Abbrechen</Text>,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        enabled
        style={{ flex: 1 }}
      >
        <ScrollView className="bg-transparent">
          <View className="bg-transparent gap-8 flex items-center mt-8 p-8">
            <TextInput
              className="max-w-72 w-full rounded border p-4"
              value={email}
              autoComplete="email"
              inputMode="email"
              onChangeText={onChangeEmail}
              placeholder="E-Mail"
            />
            <TextInput
              className="max-w-72 w-full rounded border p-4"
              value={password}
              inputMode="text"
              autoComplete="password-new"
              onChangeText={onChangePassword}
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry
            />

            {/* Sign in With Email */}
            <Pressable
              className="border  rounded-full p-4 w-64 flex items-center bg-[#7B61FF]"
              onPress={() => {
                if (!validateEmail(email)) {
                  Alert.alert(
                    "E-Mail ungültig",
                    "Bitte überprüfe die eingegebene E-Mail Adresse"
                  );
                }
                try {
                  AsyncStorage.setItem("emailAdress", email);
                  auth().sendSignInLinkToEmail(email, {
                    handleCodeInApp: true,
                    url: "https://mytopia.page.link/verify-email",
                    android: {
                      packageName: "net.minuseins.mytopia",
                    },
                  });
                  router.push(
                    "/(user-not-logged-in)/waitingForEmailVerification"
                  );
                } catch (e) {
                  console.error("Oh no! ", e);
                  Alert.alert("Oh no!", String(e));
                }
              }}
            >
              <Text className="text-white font-bold">Login</Text>
            </Pressable>
            <Text className="text-xs text-center">
              Durch das Klicken auf "Weiter" akzeptierst Du die AGB und
              Datenschutzrichtline
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
