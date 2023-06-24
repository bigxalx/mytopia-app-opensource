import { Image, Pressable, RefreshControl } from "react-native";

import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "../../components/Themed";

import { useCallback, useEffect } from "react";
import { useContentfulDataStore, userDataStore } from "../../hooks/useStore";
export default function NewsScreen() {
  const [
    news,
    aufgaben,
    fetchNews,
    refreshing,
    fetchAufgaben,
    fetchAufgabenContent,
  ] = useContentfulDataStore((state) => [
    state.news,
    state.aufgaben,
    state.fetchNews,
    state.refreshing,
    state.fetchAufgaben,
    state.fetchAufgabeContent,
  ]);

  const userData = userDataStore();

  const onRefresh = useCallback(() => {
    fetchNews();
    fetchAufgaben();
    userData.fetchUserData();
  }, []);

  useEffect(() => {
    if (!news || news.length == 0) {
      fetchNews();
    }
  }, [news, fetchNews]);

  useEffect(() => {
    if (!aufgaben || aufgaben.length == 0) {
      fetchAufgaben();
    }
    if (aufgaben.length > 0) {
    }
  }, [aufgaben, fetchAufgaben]);

  const router = useRouter();

  const fraktionen = Object.entries(userData.citizenship ?? {})
    .filter((fraktion) => fraktion[1].mitglied)
    .map((fraktion) => fraktion[0]);

  const relevanteAufgaben =
    // Onlyl aufgaben for the user's fraktion are relevant
    aufgaben
      .filter((aufgabe) =>
        aufgabe.empfaenger?.some((fraktion) => fraktionen.includes(fraktion!))
      )
      // Ablaufdatum must be in the future
      .filter((aufgabe) => new Date(aufgabe.ablaufdatum) > new Date())

      // Release Date must be in the past
      .filter((aufgabe) => new Date(aufgabe.releaseDate) < new Date())

      // User must not have completed it already
      .filter((aufgabe) => {
        return (
          !userData.citizenship?.mytopia?.aufgaben?.some(
            (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
          ) &&
          !userData.citizenship?.hyaenen?.aufgaben?.some(
            (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
          ) &&
          !userData.citizenship?.zirkel?.aufgaben?.some(
            (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
          ) &&
          !userData.citizenship?.vertraute?.aufgaben?.some(
            (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
          )
        );
      });

  return (
    <SafeAreaView>
      <ScrollView className="w-full h-full">
        <RefreshControl
          title="Aktualisieren"
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={-120}
        />
        <View>
          {relevanteAufgaben.length > 0 && (
            <View className="p-4 w-full">
              <Text className="text-lg font-bold mt-4 mb-2 h-10">
                {relevanteAufgaben.length > 1
                  ? "Aktuelle Aufgaben"
                  : "Aktuelle Aufgabe"}
              </Text>
              <View className="flex gap-y-4">
                {relevanteAufgaben.map((aufgabe) => (
                  <Pressable
                    key={aufgabe.sys.id}
                    onPress={() =>
                      router.push(`/(modals)/aufgaben/${aufgabe.sys.id}`)
                    }
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.5 : 1,
                      },
                    ]}
                  >
                    <View className="rounded-2xl flex overflow-hidden">
                      <Image
                        className="w-full h-24"
                        source={{ uri: aufgabe.thumbnail?.url! }}
                      />
                      <View
                        className={`${
                          aufgabe.fraktion == "mytopia"
                            ? "bg-[#7B61FF]"
                            : aufgabe.fraktion == "hyaenen"
                            ? "bg-[#DC0C0C]"
                            : aufgabe.fraktion == "zirkel"
                            ? "bg-[#005F00]"
                            : aufgabe.fraktion == "vertraute"
                            ? "bg-[#120947]"
                            : ""
                        }  p-4`}
                      >
                        <Text className="text-white">
                          {aufgabe.task?.__typename == "GpsTask"
                            ? "GPS Aufgabe"
                            : aufgabe.task?.__typename == "QuizTask"
                            ? "Quiz"
                            : aufgabe.task?.__typename == "StepcounterTask"
                            ? "Fitness Aufgabe"
                            : ""}
                        </Text>
                        <Text className="text-white text-base font-bold">
                          {aufgabe.title}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>

        <Text className="text-lg font-bold mx-4 mt-4 mb-2">News</Text>
        <View className="p-4 flex w-full">
          {news
            .filter((newsItem) => newsItem.releaseDate <= new Date())
            .map((newsItem, index) => (
              <View key={index}>
                {index > 0 && (
                  <View
                    className="h-0.5 w-full my-4 rounded-full"
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                  />
                )}
                <Pressable
                  onPress={() =>
                    router.push(`/(modals)/news/${newsItem.sys.id}`)
                  }
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.5 : 1,
                    },
                  ]}
                >
                  <View className="flex flex-row">
                    <View className="w-16 h-16 mr-2">
                      <Image
                        className="rounded w-16 h-16 "
                        source={{ uri: newsItem?.thumbnail?.url! }}
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="flex-shrink font-semibold text-base">
                      {newsItem.title}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
