import auth from "@react-native-firebase/auth";
import { Link, Stack, useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Path, Svg } from "react-native-svg";
import AusweisHyaenen from "../../components/AusweisHyaenen";
import AusweisMytopia from "../../components/AusweisMytopia";
import AusweisVertraute from "../../components/AusweisVertraute";
import AusweisZirkel from "../../components/AusweisZirkel";
import PageControl from "../../components/PageControl";
import { ScrollView, Text, View } from "../../components/Themed";
import { useContentfulDataStore, userDataStore } from "../../hooks/useStore";

export default function ProfileScreen() {
  const user = auth().currentUser;
  const userData = userDataStore();
  const router = useRouter();

  const [global, fetchGlobal] = useContentfulDataStore((state) => [
    state.global,
    state.fetchGlobal,
  ]);

  if (!userData || !global) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>Lädt</Text>
      </View>
    );
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: ({ tintColor }) => (
            <Link href={`/qr-code?uid=${user?.uid}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <View className="mx-3 bg-transparent">
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={tintColor}
                      className="w-6 h-6"
                    >
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                      />
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                      />
                    </Svg>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <PageControl>
            {userData.citizenship?.mytopia ? (
              <AusweisMytopia
                beruf={
                  userData.properties?.find(
                    (property: any) => property?.kriterium == "Beruf"
                  )?.wert!
                }
                name={userData.citizenship.mytopia.name}
                angemeldetSeit={userData.citizenship.mytopia.date}
                punkte={userData.citizenship?.mytopia.score}
                erledigteAufgaben={
                  userData.citizenship?.mytopia?.aufgaben?.length ?? 0
                }
                ranking={userData.citizenship.mytopia.ranking!}
                infos={global?.mytopiaInfosCollection!}
              />
            ) : null}
            {userData.citizenship?.hyaenen?.mitglied && (
              <AusweisHyaenen
                angemeldetSeit={userData.citizenship?.hyaenen?.date}
                ranking={userData.citizenship.hyaenen.ranking!}
                punkte={userData.citizenship.hyaenen.score}
                erledigteAufgaben={
                  userData.citizenship.hyaenen.aufgaben?.length ?? 0
                }
                name={userData.citizenship.hyaenen.name ?? ""}
                infos={global?.hyaenenInfosCollection!}
              />
            )}
            {userData.citizenship?.zirkel?.mitglied && (
              <AusweisZirkel
                angemeldetSeit={userData.citizenship?.zirkel?.date}
                punkte={userData.citizenship?.zirkel?.score}
                erledigteAufgaben={
                  userData.citizenship?.zirkel?.aufgaben?.length!
                }
                ranking={userData.citizenship?.zirkel?.ranking!}
                infos={global?.zirkelInfosCollection!}
              />
            )}
            {userData.citizenship?.vertraute?.mitglied && (
              <AusweisVertraute
                angemeldetSeit={userData.citizenship?.vertraute?.date}
                erledigteAufgaben={
                  userData.citizenship?.vertraute?.aufgaben?.length ?? 0
                }
                name={
                  userData.citizenship?.vertraute?.name ??
                  userData.citizenship?.mytopia?.name!
                }
                punkte={userData.citizenship?.vertraute?.score}
                ranking={userData.citizenship?.vertraute?.ranking ?? 0}
                infos={global?.vertrauteInfosCollection!}
              />
            )}
          </PageControl>
          {/* <SwipeableCards data={data} /> */}
          {/* <Text style={styles.title}>Hello {user?.email}</Text> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
