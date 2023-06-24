import auth from "@react-native-firebase/auth";
import { Redirect, Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import StyledButton from "../../components/StyledButton";
import { Text, View } from "../../components/Themed";
export default function IntroScreen() {
  const [email, onChangeEmail] = useState("");
  const validateEmail = (email: String) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    if (auth().currentUser) {
      setUser(auth().currentUser);
    }
  }, [auth().currentUser]);

  if (user) {
    return <Redirect href="/" />;
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
      }}
      className={`bg-[#081746] w-full h-full flex items-center`}
    >
      <Stack.Screen
        options={{
          header: () => (
            <SafeAreaView
              style={{
                paddingTop:
                  Platform.OS === "android" ? StatusBar.currentHeight : 0,
                paddingHorizontal: 20,
              }}
              className={`bg-[#081746] w-full flex items-center`}
            >
              <Image
                className="w-full h-24 p-2"
                source={require("../../assets/images/logo.png")}
                resizeMode="cover"
              ></Image>
            </SafeAreaView>
          ),
          headerBackButtonMenuEnabled: false,
          gestureEnabled: false,
        }}
      />
      <StatusBar barStyle={"light-content"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "position"}
        enabled
        style={{ flex: 1 }}
      >
        <View className="bg-transparent w-full h-full flex items-center px-2 mt-4">
          <Text className="text-slate-300 text-center font-bold leading-5">
            Werde Teil der Mytopias: Über die App musst Du Dich für eine Seite
            entscheiden, kannst den Fortgang der Handlung mitbestimmen und
            Punkte für deine Fraktion sammeln. Jede Aktion hat Auswirkungen auf
            den Ausgang der Geschichte. Log dich jetzt ein!
          </Text>
          <View className="flex flex-1 gap-y-4 bg-transparent items-center justify-center w-full">
            {/* <TextInput
              className="max-w-72 w-full rounded border p-4 placeholder:text-slate-100"
              placeholderTextColor="grey"
              value={email}
              autoComplete="email"
              inputMode="email"
              onChangeText={onChangeEmail}
              placeholder="E-Mail"
              autoCapitalize="none"
              clearButtonMode="always"
              textContentType="emailAddress"
            /> */}

            <View className="bg-transparent">
              <StyledButton
                text="Registrieren"
                onPress={() => router.push("auth/register")}
              />
            </View>
            <View className="bg-transparent">
              <StyledButton
                text="Login"
                onPress={() => router.push("/auth/login")}
              />
            </View>

            {/* Sign in With Email */}
            {/* <Pressable
              className="border  rounded-full p-4 w-64 flex items-center bg-[#7B61FF]"
              onPress={() => {
                if (!validateEmail(email)) {
                  Alert.alert(
                    "E-Mail ungültig",
                    "Bitte überprüfe die eingegebene E-Mail Adresse"
                  );
                }
                // For iOS App Review
                if (email == "armin.luschin+appstore@gmail.com") {
                  auth().signInWithEmailAndPassword(
                    email,
                    "gydwu9-dybSak-qotges"
                  );
                  return;
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
                  router.push("/(modals)/auth/waitingForEmailVerification");
                } catch (e) {
                  console.error("Oh no! ", e);
                  Alert.alert("Oh no!", String(e));
                }
              }}
            >
              <Text className="text-white font-bold">Weiter</Text>
            </Pressable> */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
