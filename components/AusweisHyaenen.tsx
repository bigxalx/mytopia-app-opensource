import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { GlobalHyaenenInfosCollection } from "../@types/graphql/graphql";
import { Text as ThemedText, View as ThemedView } from "./Themed";

export default function AusweisHyaenen({
  name,
  angemeldetSeit,
  punkte,
  erledigteAufgaben,
  ranking,
  infos,
}: {
  name: string;
  angemeldetSeit: Date;
  punkte: number;
  erledigteAufgaben: number;
  ranking: number;
  infos: GlobalHyaenenInfosCollection;
}) {
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <ScrollView className="w-screen p-4 h-screen">
      <View className="shadow-md">
        <View
          className={`w-full flex border-4 border-[#DC0C0C] p-4overflow-hidden 
          ${windowWidth <= 320 ? "h-48" : "h-56"}`}
        >
          <View className="flex items-center gap-x-2 mb-4">
            <Image
              source={require("../assets/images/hyaenen.png")}
              className="w-16 h-16"
            />
            <Text
              className="text-2xl"
              style={{ fontFamily: "Graduate", color: "#DC0C0C" }}
            >
              Die Hyänen
            </Text>
            <ThemedText
              className="mt-2 text-xl"
              style={{ fontFamily: "Graduate" }}
            >
              {name}
            </ThemedText>
            <ThemedText
              className={`${windowWidth <= 320 ? "mt-2" : "mt-4"}`}
              style={{ fontFamily: "Graduate" }}
            >
              Mitglied seit:
            </ThemedText>
            <ThemedText className="mt-2" style={{ fontFamily: "Graduate" }}>
              {Intl.DateTimeFormat("de").format(angemeldetSeit)}
            </ThemedText>
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
