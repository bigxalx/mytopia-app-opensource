import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { GlobalMytopiaInfosCollection } from "../@types/graphql/graphql";
import { Text as ThemedText, View as ThemedView } from "./Themed";

export default function AusweisMytopia({
  name,
  beruf,
  angemeldetSeit,
  punkte,
  erledigteAufgaben,
  ranking,
  infos,
}: {
  name: string;
  beruf: string;
  angemeldetSeit: Date;
  punkte: number;
  erledigteAufgaben: number;
  ranking: number;
  infos: GlobalMytopiaInfosCollection;
}) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

  return (
    <View className="w-screen h-screen p-4 h-50">
      <View>
        <View
          className={`w-full flex rounded-md border border-black p-4 mb-4 h-56 overflow-hidden 
          ${windowWidth <= 320 ? "h-48" : "h-56"}

        `}
        >
          <LinearGradient
            className="absolute"
            colors={[
              "rgba(248, 247, 254, 0.541667)",
              "#DCD8FA",
              "rgba(248, 247, 254, 0.63)",
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
          <View className="flex flex-row items-center gap-x-2 mb-4">
            <Image
              source={require("../assets/images/mytopia.png")}
              style={{ width: 45, height: 48 }}
            />
            <Text className="text-xl" style={{ fontFamily: "NotoBold" }}>
              Personalausweis
            </Text>
          </View>
          <View className="flex flex-row justify-between">
            <View
              className={`flex justify-between                   
              ${windowWidth <= 320 ? "gap-y-6" : "gap-y-8 "}
`}
            >
              <View className="flex">
                <Text className="text-xs" style={{ fontFamily: "Noto" }}>
                  Name
                </Text>
                <Text
                  style={{ fontFamily: "SpaceMono" }}
                  className="text-xl font-bold"
                >
                  {name}
                </Text>
              </View>
              <View className="flex">
                <Text className="text-xs" style={{ fontFamily: "Noto" }}>
                  Staatsbürgerschaft
                </Text>
                <Text style={{ fontFamily: "SpaceMono" }} className="font-bold">
                  Mytopia
                </Text>
              </View>
            </View>
            <View
              className={`flex justify-between 
            ${windowWidth <= 320 ? "mt-6" : "mt-8"}`}
            >
              <View className="flex">
                <Text className="text-xs" style={{ fontFamily: "Noto" }}>
                  Beruf
                </Text>
                <Text style={{ fontFamily: "SpaceMono" }} className="font-bold">
                  {beruf}
                </Text>
              </View>
              <View className="flex">
                <Text className="text-xs" style={{ fontFamily: "Noto" }}>
                  Angemeldet seit
                </Text>
                <Text style={{ fontFamily: "SpaceMono" }} className="font-bold">
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
    </View>
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
