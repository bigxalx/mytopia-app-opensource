import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Aufgabe } from "../../@types/graphql/graphql";
import { Text, View } from "../../components/Themed";
import { useContentfulDataStore, userDataStore } from "../../hooks/useStore";
import { getRegionForCoordinates } from "../../utils/GPSFunctions";

export default function MapScreen() {
  const [
    news,
    aufgaben,
    fetchNews,
    refreshing,
    fetchAufgaben,
    fetchAufgabenContent,
  ] = useContentfulDataStore((state) => [
    state.news,
    state.aufgaben,
    state.fetchNews,
    state.refreshing,
    state.fetchAufgaben,
    state.fetchAufgabeContent,
  ]);

  const userData = userDataStore();

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const [allLocations, setAllLocations] =
    useState<{ longitude: number; latitude: number }[]>();
  const [relevanteAufgaben, setRelevanteAufgaben] = useState<Aufgabe[]>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Die App hat keinen Standortzugriff");
        return;
      }
      const location = await Location.getLastKnownPositionAsync();
      if (location) setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (!news || news.length == 0) {
      fetchNews();
    }
  }, [news, fetchNews]);

  useEffect(() => {
    if (!aufgaben || aufgaben.length == 0) {
      fetchAufgaben();
    }
    if (aufgaben.length > 0) {
    }
  }, [aufgaben, fetchAufgaben]);

  const router = useRouter();

  const fraktionen = Object.entries(userData.citizenship ?? {})
    .filter((fraktion) => fraktion[1].mitglied)
    .map((fraktion) => fraktion[0]);

  useEffect(() => {
    setRelevanteAufgaben(
      // Onlyl aufgaben for the user's fraktion are relevant
      aufgaben
        .filter((aufgabe) =>
          aufgabe.empfaenger?.some((fraktion) => fraktionen.includes(fraktion!))
        )
        // Ablaufdatum must be in the future
        .filter((aufgabe) => new Date(aufgabe.ablaufdatum) > new Date())

        // Release Date must be in the past
        .filter((aufgabe) => new Date(aufgabe.releaseDate) < new Date())

        // User must not have completed it already
        .filter((aufgabe) => {
          return (
            !userData.citizenship?.mytopia?.aufgaben?.some(
              (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
            ) ||
            userData.citizenship?.hyaenen?.aufgaben?.some(
              (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
            ) ||
            userData.citizenship?.zirkel?.aufgaben?.some(
              (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
            ) ||
            userData.citizenship?.vertraute?.aufgaben?.some(
              (erledigteAufgabe) => erledigteAufgabe.id == aufgabe.sys.id
            )
          );
        })
        // Only with locations
        .filter(
          (aufgabe) =>
            aufgabe.task?.__typename == "GpsTask" && aufgabe.task.location
        )
    );

    if (relevanteAufgaben && news && location && location.coords) {
      const locations = [
        ...relevanteAufgaben
          .filter((aufgabe) => aufgabe.task!.__typename == "GpsTask")
          .map((aufgabe) => ({
            latitude: aufgabe!.task!.location!.lat!,
            longitude: aufgabe!.task!.location!.lon!,
          })),

        ...news
          .filter((news) => news.location)
          .map((news) => ({
            latitude: news.location!.lat!,
            longitude: news.location!.lon!,
          })),
        {
          latitude: location!.coords.latitude,
          longitude: location!.coords.longitude,
        },
      ];
      setAllLocations(locations);
    } else if (relevanteAufgaben && news && errorMsg) {
      const locations = [
        ...relevanteAufgaben
          .filter((aufgabe) => aufgabe.task!.__typename == "GpsTask")
          .map((aufgabe) => ({
            latitude: aufgabe!.task!.location!.lat!,
            longitude: aufgabe!.task!.location!.lon!,
          })),

        ...news
          .filter((news) => news.location)
          .map((news) => ({
            latitude: news.location!.lat!,
            longitude: news.location!.lon!,
          })),
      ];
      setAllLocations(locations);
    }
  }, [aufgaben, news, location, errorMsg]);

  if (!allLocations) {
    return (
      <View className="w-full h-full flex justify-center items-center">
        <Text>Lädt</Text>
      </View>
    );
  }

  if (errorMsg) {
  }

  return (
    <View className="flex h-full w-full">
      <MapView
        className="h-full w-full"
        showsUserLocation={true}
        region={getRegionForCoordinates(allLocations)}
      >
        {relevanteAufgaben?.map(
          (aufgabe) =>
            aufgabe.task?.__typename == "GpsTask" && (
              <Marker
                onCalloutPress={() =>
                  router.push(`/(modals)/aufgaben/${aufgabe.sys.id}`)
                }
                key={aufgabe.sys.id}
                title={aufgabe.title!}
                coordinate={{
                  latitude: aufgabe.task.location?.lat!,
                  longitude: aufgabe.task.location?.lon!,
                }}
              ></Marker>
            )
        )}
        {news
          .filter((newsItem) => newsItem.releaseDate <= new Date())
          .filter((news) => news.location)
          .map((news) => (
            <Marker
              onCalloutPress={() => router.push(`(modals)/news/${news.sys.id}`)}
              pinColor="gray"
              key={news.sys.id}
              title={news.title!}
              coordinate={{
                latitude: news.location?.lat!,
                longitude: news.location?.lon!,
              }}
            ></Marker>
          ))}
      </MapView>
    </View>
  );
}
