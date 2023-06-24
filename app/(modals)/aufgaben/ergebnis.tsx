import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
} from "../../../components/Themed";
import { Stack, useRouter } from "expo-router";
import {
  useAufgabeStore,
  userDataStore,
  useContentfulDataStore,
} from "../../../hooks/useStore";
import { useEffect, useState } from "react";
import StyledButton from "../../../components/StyledButton";
import SmallLogo from "../../../components/SmallLogo";
import validateAndSaveAufgabe from "../../../utils/validateAndSave";
import { Svg, Path } from "react-native-svg";

const SuccessImage = ({ fill = "#7B61FF" }) => (
  <View className="mx-auto mb-12 w-content h-content">
    <Svg width="148" height="148" viewBox="0 0 148 148" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.0518 23.4272C55.6539 20.4254 58.8715 18.0187 62.486 16.3705C66.1006 14.7223 70.0274 13.8712 74 13.875C82.3682 13.875 89.8669 17.575 94.9482 23.4272C98.9115 23.1442 102.889 23.7175 106.611 25.1082C110.333 26.499 113.713 28.6745 116.519 31.487C119.331 34.2932 121.505 37.6714 122.896 41.3923C124.287 45.1131 124.861 49.0896 124.579 53.0518C127.58 55.6545 129.985 58.8723 131.632 62.4868C133.279 66.1013 134.13 70.0279 134.125 74C134.129 77.9726 133.278 81.8995 131.63 85.514C129.981 89.1285 127.575 92.3461 124.573 94.9482C124.855 98.9104 124.281 102.887 122.89 106.608C121.499 110.329 119.324 113.707 116.513 116.513C113.707 119.324 110.329 121.499 106.608 122.89C102.887 124.281 98.9104 124.855 94.9482 124.573C92.3461 127.575 89.1286 129.981 85.514 131.629C81.8995 133.278 77.9726 134.129 74 134.125C70.0274 134.129 66.1006 133.278 62.486 131.629C58.8715 129.981 55.6539 127.575 53.0518 124.573C49.089 124.857 45.1115 124.284 41.3895 122.895C37.6675 121.505 34.2881 119.331 31.4809 116.519C28.6686 113.712 26.4934 110.333 25.1027 106.611C23.712 102.889 23.1384 98.9114 23.421 94.9482C20.4204 92.3455 18.0149 89.1277 16.3677 85.5132C14.7206 81.8987 13.8705 77.9721 13.875 74C13.875 65.6318 17.575 58.1332 23.4272 53.0518C23.1451 49.0896 23.7189 45.113 25.1096 41.392C26.5003 37.6711 28.6753 34.293 31.487 31.487C34.293 28.6753 37.6711 26.5003 41.392 25.1096C45.113 23.7189 49.0896 23.1451 53.0518 23.4272ZM96.2617 62.8137C96.6317 62.3207 96.8994 61.7587 97.0491 61.1607C97.1988 60.5627 97.2274 59.9409 97.1334 59.3317C97.0393 58.7225 96.8244 58.1383 96.5013 57.6133C96.1782 57.0884 95.7534 56.6333 95.2519 56.2749C94.7505 55.9164 94.1824 55.6618 93.5811 55.5261C92.9798 55.3903 92.3575 55.3762 91.7506 55.4844C91.1438 55.5926 90.5647 55.821 90.0474 56.1562C89.5301 56.4914 89.085 56.9267 88.7384 57.4363L68.783 85.3713L58.7684 75.3567C57.8916 74.5397 56.732 74.095 55.5338 74.1161C54.3356 74.1372 53.1924 74.6226 52.345 75.47C51.4976 76.3174 51.0122 77.4606 50.9911 78.6588C50.97 79.857 51.4147 81.0166 52.2317 81.8933L66.1067 95.7683C66.5815 96.2428 67.1538 96.6081 67.7839 96.8391C68.4141 97.0702 69.087 97.1613 69.7559 97.1061C70.4248 97.0509 71.0737 96.8509 71.6575 96.5198C72.2413 96.1886 72.746 95.7344 73.1367 95.1887L96.2617 62.8137Z"
        fill={fill}
      />
    </Svg>
  </View>
);

const FailImage = () => (
  <View className="mx-auto mb-12 w-content h-content">
    <Svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60 11.25C33.075 11.25 11.25 33.075 11.25 60C11.25 86.925 33.075 108.75 60 108.75C86.925 108.75 108.75 86.925 108.75 60C108.75 33.075 86.925 11.25 60 11.25ZM51.4 46.1C51.0567 45.7316 50.6427 45.4361 50.1827 45.2311C49.7227 45.0261 49.2261 44.9159 48.7226 44.907C48.2191 44.8982 47.719 44.9908 47.252 45.1794C46.7851 45.368 46.3609 45.6487 46.0048 46.0048C45.6487 46.3609 45.368 46.7851 45.1794 47.252C44.9908 47.719 44.8982 48.2191 44.907 48.7226C44.9159 49.2261 45.0261 49.7227 45.2311 50.1827C45.4361 50.6427 45.7316 51.0567 46.1 51.4L54.7 60L46.1 68.6C45.7316 68.9433 45.4361 69.3573 45.2311 69.8173C45.0261 70.2773 44.9159 70.7739 44.907 71.2774C44.8982 71.7809 44.9908 72.281 45.1794 72.748C45.368 73.2149 45.6487 73.6391 46.0048 73.9952C46.3609 74.3513 46.7851 74.632 47.252 74.8206C47.719 75.0092 48.2191 75.1018 48.7226 75.093C49.2261 75.0841 49.7227 74.9739 50.1827 74.7689C50.6427 74.5639 51.0567 74.2684 51.4 73.9L60 65.3L68.6 73.9C68.9433 74.2684 69.3573 74.5639 69.8173 74.7689C70.2773 74.9739 70.7739 75.0841 71.2774 75.093C71.7809 75.1018 72.281 75.0092 72.748 74.8206C73.2149 74.632 73.6391 74.3513 73.9952 73.9952C74.3513 73.6391 74.632 73.2149 74.8206 72.748C75.0092 72.281 75.1018 71.7809 75.093 71.2774C75.0841 70.7739 74.9739 70.2773 74.7689 69.8173C74.5639 69.3573 74.2684 68.9433 73.9 68.6L65.3 60L73.9 51.4C74.2684 51.0567 74.5639 50.6427 74.7689 50.1827C74.9739 49.7227 75.0841 49.2261 75.093 48.7226C75.1018 48.2191 75.0092 47.719 74.8206 47.252C74.632 46.7851 74.3513 46.3609 73.9952 46.0048C73.6391 45.6487 73.2149 45.368 72.748 45.1794C72.281 44.9908 71.7809 44.8982 71.2774 44.907C70.7739 44.9159 70.2773 45.0261 69.8173 45.2311C69.3573 45.4361 68.9433 45.7316 68.6 46.1L60 54.7L51.4 46.1Z"
        fill="#6F6F70"
      />
    </Svg>
  </View>
);

