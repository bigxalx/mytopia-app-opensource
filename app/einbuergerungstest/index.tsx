import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image } from "react-native";
import StyledButton from "../../components/StyledButton";
import { SafeAreaView, ScrollView, Text, View } from "../../components/Themed";
import { useEinbuergerungstestStore } from "../../hooks/useStore";

export default function einbuergerungstestIntro() {
  const [test, fetchTest] = useEinbuergerungstestStore((state) => [
    state.test,
    state.fetchTest,
  ]);

  const router = useRouter();

  useEffect(() => {
    if (!test) {
      fetchTest();
    }
  }, [test, fetchTest]);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Einbürgerungstest",
          headerLargeTitle: true,
          headerBackVisible: false,
        }}
      />
      <SafeAreaView className="w-screen h-full flex">
        <ScrollView className="flex-1">
          <View className="flex flex-1 justify-center px-4">
            <View className="m-6">
              <Image
                className="w-full h-48"
                source={{ uri: test?.heroImage?.url! }}
                resizeMode="contain"
              />
            </View>
            <Text className="w-full">{test?.text}</Text>
          </View>
        </ScrollView>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <StyledButton
            text="Los geht's"
            onPress={() => router.push(`/einbuergerungstest/0`)}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
