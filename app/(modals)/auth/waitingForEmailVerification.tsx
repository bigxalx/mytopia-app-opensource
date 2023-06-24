import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Link, Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import StyledButton from "../../../components/StyledButton";
import { Text, View } from "../../../components/Themed";

export default function WaitingForEmailVerification() {
  const router = useRouter();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
      }}
      className={`bg-[#081746] w-full h-full flex items-center justify-center`}
    >
      <Stack.Screen
        options={{
          headerTitle: "E-Mail bestätigen",
          headerStyle: { backgroundColor: "#081746" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
        }}
      />
      <View className="bg-transparent my-8">
        <StyledButton
          text="Aktualisieren"
          onPress={async () => {
            await auth().currentUser?.reload();
            if (auth().currentUser?.emailVerified) {
              router.push("tabs");
            }
          }}
        />
      </View>
      <Text className="text-slate-300 text-center">
        Bitte öffne jetzt die E-Mail, die wir Dir soeben geschickt haben und
        tippe auf den Link.
      </Text>
      <Text className="mt-8 text-slate-500">Du hast dich vertippt?</Text>
      <Link
        className="underline font-bold text-slate-400"
        href={"/auth/register"}
      >
        E-Mail Adresse korrigieren
      </Link>
    </SafeAreaView>
  );
}
