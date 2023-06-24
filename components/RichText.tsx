import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { View, Text } from "./Themed";
import { Link } from "expo-router";
import { Image, Pressable, Platform } from "react-native";
import {
  NewsContent,
  AufgabeContentLinks,
  InfoContentLinks,
  NewsContentLinks,
  VideoEmbed,
} from "../@types/graphql/graphql";
import { Audio, Video, ResizeMode } from "expo-av";
import { useRef } from "react";
export default function RichText({
  content,
  links,
}: {
  content: NewsContent["json"];
  links?: NewsContentLinks | AufgabeContentLinks | InfoContentLinks;
}) {
  const options: Options = {
    renderMark: {
      [MARKS.UNDERLINE]: (text) => {
        return <Text className="underline">{text}</Text>;
      },
      [MARKS.BOLD]: (text) => {
        return <Text className="font-bold">{text}</Text>;
      },
      [MARKS.ITALIC]: (text) => {
        return <Text className="italic">{text}</Text>;
      },
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Link className="text-blue-500 underline" href={node.data.uri}>
          {children}
        </Link>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const asset = links?.entries.block.find(
          (blockAsset) => blockAsset?.sys.id == node.data.target.sys.id
        );
        const video = useRef(null);
        try {
          const videoEmbed = asset as VideoEmbed;
          switch (videoEmbed.__typename) {
            case "VideoEmbed":
              return (
                <View className="py-4">
                  <Video
                    ref={video}
                    className="hidden"
                    source={{
                      uri: videoEmbed.videoUrl!,
                    }}
                    posterSource={{
                      uri: videoEmbed.thumbnail?.url!,
                    }}
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                  />

                  <Pressable
                    onPress={() => {
                      video.current.playAsync();
                      video.current.presentFullscreenPlayer();
                    }}
                  >
                    <View
                      style={{
                        zIndex: 10,
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        width: "100%",
                        height: 200,
                      }}
                    >
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../assets/images/videoPlayButton.png")}
                      />
                    </View>
                    <View style={{}}>
                      <Image
                        source={{
                          uri:
                            // cachedThumbnail
                            //   ? `file://${cachedThumbnail}`
                            //   :
                            videoEmbed?.thumbnail?.url!,
                        }}
                        style={{ width: "100%", height: 200 }}
                      />
                    </View>
                  </Pressable>
                </View>
              );

            default:
              return null;
          }
        } catch (e) {
          console.warn(e);
        }
      },
      [BLOCKS.PARAGRAPH]: (_node, children) => {
        return <Text className="text-base">{children}</Text>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = links?.assets.block.find(
          (blockAsset) => blockAsset?.sys.id == node.data.target.sys.id
        );
        const ratio = asset?.width! / asset?.height!;
        return (
          <View className="py-4">
            <Image
              style={{
                aspectRatio: ratio,
              }}
              className={`w-full`}
              resizeMode="contain"
              source={{
                uri: asset?.url!,
              }}
            />
          </View>
        );
      },
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Text className="text-2xl font-bold pb-2">{children}</Text>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Text className="text-xl font-semibold pb-2">{children}</Text>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <View className="py-2 w-full">
          {children?.map((child: any, i) => (
            <View
              key={i}
              className="flex flex-row items-start gap-x-6 py-1 w-full"
            >
              <View className="rounded-full w-2 h-2 mt-1.5 bg-neutral-300"></View>
              {Platform.OS == "ios" ? (
                <Text className="flex-1">{child}</Text>
              ) : (
                child
              )}
            </View>
          ))}
        </View>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <View className="py-2">
          {children?.map((child: any, i) => (
            <View key={i} className="flex flex-row items-start gap-x-2 py-1">
              <Text className="w-6 text-base font-semibold text-neutral-500">
                {i + 1}.
              </Text>
              {Platform.OS == "ios" ? (
                <Text className="flex-1 mt-[3.5px]">{child}</Text>
              ) : (
                child
              )}
            </View>
          ))}
        </View>
      ),
      [BLOCKS.LIST_ITEM]: (_node, child) => {
        return <View className="">{child}</View>;
      },
      [BLOCKS.QUOTE]: (_node, child) => {
        return (
          <View className="border-l-neutral-300 border-l-4 py-2">
            <Text className="pl-4"> {child}</Text>
          </View>
        );
      },
      [BLOCKS.HR]: (_node, child) => {
        return (
          <View className="my-8 bg-neutral-300 w-3/4 mx-auto h-1 rounded-full">
            {child}
          </View>
        );
      },
    },
  };

  const components = documentToReactComponents(content, options);
  return <View className="p-4">{components}</View>;
}
