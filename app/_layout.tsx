import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import "react-native-url-polyfill/auto";
import { userDataStore } from "../hooks/useStore";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "tabs",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Noto: require("../assets/fonts/Noto_Serif/NotoSerif-Regular.ttf"),
    NotoBold: require("../assets/fonts/Noto_Serif/NotoSerif-Bold.ttf"),
    Graduate: require("../assets/fonts/Graduate-Regular.ttf"),
    Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const userData = userDataStore();
  useEffect(() => {
    if (userData.notInitialized) {
      userData.fetchUserData();
    }
  }, [userData.notInitialized, userData.fetchUserData]);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    userData.fetchUserData();
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {!user && (
          // User is not logged in
          <Redirect href="(user-not-logged-in)" />
        )}
        <Stack initialRouteName="tabs">
          <Stack.Screen
            name="tabs"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(user-not-logged-in)"
            options={{
              headerShown: false,
              gestureEnabled: false,
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="(modals)"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="einbuergerungstest"
            options={{
              presentation: "modal",
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