export default function Ergebnis() {
  const [aufgabe, testAnswers, resetQuiz] = useAufgabeStore((state) => [
    state.aufgabe,
    state.quiz.answers,
    state.quiz.reset,
  ]);

  const [userCitizenship, refreshUserData] = userDataStore((state) => [
    state.citizenship,
    state.fetchUserData,
  ]);

  const [auswertung, setAuswertung] = useState<{
    antwortenGesamt?: number;
    richtigeAntworten?: number;
    geschafft?: boolean;
    punkte?: number;
    error?: string;
    userWillChangeToFraktion?: boolean | string;
  }>({});

  const [global, fetchGlobal] = useContentfulDataStore((state) => [
    state.global,
    state.fetchGlobal,
  ]);

  useEffect(() => {
    if (!global) {
      fetchGlobal();
    }
  }, [global, fetchGlobal]);

  const router = useRouter();
  // let error: string;

  async function auswerten() {
    let geschafft = false;
    let richtigeAntworten = 0;
    let punkte = 0;
    let antwortenGesamt;

    if (aufgabe?.task?.__typename == "QuizTask") {
      // Quiz Auswertung
      antwortenGesamt = testAnswers.length;
      testAnswers.map(({ frage, antwort }) => {
        if (antwort.richtigeAntwort) {
          richtigeAntworten += 1;
        }
      });

      const quote = richtigeAntworten / antwortenGesamt;
      punkte = aufgabe?.punkte! * quote;

      geschafft = Math.round(quote) > 0;
    }
    if (
      aufgabe?.task?.__typename == "GpsTask" ||
      aufgabe?.task?.__typename == "StepcounterTask"
    ) {
      punkte = aufgabe?.punkte!;
      geschafft = true;
    }

    let error, userWillChangeToFraktion;
    // Validate and Save to Firestore
    ({ geschafft, error, userWillChangeToFraktion } = validateAndSaveAufgabe({
      aufgabe,
      geschafft,
      userCitizenship,
      global,
      punkte,
    }));
    setAuswertung({
      antwortenGesamt,
      richtigeAntworten,
      geschafft,
      punkte,
      error,
      userWillChangeToFraktion,
    });
  }

  useEffect(() => {
    auswerten();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "Ergebnis",
          headerLargeTitle: true,
          headerBackVisible: false,
          gestureEnabled: false,
          headerBackButtonMenuEnabled: false,
        }}
      />
      <SafeAreaView className="w-screen h-full flex">
        <ScrollView className="flex-1">
          <View className="flex flex-1 justify-center px-4">
            <SmallLogo />
            <Text className="text-2xl font-semibold text-center my-4 px-12">
              {auswertung.geschafft ? "Aufgabe abgeschlossen" : "Gescheitert"}
            </Text>
            <Text className="text-lg font-bold text-center my-4 px-12">
              {aufgabe?.title}
            </Text>

            {auswertung.geschafft ? (
              <SuccessImage
                fill={
                  aufgabe?.fraktion == "mytopia"
                    ? "#7B61FF"
                    : aufgabe?.fraktion == "hyaenen"
                    ? "#DC0C0C"
                    : aufgabe?.fraktion == "zirkel"
                    ? "#005F00"
                    : aufgabe?.fraktion == "vertraute"
                    ? "#120947"
                    : ""
                }
              />
            ) : (
              <FailImage />
            )}
            {!auswertung.error ? (
              <View>
                {aufgabe?.task?.__typename == "QuizTask" && (
                  <Text className="text-center">
                    {auswertung.richtigeAntworten} /{" "}
                    {auswertung.antwortenGesamt} Antworten richtig
                  </Text>
                )}
                <Text className="text-lg font-bold text-center">
                  + {auswertung.punkte} Punkte
                </Text>
              </View>
            ) : (
              <View>
                <Text className="text-lg text-neutral-500 font-bold text-center line-through">
                  + {auswertung.punkte} Punkte
                </Text>
                <Text className="text-red-500 text-base font-semibold">
                  {auswertung.error}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <StyledButton
            fraktion={aufgabe?.fraktion!}
            text={auswertung.userWillChangeToFraktion ? "Weiter" : "Schließen"}
            onPress={() => {
              if (auswertung.userWillChangeToFraktion) {
                router.push({
                  pathname: "/aufgaben/new-fraktion",
                  params: { fraktion: auswertung.userWillChangeToFraktion },
                });
              } else {
                resetQuiz();
                refreshUserData();
                router.push("tabs");
              }
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
