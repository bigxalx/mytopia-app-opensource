import { Stack } from "expo-router";

export default function Layout() {
  // const navigation = useNavigation();
  // console.log("this nav id: ", navigation.getId());
  // useEffect(() => {
  //   navigation.addListener("beforeRemove", (e: any) => {
  //     console.log("haha");
  //     // Prevent default behavior of leaving the screen
  //     if (!(e.data.action.type == "NAVIGATE")) {
  //       console.log("yo");
  //       e.preventDefault();
  //     }
  //   });
  // }, [navigation]);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerBackVisible: false,
          presentation: "modal",
        }}
      />
      <Stack initialRouteName="index" />
    </>
  );
}
