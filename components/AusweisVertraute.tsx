import { LinearGradient } from "expo-linear-gradient";
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
import { GlobalVertrauteInfosCollection } from "../@types/graphql/graphql";
import { Text as ThemedText, View as ThemedView } from "./Themed";

export default function AusweisVertraute({
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
  infos: GlobalVertrauteInfosCollection;
}) {
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <ScrollView className="w-screen p-4 h-screen">
      <View className="shadow shadow-neutral-600">
        <View
          className={`w-full flex rounded-md border border-black p-4 mb-4 h-56 overflow-hidden
          ${windowWidth <= 320 ? "h-48" : "h-56"}`}
        >
          <LinearGradient
            className="absolute"
            colors={[
              "rgba(19, 19, 155, 0.541667)",
              "#120947",
              "rgba(44, 22, 178, 0.63) 92.91%)",
            ]}
            locations={[0.13, 0.61, 0.92]}
            style={{
              transform: [{ rotate: "-45deg" }],
              height: 600,
              width: 600,
              top: -150,
              left: -100,
            }}
          ></LinearGradient>
          <View className="flex items-center gap-y-2 mb-4">
            <Image
              source={require("../assets/images/mytopia.png")}
              style={{ width: 45, height: 48 }}
            />
            <Text
              className={`text-center text-white
              ${windowWidth <= 320 ? "text-xl" : "text-3xl"}`}
              style={{ fontFamily: "NotoBold" }}
            >
              Vertraute der Wohltäterin
            </Text>
          </View>
          <View
            className={`flex flex-row justify-between items-end 
            ${windowWidth <= 320 ? "mt-0" : "mt-2 "}`}
          >
            <View className="flex justify-between">
              <View className="flex">
                <Text
                  className="text-xs text-white"
                  style={{ fontFamily: "Noto" }}
                >
                  Name
                </Text>
                <Text
                  style={{ fontFamily: "SpaceMono" }}
                  className="text-xl font-bold text-white"
                >
                  {name}
                </Text>
              </View>
            </View>
            <View className="flex justify-between">
              <View className="flex">
                <Text
                  className="text-xs text-white"
                  style={{ fontFamily: "Noto" }}
                >
                  Eingeweiht seit
                </Text>
                <Text
                  style={{ fontFamily: "SpaceMono" }}
                  className="font-bold text-white"
                >
                  {Intl.DateTimeFormat("de").format(angemeldetSeit)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ThemedView className="pt-8 flex-1">
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
