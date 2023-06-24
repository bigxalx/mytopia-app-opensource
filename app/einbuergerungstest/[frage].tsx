import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable } from "react-native";
import StyledButton from "../../components/StyledButton";
import { SafeAreaView, ScrollView, Text, View } from "../../components/Themed";
import { useEinbuergerungstestStore } from "../../hooks/useStore";

export default function FrageScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ frage: string }>();
  const nr = parseInt(params.frage!);
  const [test, setAnswer, testAnswers] = useEinbuergerungstestStore((state) => [
    state.test,
    state.setAnswer,
    state.testAnswers,
  ]);

  const aktuelleFrage = test?.fragenCollection?.items[parseInt(params.frage!)];

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Frage ${nr! + 1}` }} />
      <SafeAreaView className="flex w-full h-full">
        <ScrollView className="flex-1">
          <View>
            <Text className="text-2xl font-semibold text-center my-8 px-12">
              {aktuelleFrage?.frageTitel}
            </Text>
            <Text className="p-4">{aktuelleFrage?.frageText}</Text>

            <View className="flex pb-4">
              {aktuelleFrage?.antwortenCollection?.items.map(
                (antwort, index) => (
                  <Pressable
                    key={index}
                    onPress={() => setAnswer(aktuelleFrage, antwort!)}
                  >
                    <View
                      className={`p-4 mx-4 my-3 rounded-md flex flex-row border-2 border-neutral-300 ${
                        testAnswers[nr]?.antwort.sys.id == antwort?.sys.id
                          ? "border-[#7B61FF]"
                          : ""
                      }`}
                    >
                      <Text
                        className={`w-12 font-semibold text-base ${
                          testAnswers[nr]?.antwort.sys.id == antwort?.sys.id
                            ? "text-[#7B61FF]"
                            : ""
                        }`}
                      >
                        {index == 0 ? "A" : index == 1 ? "B" : "C"}
                      </Text>
                      <Text
                        className={`flex-1 w-full font-semibold text-base ${
                          testAnswers[nr]?.antwort.sys.id == antwort?.sys.id
                            ? "text-[#7B61FF]"
                            : ""
                        }`}
                      >
                        {antwort?.antwortText}
                      </Text>
                    </View>
                  </Pressable>
                )
              )}
            </View>
          </View>
        </ScrollView>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <StyledButton
            disabled={testAnswers.length > nr ? false : true}
            text={
              nr + 1 == test?.fragenCollection?.items.length
                ? "Zur Auswertung"
                : "Weiter"
            }
            onPress={() => {
              if (nr + 1 == test?.fragenCollection?.items.length) {
                Alert.alert(
                  "Antworten übermitteln",
                  "Wenn du fortfährst, werden Deine Antworten ausgewertet. Du kannst sie dann nicht mehr ändern.",
                  [
                    { text: "Abbrechen", style: "cancel" },
                    {
                      text: "Ok",
                      style: "default",
                      onPress: () =>
                        router.push("/einbuergerungstest/ergebnis"),
                    },
                  ]
                );
              } else {
                router.push(`/einbuergerungstest/${nr + 1}`);
              }
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
