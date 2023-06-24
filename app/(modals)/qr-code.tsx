import { Stack, useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView, Text, View } from "../../components/Themed";

export default function QRCodeScreen() {
  const colors = useColorScheme();
  const params = useLocalSearchParams();
  if (!params.uid) {
    return (
      <SafeAreaView>
        <View className="w-full h-full flex items-center justify-center">
          <Text>Error</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "QR Code",
        }}
      />
      <SafeAreaView>
        <View className={`w-full h-full flex items-center justify-center`}>
          <QRCode
            backgroundColor={colors == "dark" ? "black" : "white"}
            color={colors == "dark" ? "white" : "black"}
            value={String(params.uid)}
            size={300}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
