import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  GetInfoQuery as GetInfoQueryType,
  Info,
} from "../../../@types/graphql/graphql";
import RichText from "../../../components/RichText";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "../../../components/Themed";
import { GetInfoQuery } from "../../../constants/Queries";

export default function InfoScreen() {
  const [info, setInfo] = useState<Info>();

  async function fetchInfo(id: string) {
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          },
          body: JSON.stringify({
            query: GetInfoQuery,
            variables: { id: id },
          }),
        }
      );
      const { data }: { data: GetInfoQueryType } = await response.json();
      setInfo(data.info);
    } catch (e) {
      console.warn(e);
    }
  }

  const params = useLocalSearchParams();

  useEffect(() => {
    if (params.infoId && !info) {
      fetchInfo(params.infoId);
    }
  }, [params, info]);

  if (!params.infoId) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>Fehler beim Laden der Info</Text>
      </View>
    );
  }
  if (!info) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>Lädt</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex w-full h-full">
        <ScrollView className="flex-1">
          <View>
            <Text className="text-2xl font-semibold text-center my-8 px-12">
              {info?.title}
            </Text>
            <RichText
              content={info?.content?.json}
              links={info?.content?.links}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
