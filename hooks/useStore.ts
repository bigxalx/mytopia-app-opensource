import { create } from "zustand";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {
  AufgabeContentQuery,
  AufgabenQuery,
  GlobalQuery,
  einbuergerungstestQuery,
  newsContentQuery,
  newsQuery,
} from "../constants/Queries";

import {
  Antwort,
  Aufgabe,
  AufgabenContentQuery,
  Einbuergerungstest,
  Global,
  Info,
  News,
  NewsContentQuery,
  Question,
  TaskAntwort,
  TaskFrage,
} from "../@types/graphql/graphql";

type EinbuergerungstestStoreState = {
  test?: Einbuergerungstest;
  testAnswers: { frage: Question; antwort: Antwort }[];
  setAnswer: (frage: Question, antwort: Antwort) => void;
  fetchTest: () => void;
};

export const useEinbuergerungstestStore =
  create<EinbuergerungstestStoreState>()((set) => ({
    test: undefined,
    testAnswers: [],
    setAnswer(frage, antwort) {
      set((state) => {
        const nr = state.testAnswers.findIndex(
          (testAnswer) => testAnswer.frage.sys.id == frage.sys.id
        );
        if (nr >= 0) {
          let updatedAnswers = state.testAnswers;
          updatedAnswers[nr] = { frage: frage, antwort: antwort };
          return { testAnswers: updatedAnswers };
        } else {
          return {
            testAnswers: [
              ...state.testAnswers,
              { frage: frage, antwort: antwort },
            ],
          };
        }
      });
    },
    async fetchTest() {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
            body: JSON.stringify({ query: einbuergerungstestQuery }),
          }
        );
        const jsonResponse = await response.json();
        set((state) => ({
          test: jsonResponse.data.einbuergerungstestCollection.items[0],
        }));
      } catch (e) {
        console.warn(e);
      }
    },
  }));

type AufgabeStore = {
  aufgabe?: Aufgabe;
  setAufgabe: (aufgabe: Aufgabe) => void;
  quiz: {
    answers: { frage: TaskFrage; antwort: TaskAntwort }[];
    setAnswer: (frage: TaskFrage, antwort: TaskAntwort) => void;
    reset: () => void;
  };
};

export const useAufgabeStore = create<AufgabeStore>()((set) => ({
  setAufgabe: (aufgabe) => set({ aufgabe: aufgabe }),
  quiz: {
    answers: [],
    setAnswer(frage, antwort) {
      set((state) => {
        const nr = state.quiz.answers.findIndex(
          (testAnswer) => testAnswer.frage.sys.id == frage.sys.id
        );
        if (nr >= 0) {
          let updatedAnswers = state.quiz.answers;
          updatedAnswers[nr] = { frage: frage, antwort: antwort };
          return { quiz: { ...state.quiz, answers: updatedAnswers } };
        } else {
          return {
            quiz: {
              ...state.quiz,
              answers: [
                ...state.quiz.answers,
                { frage: frage, antwort: antwort },
              ],
            },
          };
        }
      });
    },
    reset: () => set((state) => ({ quiz: { ...state.quiz, answers: [] } })),
  },
}));

type contentfulDataStoreState = {
  aufgaben: Aufgabe[];
  news: News[];
  global?: Global;
  infos?: Info[];
  fetchNews: () => void;
  fetchAufgaben: () => void;
  fetchAufgabeContent: (ids: string[]) => void;
  fetchNewsContent: (ids: string[]) => void;
  fetchGlobal: () => void;
  refreshing: boolean;
};

