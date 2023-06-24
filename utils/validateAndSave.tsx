import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
import { Aufgabe, Global } from "../@types/graphql/graphql";

export default function validateAndSaveAufgabe({
  aufgabe,
  geschafft,
  userCitizenship,
  global,
  punkte,
}: {
  aufgabe: Aufgabe | undefined;
  geschafft: boolean;
  userCitizenship:
    | {
        mytopia?:
          | {
              name: string;
              date: Date;
              mitglied: boolean;
              aufgaben?: [{ id: string; score: number }] | undefined;
              score: number;
              ranking?: number | undefined;
            }
          | undefined;
        hyaenen?:
          | {
              name?: string | undefined;
              date: Date;
              mitglied: boolean;
              aufgaben?: [{ id: string; score: number }] | undefined;
              score: number;
              ranking?: number | undefined;
            }
          | undefined;
        zirkel?:
          | {
              name?: string | undefined;
              date: Date;
              mitglied: boolean;
              aufgaben?: [{ id: string; score: number }] | undefined;
              score: number;
              ranking?: number | undefined;
            }
          | undefined;
        vertraute?:
          | {
              name?: string | undefined;
              date: Date;
              mitglied: boolean;
              aufgaben?: [{ id: string; score: number }] | undefined;
              score: number;
              ranking?: number | undefined;
            }
          | undefined;
      }
    | undefined;
  global: Global | undefined;
  punkte: number;
}): {
  geschafft: boolean;
  error?: string;
  userWillChangeToFraktion: boolean | string;
} {
  const now = firestore.Timestamp.now().toDate();
  let error;
  // Ablaufdatum must be in the future
  if (!(new Date(aufgabe?.ablaufdatum) > now)) {
    geschafft = false;
    error = "Die Aufgabe ist abgelaufen";
    return { error, geschafft, userWillChangeToFraktion: false };
  }

  // Release Date must be in the past
  if (!(new Date(aufgabe?.releaseDate) < now)) {
    geschafft = false;
    error = "Die Aufgabe wurde noch nicht veröffentlicht";
    return { error, geschafft, userWillChangeToFraktion: false };
  }

  // Check that user hasn't completed aufgabe before
  if (aufgabe?.fraktion == "mytopia") {
    if (
      userCitizenship?.mytopia?.aufgaben?.some(
        (bereitsErledigteAufgaben) =>
          bereitsErledigteAufgaben.id == aufgabe.sys.id
      )
    ) {
      geschafft = false;
      error = "Du hast diese Aufgabe bereits abgeschlossen";
      return { error, geschafft, userWillChangeToFraktion: false };
    }
  }
  if (aufgabe?.fraktion == "hyaenen") {
    if (
      userCitizenship?.hyaenen?.aufgaben?.some(
        (bereitsErledigteAufgaben) =>
          bereitsErledigteAufgaben.id == aufgabe.sys.id
      )
    ) {
      geschafft = false;
      error = "Du hast diese Aufgabe bereits abgeschlossen";
      return { error, geschafft, userWillChangeToFraktion: false };
    }
  }
  if (aufgabe?.fraktion == "zirkel") {
    if (
      userCitizenship?.zirkel?.aufgaben?.some(
        (bereitsErledigteAufgaben) =>
          bereitsErledigteAufgaben.id == aufgabe.sys.id
      )
    ) {
      geschafft = false;
      error = "Du hast diese Aufgabe bereits abgeschlossen";
      return { error, geschafft, userWillChangeToFraktion: false };
    }
  }
  if (aufgabe?.fraktion == "vertraute") {
    if (
      userCitizenship?.vertraute?.aufgaben?.some(
        (bereitsErledigteAufgaben) =>
          bereitsErledigteAufgaben.id == aufgabe.sys.id
      )
    ) {
      geschafft = false;
      error = "Du hast diese Aufgabe bereits abgeschlossen";
      return { error, geschafft, userWillChangeToFraktion: false };
    }
  }

  // Check if threshold is met to change fraktion and
  // add Aufgabe to user's firestore data
  // Update global fraktionen score
  let userWillChangeToFraktion: boolean | string = false;
  if (aufgabe?.fraktion == "mytopia") {
    let bereitsErledigteAufgaben = userCitizenship?.mytopia?.aufgaben;
    if (bereitsErledigteAufgaben) {
      bereitsErledigteAufgaben?.push({
        id: aufgabe.sys.id,
        score: geschafft ? aufgabe.punkte! : 0,
      });
    } else {
      bereitsErledigteAufgaben = [
        {
          id: aufgabe.sys.id,
          score: geschafft ? aufgabe.punkte! : 0,
        },
      ];
    }
    firestore()
      .collection("users")
      .doc(auth().currentUser?.uid)
      .set(
        {
          citizenship: {
            mytopia: {
              aufgaben: bereitsErledigteAufgaben,
              score: firestore.FieldValue.increment(
                geschafft ? aufgabe.punkte! : 0
              ),
            },
          },
        },
        { merge: true }
      );

    // Update Global Fraktionen
    // firestore()
    //   .collection("fraktionen")
    //   .doc("mytopia")
    //   .update({
    //     score: firestore.FieldValue.increment(punkte),
    //   });
  }

  if (aufgabe?.fraktion == "hyaenen") {
    if (
      geschafft &&
      // User is not a member of any fraktion other than Mytopia.
      // User cannot change fraktion again after becoming member of hyaenen, zirkel or vertraute
      !userCitizenship?.hyaenen?.mitglied &&
      !userCitizenship?.zirkel?.mitglied &&
      !userCitizenship?.vertraute?.mitglied &&
      // This Aufgabe will put them over the threshold
      (userCitizenship?.hyaenen?.score ?? 0) + punkte >=
        global?.hyaenenSchwelle!
    ) {
      userWillChangeToFraktion = "hyaenen";
    }
    let bereitsErledigteAufgaben = userCitizenship?.hyaenen?.aufgaben;
    if (bereitsErledigteAufgaben) {
      bereitsErledigteAufgaben?.push({
        id: aufgabe.sys.id,
        score: geschafft ? aufgabe.punkte! : 0,
      });
    } else {
      bereitsErledigteAufgaben = [
        {
          id: aufgabe.sys.id,
          score: geschafft ? aufgabe.punkte! : 0,
        },
      ];
    }
    try {
      firestore()
        .collection("users")
        .doc(auth().currentUser?.uid)
        .set(
          {
            citizenship: {
              hyaenen: {
                date: now,
                ...(userWillChangeToFraktion == "hyaenen" && {
                  mitglied: true,
                }),
                aufgaben: bereitsErledigteAufgaben,
                score: firestore.FieldValue.increment(
                  geschafft ? aufgabe.punkte! : 0
                ),
              },
            },
          },
          { merge: true }
        );
      //   if (geschafft) {
      //     firestore()
      //       .collection("fraktionen")
      //       .doc("hyaenen")
      //       .set({
      //         score: firestore.FieldValue.increment(punkte),
      //       });
      //   }
    } catch (e) {
      console.warn(e);
    }
  }

  if (aufgabe?.fraktion == "zirkel") {
    if (
      geschafft &&
      !userCitizenship?.hyaenen?.mitglied &&
      !userCitizenship?.zirkel?.mitglied &&
      !userCitizenship?.vertraute?.mitglied &&
      (userCitizenship?.zirkel?.score ?? 0) + punkte >= global?.zirkelSchwelle!
    ) {
      userWillChangeToFraktion = "zirkel";
    }

    let bereitsErledigteAufgaben = userCitizenship?.zirkel?.aufgaben;
    if (bereitsErledigteAufgaben) {
      bereitsErledigteAufgaben?.push({
        id: aufgabe.sys.id,
        score: geschafft ? aufgabe.punkte! : 0,
      });
    } else {
      bereitsErledigteAufgaben = [
        {
          id: aufgabe.sys.id,
          score: geschafft ? aufgabe.punkte! : 0,
        },
      ];
    }
    firestore()
      .collection("users")
      .doc(auth().currentUser?.uid)
      .set(
        {
          citizenship: {
            zirkel: {
              date: now,
              ...(userWillChangeToFraktion == "zirkel" && {
                mitglied: true,
              }),
              aufgaben: bereitsErledigteAufgaben,
              score: firestore.FieldValue.increment(
                geschafft ? aufgabe.punkte! : 0
              ),
            },
          },
        },
        { merge: true }
      );
    // if (geschafft) {
    //   firestore()
    //     .collection("fraktionen")
    //     .doc("zirkel")
    //     .set({
    //       score: firestore.FieldValue.increment(punkte),
    //     });
    // }
  }

  if (aufgabe?.fraktion == "vertraute") {
    if (
      geschafft &&
      // User is not a member of any fraktion other than Mytopia.
      // User cannot change fraktion again after becoming member of hyaenen, zirkel or vertraute
      !userCitizenship?.hyaenen?.mitglied &&
      !userCitizenship?.zirkel?.mitglied &&
      !userCitizenship?.vertraute?.mitglied &&
      // This Aufgabe will put them over the threshold
      (userCitizenship?.vertraute?.score ?? 0) + punkte >=
        global?.vertrauteSchwelle!
    ) {
      userWillChangeToFraktion = "vertraute";
    }

    let bereitsErledigteAufgaben = userCitizenship?.vertraute?.aufgaben;
    if (bereitsErledigteAufgaben) {
      bereitsErledigteAufgaben?.push({
        id: aufgabe.sys.id,
        score: geschafft ? aufgabe.punkte! : 0,
      });
    } else {
      bereitsErledigteAufgaben = [
        {
          id: aufgabe.sys.id,
          score: geschafft ? aufgabe.punkte! : 0,
        },
      ];
    }
    firestore()
      .collection("users")
      .doc(auth().currentUser?.uid)
      .set(
        {
          citizenship: {
            vertraute: {
              date: now,
              ...(userWillChangeToFraktion == "vertraute" && {
                mitglied: true,
              }),
              aufgaben: bereitsErledigteAufgaben,
              score: firestore.FieldValue.increment(
                geschafft ? aufgabe.punkte! : 0
              ),
            },
          },
        },
        { merge: true }
      );
    // if (geschafft) {
    //   firestore()
    //     .collection("fraktionen")
    //     .doc("vertraute")
    //     .set({
    //       score: firestore.FieldValue.increment(punkte),
    //     });
    // }
  }
  if (userWillChangeToFraktion) {
    messaging().subscribeToTopic(userWillChangeToFraktion);
  }
  return { geschafft, error, userWillChangeToFraktion };
}
