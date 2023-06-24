import { Pressable } from "react-native";
import { View, Text } from "./Themed";
import { useColorScheme } from "react-native";
export default ({
  text,
  onPress,
  disabled,
  fraktion = "mytopia",
}: {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  fraktion?: string;
}) => {
  const color = useColorScheme();
  return (
    <Pressable onPress={onPress} disabled={disabled ?? false}>
      {({ pressed }) => (
        <View
          className={`flex justify-center items-center border-2 py-3 px-10 rounded-full shadow ${
            color == "dark"
              ? disabled
                ? "border-neutral-600"
                : fraktion == "mytopia"
                ? "border-[#7B61FF] bg-[#7B61FF]"
                : fraktion == "hyaenen"
                ? "bg-[#DC0C0C] border-[#DC0C0C]"
                : fraktion == "zirkel"
                ? "bg-[#005F00] border-[#005F00]"
                : fraktion == "vertraute"
                ? "bg-[#120947] border-[#48474f]"
                : ""
              : disabled
              ? "border-neutral-300"
              : fraktion == "mytopia"
              ? "border-[#7B61FF]"
              : fraktion == "hyaenen"
              ? "border-[#DC0C0C]"
              : fraktion == "zirkel"
              ? "border-[#005F00]"
              : fraktion == "vertraute"
              ? "border-[#48474f]"
              : ""
          } ${pressed ? "opacity-50" : ""}`}
        >
          <Text
            className={`text-center font-semibold tracking-tight text-base  ${
              color == "dark"
                ? disabled
                  ? "text-neutral-600"
                  : ""
                : disabled
                ? "text-neutral-300"
                : ""
            }`}
          >
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
