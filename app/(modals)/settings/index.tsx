import * as Linking from "expo-linking";
import {
  Alert,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/installations";
import { nativeApplicationVersion, nativeBuildVersion } from "expo-application";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "../../../components/Themed";
import { userDataStore } from "../../../hooks/useStore";

const SeparatorView = () => (
  <View
    className="mt-4 mb-8 h-0.5 w-full"
    lightColor="#eee"
    darkColor="rgba(255,255,255,0.1)"
  />
);

export default function SettingsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const userData = userDataStore();

  const changeEmail = async (newEmail: string) => {
    try {
      await auth().currentUser?.verifyBeforeUpdateEmail(newEmail);
      Alert.alert(
        "Aktualisierte E-Mail-Adresse bestätigen",
        "Wir haben dir eine E-Mail geschickt, um deine neue E-Mail Adresse zu bestätigen. Bitte klick auf den Link in der E-Mail."
      );
      await AsyncStorage.setItem("emailAdress", String(newEmail));
    } catch (e) {
      if (
        String(e).includes("auth/requires-recent-login") ||
        String(e).includes("auth/user-token-expired")
      ) {
        router.push("auth/verify");
      } else {
        Alert.alert("Fehler", String(e));
      }
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Einstellungen" }} />
      <SafeAreaView className="min-h-screen">
        <ScrollView>
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Neue E-Mail Adresse</Text>
                  <TextInput
                    onChangeText={setEmail}
                    className="text-black border border-black w-40 p-2 m-2 rounded"
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Abbrechen</Text>
                  </Pressable>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      changeEmail(email);
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Text style={styles.title}>Account</Text>
            <Text className="text-neutral-500 pb-2">
              Angemeldet als {auth().currentUser?.email}
            </Text>

            <View className="gap-y-2 w-full">
              <Pressable
                className="py-2"
                onPress={async () => {
                  try {
                    await auth().signOut();
                  } catch (e) {
                    console.error("Oh no! ", e);
                  }
                }}
              >
                <Text className="text-base">Abmelden</Text>
              </Pressable>
              <Pressable
                className="py-2"
                onPress={async () => {
                  if (
                    auth().currentUser?.email ==
                    "armin.luschin+appstore@gmail.com"
                  ) {
                    Alert.alert(
                      "Not supported",
                      "Changing the email address for this account is not supported. This is a special account for App Store Review purposes only."
                    );
                    return;
                  }

                  try {
                    Platform.OS == "ios"
                      ? Alert.prompt("E-Mail ändern", "Neue E-Mail Adresse: ", [
                          { text: "Abbrechen", style: "cancel" },
                          {
                            text: "Ok",
                            onPress: (newEmail) =>
                              changeEmail(String(newEmail)),
                          },
                        ])
                      : Platform.OS == "android"
                      ? setModalVisible(true)
                      : null;
                  } catch (e) {
                    console.error("Oh no! ", e);
                  }
                }}
              >
                <Text className="text-base">E-Mail Adresse ändern</Text>
              </Pressable>
              <Pressable
                className="py-2"
                onPress={async () => {
                  if (
                    auth().currentUser?.email ==
                    "armin.luschin+appstore@gmail.com"
                  ) {
                    Alert.alert(
                      "Not supported",
                      "Changing the password for this account is not supported. This is a special account for App Store Review purposes only."
                    );
                    return;
                  }

                  try {
                    Platform.OS == "ios"
                      ? Alert.alert("E-Mail ändern", "Neue E-Mail Adresse: ", [
                          { text: "Abbrechen", style: "cancel" },
                          {
                            text: "Ok",
                            onPress: () =>
                              auth().sendPasswordResetEmail(
                                auth().currentUser?.email!
                              ),
                          },
                        ])
                      : Platform.OS == "android"
                      ? setModalVisible(true)
                      : null;
                  } catch (e) {
                    console.error("Oh no! ", e);
                  }
                }}
              >
                <Text className="text-base">Passwort ändern</Text>
              </Pressable>

              <Pressable
                className="py-2"
                onPress={async () => {
                  if (
                    auth().currentUser?.email ==
                    "armin.luschin+appstore@gmail.com"
                  ) {
                    Alert.alert(
                      "Not supported",
                      "Deleting this account is not supported. This is a special account for App Store Review purposes only."
                    );
                    return;
                  }

                  Alert.alert(
                    "Account löschen",
                    "Möchtest du deinen Account wirklich löschen? Das kann nicht rückgängig gemacht werden.",
                    [
                      { text: "Abbrechen", style: "cancel" },
                      {
                        text: "Account löschen",
                        style: "destructive",
                        onPress: async () => {
                          try {
                            await firestore()
                              .collection("users")
                              .doc(auth().currentUser?.uid)
                              .delete();
                            await auth().currentUser?.delete();
                            await firebase().app.installations().delete();
                            await firebase().app.installations().getId();
                            await auth().currentUser?.reload();
                            userData.fetchUserData();
                          } catch (e) {
                            console.error("Oh no! ", e);
                            if (
                              String(e).includes(
                                "auth/requires-recent-login"
                              ) ||
                              String(e).includes("auth/user-token-expired")
                            ) {
                              router.push("auth/verify");
                            } else {
                              Alert.alert("Fehler", String(e));
                            }
                          }
                        },
                      },
                    ]
                  );
                }}
              >
                <Text className="text-base">Account löschen</Text>
              </Pressable>
            </View>
            <SeparatorView />
            <Text style={styles.title}>Hilfe und Support</Text>
            <View className="gap-y-2 w-full">
              <Link href={"https://mytopia.world/datenschutz"}>
                <Text className="text-base">Datenschutz</Text>
              </Link>
              <Pressable
                className="py-2"
                onPress={() => Linking.openURL("mailto:support@mytopia.world")}
              >
                <Text className="text-base">Kontakt</Text>
              </Pressable>
            </View>
            <SeparatorView />

            {/* <Text style={styles.title}>Debug</Text>
            <View className="gap-y-2 w-full">
              <Pressable
                className="py-2"
                onPress={async () => {
                  Alert.alert(
                    "Fortschritt zurücksetzen",
                    "Möchtest du deinen Account zurücksetzen? Dein Spielfortschritt wird gelöscht und du beginnst von vorne. Der Einbürgerungstest bleibt erhalten. Das kann nicht rückgängig gemacht werden.",
                    [
                      { text: "Abbrechen", style: "cancel" },
                      {
                        text: "Account Reset",
                        style: "destructive",
                        onPress: async () => {
                          try {
                            await firestore()
                              .collection("users")
                              .doc(auth().currentUser?.uid)
                              .update({
                                citizenship: {
                                  mytopia: {
                                    date: userData.citizenship?.mytopia?.date,
                                    name: userData.citizenship?.mytopia?.name,
                                    score: 0,
                                    mitglied: true,
                                  },
                                },
                              });
                            await firebase().app.installations().delete();
                            await firebase().app.installations().getId();
                            setTimeout(async () => {
                              userData.fetchUserData();
                              router.push("/");
                            }, 2000);
                          } catch (e) {
                            console.error("Oh no! ", e);
                            if (
                              String(e).includes("auth/requires-recent-login")
                            ) {
                              auth().sendSignInLinkToEmail(
                                auth().currentUser?.email!,
                                {
                                  handleCodeInApp: true,
                                  url: "https://mytopia.page.link/verify-email",
                                  android: {
                                    packageName: "net.minuseins.mytopia",
                                  },
                                }
                              );
                              Alert.alert(
                                "Identität bestätigen",
                                "Um die Aktion durchzuführen, musst du dich aus Sicherheitsgründen erst erneut anmelden. Wir haben dir eine E-Mail geschickt, in der du einen Link zur Bestätigung findest. Versuche es danach erneut."
                              );
                            } else {
                              Alert.alert("Fehler", String(e));
                            }
                          }
                        },
                      },
                    ]
                  );
                }}
              >
                <Text className="text-base">Fortschritt zurücksetzen</Text>
              </Pressable>
              <Pressable
                className="py-2"
                onPress={async () => {
                  Alert.alert(
                    "Account komplett zurücksetzen",
                    "Möchtest du deinen Account wirklich komplett zurücksetzen? Alle Daten werden gelöscht und du beginnst von vorne. Das kann nicht rückgängig gemacht werden.",
                    [
                      { text: "Abbrechen", style: "cancel" },
                      {
                        text: "Kompletter reset",
                        style: "destructive",
                        onPress: async () => {
                          try {
                            await firestore()
                              .collection("users")
                              .doc(auth().currentUser?.uid)
                              .delete();
                            await firebase().app.installations().delete();
                            await firebase().app.installations().getId();
                            setTimeout(async () => {
                              await userData.fetchUserData();
                              auth().currentUser?.reload();
                              router.push("/");
                            }, 2000);
                          } catch (e) {
                            console.error("Oh no! ", e);
                            if (
                              String(e).includes("auth/requires-recent-login")
                            ) {
                              auth().sendSignInLinkToEmail(
                                auth().currentUser?.email!,
                                {
                                  handleCodeInApp: true,
                                  url: "https://mytopia.page.link/verify-email",
                                  android: {
                                    packageName: "net.minuseins.mytopia",
                                  },
                                }
                              );
                              Alert.alert(
                                "Identität bestätigen",
                                "Um die Aktion durchzuführen, musst du dich aus Sicherheitsgründen erst erneut anmelden. Wir haben dir eine E-Mail geschickt, in der du einen Link zur Bestätigung findest. Versuche es danach erneut."
                              );
                            } else {
                              Alert.alert("Fehler", String(e));
                            }
                          }
                        },
                      },
                    ]
                  );
                }}
              >
                <Text className="text-base">Account komplett zurücksetzen</Text>
              </Pressable>
            </View> */}

            {/* <SeparatorView /> */}
            <Text className="py-2 text-xs text-center w-full text-neutral-400 ">
              {`Version ${nativeApplicationVersion} (${nativeBuildVersion})-6`}
            </Text>
            <Text className="text-xs text-center w-full leading-5 mt-4">
              Diese App wurde von{" "}
              <Link className="underline " href="https://arminluschin.com">
                Armin Luschin
              </Link>{" "}
              im Auftrag des{" "}
              <Link
                className="underline"
                href="https://theater-altenburg-gera.de"
              >
                Theater Altenburg Gera
              </Link>{" "}
              designed und entwickelt.
            </Text>
            <Text className="text-center text-xs w-full my-4 text-neutral-500">
              ©2023 Theater Altenburg Gera gGmbH
            </Text>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar
              barStyle={Platform.OS === "ios" ? "light-content" : "default"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
