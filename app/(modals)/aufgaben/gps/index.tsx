import * as Location from "expo-location";
import { Stack, useRouter } from "expo-router";
import { getDistance } from "geolib";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { GpsTask } from "../../../../@types/graphql/graphql";
import { Text, View } from "../../../../components/Themed";
import { useAufgabeStore } from "../../../../hooks/useStore";
import { getRegionForCoordinates } from "../../../../utils/GPSFunctions";

export default function GPSAufgabe() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getLastKnownPositionAsync();
      if (location) setLocation(location);
    })();
  }, []);

  const router = useRouter();
  const aufgabe = useAufgabeStore((state) => state.aufgabe);
  const gpsTask = aufgabe?.task as GpsTask;
  if (!aufgabe) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>Oops, da scheint ein Fehler aufgetreten zu sein</Text>
      </View>
    );
  }
  if (errorMsg) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  Location.watchPositionAsync(
    { accuracy: Location.Accuracy.BestForNavigation, distanceInterval: 0 },
    (location) => {
      if (
        getDistance(location.coords, {
          latitude: gpsTask.location?.lat ?? 0,
          longitude: gpsTask.location?.lon ?? 0,
        }) < 23
      ) {
        router.push("(modals)/aufgaben/ergebnis");
      }
    }
  );
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Karte" }} />
      <View>
        <MapView
          className="h-full w-full"
          showsUserLocation={true}
          region={getRegionForCoordinates([
            {
              latitude: gpsTask.location?.lat ?? 0,
              longitude: gpsTask.location?.lon ?? 0,
            },
            {
              latitude: location?.coords.latitude ?? 0,
              longitude: location?.coords.longitude ?? 0,
            },
          ])}
        >
          <Marker
            title={gpsTask?.ortsbezeichnung ?? ""}
            coordinate={{
              latitude: gpsTask.location?.lat ?? 0,
              longitude: gpsTask.location?.lon! ?? 0,
            }}
          />
        </MapView>
      </View>
    </>
  );
}
