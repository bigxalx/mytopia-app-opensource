import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
import { Stack, useNavigation, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { AuswertungskriterienQuery } from "../../@types/graphql/graphql";
import StyledButton from "../../components/StyledButton";
import { SafeAreaView, ScrollView, Text, View } from "../../components/Themed";
import { auswertungskriterienQuery } from "../../constants/Queries";
import {
  useEinbuergerungstestStore,
  userDataStore,
} from "../../hooks/useStore";

export default function Ergebnis() {
  const navigation = useNavigation();
  const pathName = usePathname();
  navigation.removeListener("beforeRemove", (e) => {});

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e: any) => {
      // Prevent default behavior of leaving the screen
      if (!(e.data.action.type == "NAVIGATE")) {
        e.preventDefault();
      }
    });
  }, [navigation]);

  const [test, testAnswers] = useEinbuergerungstestStore((state) => [
    state.test,
    state.testAnswers,
  ]);

  const [refreshUserData] = userDataStore((state) => [state.fetchUserData]);

  const [auswertung, setAuswertung] = useState([]);
  const [userLabels, setUserLabels] = useState([]);

  const router = useRouter();

  async function auswerten() {
    // Auswertungs-Kategorien und Kriterien vom CMS laden
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          },
          body: JSON.stringify({ query: auswertungskriterienQuery }),
        }
      );
      const { data }: { data: AuswertungskriterienQuery } =
        await response.json();

      const kriterien = data.einbuergerungstestKriteriumCollection?.items;

      let auswertung: any = kriterien;

      testAnswers.map((item) =>
        item.antwort.scoreCollection?.items.map((score) => {
          // For each score
          kriterien?.map((kriterium) => {
            // Die Werte filtern, die gescored werden:
            kriterium?.werteCollection?.items.map((wert) => {
              if (wert?.sys.id == score?.kriterium?.sys.id) {
                // Find Kriterium for this Wert in my Array
                const auswertungsIndex = auswertung?.findIndex(
                  (auswertungsKriterium: any) =>
                    auswertungsKriterium?.sys.id == kriterium.sys.id
                );
                if (auswertungsIndex !== undefined && auswertungsIndex > -1) {
                  const auswertungsWertIndex = auswertung![
                    auswertungsIndex
                  ]?.werteCollection?.items.findIndex(
                    (auswertungsWert: any) =>
                      auswertungsWert?.sys.id == wert?.sys.id
                  );
                  if (
                    auswertungsWertIndex !== undefined &&
                    auswertungsWertIndex !== null &&
                    auswertungsWertIndex > -1
                  ) {
                    // If Score already exists, add them
                    if (
                      auswertung![auswertungsIndex]!.werteCollection!.items[
                        auswertungsWertIndex
                      ].hasOwnProperty("score")
                    ) {
                      auswertung![auswertungsIndex]!.werteCollection!.items[
                        auswertungsWertIndex
                      ].score += score?.wertung;
                    } else {
                      auswertung![auswertungsIndex]!.werteCollection!.items[
                        auswertungsWertIndex
                      ] = {
                        ...auswertung![auswertungsIndex]?.werteCollection
                          ?.items[auswertungsWertIndex],
                        score: score?.wertung,
                      };
                    }
                  }
                }
              }
            });
          });
        })
      );

      // Remove attributes without score

      let cleaned1 = auswertung.map((kriterium: any) => {
        const cleanedCollection = kriterium.werteCollection.items.filter(
          (wert: any) => wert.hasOwnProperty("score")
        );
        if (cleanedCollection.length > 0) {
          const cleanedKriterium = { ...kriterium };
          cleanedKriterium.werteCollection.items = cleanedCollection;
          return cleanedKriterium;
        } else {
          return;
        }
      });

      let cleaned2 = cleaned1.filter(
        (kriterium: any) => kriterium !== undefined && kriterium !== null
      );

      let cleanedAuswertung = cleaned2.filter(
        (kriterium: any) => kriterium.werteCollection.items.length > 0
      );

      cleanedAuswertung.filter(
        (kriterium: any) => kriterium.werteCollection.items.length > 0
      );

      function array_move(arr: any, old_index: number, new_index: number) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      // Fraktion should come first
      const fullProperties = array_move(
        cleanedAuswertung,
        cleanedAuswertung.findIndex(
          (kriterium: any) => kriterium.kriterium == "Fraktion"
        ),
        0
      );
      // Winning property per category. E.g. "Fraktion" could be "Mytopia", Score: 100 and "Hyänen", Score: 110. In this case "Hyänen" would be the winning property per category and "Mytopia" will be completely dropped

      const userProperties = fullProperties.map((kategorie: any) => ({
        kriterium: kategorie.kriterium,
        score: kategorie.werteCollection.items.sort(
          (a: any, b: any) => b.score - a.score
        )[0].score,
        sys: kategorie.werteCollection.items.sort(
          (a: any, b: any) => b.score - a.score
        )[0].sys,
        wert: kategorie.werteCollection.items.sort(
          (a: any, b: any) => b.score - a.score
        )[0].wert,
      }));

      setAuswertung(fullProperties);

      // Generate a randon name with following format: 1 Random Letter, dash, 4 random numbers

      const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      const name = `${Array(1)
        .join()
        .split(",")
        .map(function () {
          return s.charAt(Math.floor(Math.random() * s.length));
        })
        .join("")}-${Math.floor(Math.random() * 99999)}`;

      await firestore()
        .collection("users")
        .doc(auth().currentUser?.uid)
        .set({
          properties: userProperties,
          einbuergerungstest: {
            // Vollständiges Protokoll speichern?
            // antworten: testAnswers,
            auswertung: fullProperties,
          },
          // you are now a citizen of Mytopia
          citizenship: {
            mytopia: {
              name: name,
              score: 0,
              date: new Date(),
              mitglied: true,
            },
          },
        });
      messaging().subscribeToTopic("mytopia");
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    auswerten();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
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
            {auswertung.map((kriterium: any, index) => (
              <View key={index} className="mt-8">
                <Text className="font-medium">{kriterium.kriterium}</Text>
                <View>
                  <View>
                    <Text className="text-2xl font-semibold">
                      {kriterium.werteCollection.items[0].wert}
                      {/* {wert.score} */}
                    </Text>
                    {kriterium.werteCollection.items[0].bild && (
                      <Image
                        source={{
                          uri: kriterium.werteCollection.items[0].bild.url,
                        }}
                        className="w-full h-52 my-4"
                        resizeMode="contain"
                      />
                    )}
                    <Text className="my-8">
                      {kriterium.werteCollection.items[0].beschreibung &&
                        kriterium.werteCollection.items[0].beschreibung}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
            {/* <Text>{JSON.stringify(auswertung)}</Text> */}
          </View>
        </ScrollView>
        <View className="h-24 p-4 flex justify-center items-center border-t border-neutral-300">
          <StyledButton
            text="Weiter"
            onPress={() => {
              router.push({
                pathname: "/(modals)/aufgaben/new-fraktion",
                params: { fraktion: "mytopia" },
              });
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
