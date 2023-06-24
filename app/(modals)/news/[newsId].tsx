import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import RichText from "../../../components/RichText";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "../../../components/Themed";
import { useContentfulDataStore } from "../../../hooks/useStore";

export default function NewsItem() {
  const [news, fetchNews, fetchNewsContent] = useContentfulDataStore(
    (state) => [state.news, state.fetchNews, state.fetchNewsContent]
  );

  const params = useLocalSearchParams();

  const newsItemId = params.newsId as string;
  const newsItem = news.find((newsItem) => newsItem.sys.id == newsItemId);

  useEffect(() => {
    if (!newsItem?.content && newsItemId) {
      fetchNewsContent([newsItemId]);
    }
  }, [newsItem, newsItemId, fetchNewsContent]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex w-full h-full">
        <ScrollView className="flex-1">
          <View>
            <Text className="text-2xl font-semibold text-center my-8 px-12">
              {newsItem?.title}
            </Text>
            <RichText
              content={newsItem?.content?.json}
              links={newsItem?.content?.links}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
