import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("beforeRemove", (e: any) => {
      // Prevent default behavior of leaving the screen
      if (!(e.data.action.type == "NAVIGATE")) {
        e.preventDefault();
      }
    });
  }, [navigation]);

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerBackButtonMenuEnabled: false,
        gestureEnabled: false,
      }}
    />
  );
}