export const useContentfulDataStore = create<contentfulDataStoreState>()(
  (set, get) => ({
    aufgaben: [],
    news: [],

    refreshing: false,

    async fetchNews() {
      try {
        set({ refreshing: true });
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
            body: JSON.stringify({ query: newsQuery }),
          }
        );
        const jsonResponse = await response.json();
        set(() => ({
          news: jsonResponse.data.newsCollection.items,
          refreshing: false,
        }));
      } catch (e) {
        console.warn(e);
      }
    },
    async fetchAufgaben() {
      try {
        set({ refreshing: true });
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
            body: JSON.stringify({ query: AufgabenQuery }),
          }
        );
        const { data } = await response.json();
        set({
          aufgaben: data.aufgabeCollection.items,
          refreshing: false,
        });
      } catch (e) {
        console.warn(e);
      }
    },
    async fetchAufgabeContent(ids) {
      try {
        set({ refreshing: true });
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
            body: JSON.stringify({
              query: AufgabeContentQuery,
              variables: { ids: ids },
            }),
          }
        );
        const { data }: { data: AufgabenContentQuery } = await response.json();

        let aufgaben = get().aufgaben;
        // Merge the content into the cache
        data?.aufgabeCollection?.items.map((itemWithContent) => {
          // Find the item in the original cache
          const aufgabeIndex = aufgaben.findIndex(
            (aufgabe) => aufgabe.sys.id == itemWithContent?.sys.id
          );
          aufgaben[aufgabeIndex].content = itemWithContent?.content;
        });

        set(() => ({
          aufgaben: aufgaben,
          refreshing: false,
        }));
      } catch (e) {
        console.warn(e);
      }
    },
    async fetchNewsContent(ids) {
      try {
        set({ refreshing: true });
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
            body: JSON.stringify({
              query: newsContentQuery,
              variables: { ids: ids },
            }),
          }
        );
        const { data }: { data: NewsContentQuery } = await response.json();

        let news = get().news;
        // Merge the content into the cache
        data?.newsCollection?.items.map((itemWithContent) => {
          // Find the item in the original cache
          const newsIndex = news.findIndex(
            (news) => news.sys.id == itemWithContent?.sys.id
          );
          news[newsIndex].content = itemWithContent?.content;
        });

        set(() => ({
          news: news,
          refreshing: false,
        }));
      } catch (e) {
        console.warn(e);
      }
    },

    async fetchGlobal() {
      try {
        set({ refreshing: true });
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
            body: JSON.stringify({ query: GlobalQuery }),
          }
        );
        const jsonResponse = await response.json();
        set({
          global: jsonResponse.data.globalCollection.items[0],
          refreshing: false,
        });
      } catch (e) {
        console.warn(e);
      }
    },
  })
);

type userDataStoreState = {
  citizenship?: {
    mytopia?: {
      name: string;
      date: Date;
      mitglied: boolean;
      aufgaben?: [{ id: string; score: number }];
      score: number;
      ranking?: number;
    };
    hyaenen?: {
      name?: string;
      date: Date;
      mitglied: boolean;
      aufgaben?: [{ id: string; score: number }];
      score: number;
      ranking?: number;
    };
    zirkel?: {
      name?: string;
      date: Date;
      mitglied: boolean;
      aufgaben?: [{ id: string; score: number }];
      score: number;
      ranking?: number;
    };
    vertraute?: {
      name?: string;
      date: Date;
      mitglied: boolean;
      aufgaben?: [{ id: string; score: number }];
      score: number;
      ranking?: number;
    };
  };
  properties?: {
    kriterium: string;
    score: number;
    sys: { id: string };
    wert: string;
  }[];
  loadingUserData: boolean;
  fetchUserData: () => void;
  needsEinbuergerung?: boolean;
  notInitialized?: boolean;
};

export const userDataStore = create<userDataStoreState>()((set) => ({
  notInitialized: true,
  loadingUserData: true,
  fetchUserData() {
    set({ loadingUserData: true });
    const user = auth().currentUser;
    firestore()
      .collection("users")
      .doc(user?.uid)
      .get()
      .then(async (documentSnapshot) => {
        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          // Einbürgerungstest
          if (data?.needsEinbuergerung == true) {
            set({ needsEinbuergerung: true, loadingUserData: false });
          } else {
            // Update dates:
            if (data?.citizenship?.mytopia?.date) {
              data!.citizenship.mytopia.date =
                data?.citizenship?.mytopia?.date?.toDate();
            }
            if (data?.citizenship?.hyaenen?.date) {
              data!.citizenship.hyaenen.date =
                data?.citizenship?.hyaenen?.date?.toDate();
            }
            if (data?.citizenship?.zirkel?.date) {
              data!.citizenship.zirkel.date =
                data?.citizenship?.zirkel?.date?.toDate();
            }
            if (data?.citizenship?.vertraute?.date) {
              data!.citizenship.vertraute.date =
                data?.citizenship?.vertraute?.date?.toDate();
            }
            // Get Ranking

            try {
              const response = await fetch(
                `https://europe-west1-mytopia-6c440.cloudfunctions.net/getRanking?uid=${user?.uid}`
              );
              const rankingData: {
                hyaenen?: number;
                vertraute?: number;
                zirkel?: number;
                mytopia?: number;
              } = await response.json();
              data!.citizenship.mytopia.ranking = rankingData.mytopia;

              if (data!.citizenship.hyaenen && rankingData.hyaenen) {
                data!.citizenship.hyaenen.ranking = rankingData.hyaenen;
              }
              if (data!.citizenship.zirkel && rankingData.zirkel) {
                data!.citizenship.zirkel.ranking = rankingData.zirkel;
              }
              if (data!.citizenship.vertraute && rankingData.vertraute) {
                data!.citizenship.vertraute.ranking = rankingData.vertraute;
              }
            } catch (e) {
              console.warn(e);
            }
            set({
              ...data,
              loadingUserData: false,
              notInitialized: false,
              needsEinbuergerung: false,
            });
          }
        } else {
          set({
            needsEinbuergerung: true,
            loadingUserData: false,
            notInitialized: false,
          });
        }
      });
  },
}));
