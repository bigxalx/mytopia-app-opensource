import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { GlobalZirkelInfosCollection } from "../@types/graphql/graphql";
import { Text as ThemedText, View as ThemedView } from "./Themed";

export default function AusweisZirkel({
  angemeldetSeit,
  punkte,
  erledigteAufgaben,
  ranking,
  infos,
}: {
  angemeldetSeit: Date;
  punkte: number;
  erledigteAufgaben: number;
  ranking: number;
  infos: GlobalZirkelInfosCollection;
}) {
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
  const colorScheme = useColorScheme;
  const router = useRouter();
  return (
    <ScrollView className="w-screen p-4 h-screen">
      <View className="">
        <View
          className={`w-full flex border border-[#005F00] overflow-hidden rounded-md bg-white
          ${windowWidth <= 320 ? "h-48" : "h-56"}
          `}
        >
          <ImageBackground
            className="w-full h-full"
            source={require("../assets/images/lilienBackground.png")}
          />

          <View
            className={`absolute flex items-center justify-center w-full ${
              windowWidth <= 320 ? "px-8" : "px-10"
            }`}
          >
            <View className="flex items-center mb-4 w-full">
              <Text
                className={`text-center my-2
                ${windowWidth <= 320 ? "text-2xl" : "text-3xl"}`}
                style={{ color: "#005F00", fontFamily: "Lobster" }}
              >
                Der Zirkel der {"\n"}weißen Lilie
              </Text>
              <Image
                source={require("../assets/images/lilien.png")}
                className="w-12 h-12 absolute top-12 right-0"
              />
              <Text
                className={`italic text-center ${
                  windowWidth <= 320 ? "text-xs mt-4" : "mt-6"
                }`}
              >
                Was ist das Glück?
              </Text>
              <Text
                className={`italic text-center  ${
                  windowWidth <= 320 ? "text-xs" : ""
                }`}
              >
                Und warum bin ich nicht glücklich?
              </Text>

              <Text className={`mt-6  ${windowWidth <= 320 ? "text-xs" : ""}`}>
                Erleuchtet seit:
              </Text>
              <Text
                className={`mt-1 font-bold  ${
                  windowWidth <= 320 ? "text-xs" : ""
                }`}
              >
                {Intl.DateTimeFormat("de").format(angemeldetSeit)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ThemedView className="pt-12 flex-1">
        <ThemedText style={styles.title}>Statistiken</ThemedText>
        <ThemedView className="flex flex-row w-full justify-between">
          <ThemedView className="py-2 flex">
            <ThemedText className="text-2xl font-bold">{punkte}</ThemedText>
            <ThemedText className="text-base text-neutral-600">
              Punkte
            </ThemedText>
          </ThemedView>
          <ThemedView className="py-2 flex">
            <ThemedText className="text-2xl font-bold">
              {erledigteAufgaben}
            </ThemedText>
            <ThemedText className="text-base text-neutral-600">
              Erledigte
            </ThemedText>
            <ThemedText className="text-base text-neutral-600">
              Aufgaben
            </ThemedText>
          </ThemedView>
          <ThemedView className="py-2 flex">
            <ThemedText className="text-2xl font-bold">#{ranking}</ThemedText>
            <ThemedText className="text-base text-neutral-600">
              Ranking
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedText style={styles.title} className="mt-16">
          Weitere Informationen
        </ThemedText>
        <ThemedView className="gap-y-2 w-full">
          {infos.items.map((info) => (
            <Pressable
              key={info?.sys.id}
              onPress={() => router.push(`infos/${info?.sys.id}`)}
            >
              <ThemedView className="flex flex-row items-center justify-between">
                <ThemedText className="py-3 text-base">
                  {info?.title}
                </ThemedText>

                <Svg
                  viewBox="0 0 20 20"
                  fill={colorScheme == "dark" ? "white" : "black"}
                  className="w-5 h-5"
                >
                  <Path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </Svg>
              </ThemedView>
              <ThemedView
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            </Pressable>
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 12,
    flex: 1,
    alignItems: "flex-start",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 18,
  },
  separator: {
    height: 1,
    width: "100%",
  },
});
