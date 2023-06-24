export const einbuergerungstestQuery = /* GraphQL */ `
  query Einbuergerungstest {
    einbuergerungstestCollection(limit: 1) {
      items {
        sys {
          id
        }
        title
        heroImage {
          url
        }
        text
        ergebnisText {
          json
        }
        fragenCollection(limit: 100) {
          items {
            sys {
              id
            }
            frageTitel
            frageText
            antwortenCollection(limit: 3) {
              items {
                sys {
                  id
                }
                antwortText
                scoreCollection(limit: 10) {
                  items {
                    kriterium {
                      wert
                      sys {
                        id
                      }
                    }
                    wertung
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const auswertungskriterienQuery = /*GraphQL */ `
query Auswertungskriterien {
  einbuergerungstestKriteriumCollection(limit: 20) {
    items {
      kriterium
      sys {
        id
      }
      werteCollection(limit: 30) {
        items {
          sys {
            id
          }
          wert
          bild {
            url
          }
          beschreibung
        }
      }
    }
  }
}
`;

export const newsQuery = /*GraphQL */ `
query News {
  newsCollection(limit: 100) {
    items {
      sys {
        id
      }
      title
      thumbnail {
        title
        url
      }
      releaseDate
      recipient
      location {
        lat
        lon
      }
    }
  }
}
`;

export const newsContentQuery = /*GraphQL */ `
query NewsContent($ids: [String!]) {
  newsCollection(where: {sys: {id_in: $ids}}, limit: 4) {
    items {
      sys {
        id
      }
      content {
        json
        links {
          entries {
            block {
              __typename
              ... on VideoEmbed {
                title
                videoUrl
                thumbnail {
                  title
                  url
                }
              }
              sys {
                id
              }
            }
          }
          assets {
            block {
              sys {
                id
              }
              title
              url
              width 
              height
            }
          }
        }
      }
    }
  }
}
`;

export const AufgabenQuery = /*GraphQL */ `
query Aufgaben {
  aufgabeCollection(limit: 100) {
    items {
      sys {
        id
      }
      fraktion
      title
      empfaenger
      releaseDate
      ablaufdatum
      punkte
      thumbnail {
        title
        url
      }
      task {
        __typename
        ... on QuizTask {
          fragenCollection(limit: 10) {
            items {
              frageTitle
              frageText
              sys {
                id
              }
              antwortenCollection(limit: 5) {
                items {
                  title
                  richtigeAntwort
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
        ... on GpsTask {
          ortsbezeichnung
          location {
            lat
            lon
          }
          ersatzAufgabe {
            sys {
              id
            }
            fraktion
            title
            empfaenger
            releaseDate
            ablaufdatum
            punkte
            thumbnail {
              title
              url
            }
            task {
              __typename
              ... on QuizTask {
                fragenCollection(limit: 10) {
                  items {
                    frageTitle
                    frageText
                    sys {
                      id
                    }
                    antwortenCollection(limit: 5) {
                      items {
                        title
                        richtigeAntwort
                        sys {
                          id
                        }
                      }
                    }
                  }
                }
              }
              ... on GpsTask {
                ortsbezeichnung
                location {
                  lat
                  lon
                }
              }
              ... on StepcounterTask {
                schritte
                ersatzAufgabe {
                  __typename
                  ... on Entry {
                    sys {
                      id
                    }
                  }
                }
              }
            }
          }
        }
        ... on StepcounterTask {
          schritte
          ersatzAufgabe {
            sys {
              id
            }
            fraktion
            title
            empfaenger
            releaseDate
            ablaufdatum
            punkte
            thumbnail {
              title
              url
            }
            task {
              __typename
              ... on QuizTask {
                fragenCollection(limit: 10) {
                  items {
                    frageTitle
                    frageText
                    sys {
                      id
                    }
                    antwortenCollection(limit: 5) {
                      items {
                        title
                        richtigeAntwort
                        sys {
                          id
                        }
                      }
                    }
                  }
                }
              }
              ... on GpsTask {
                ortsbezeichnung
                location {
                  lat
                  lon
                }
              }
              ... on StepcounterTask {
                schritte
                ersatzAufgabe {
                  __typename
                  ... on Entry {
                    sys {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const AufgabeContentQuery = /*GraphQL */ `
query AufgabenContent($ids: [String!]) {
  aufgabeCollection(where: {sys: {id_in: $ids}}, limit:4) {
    items {
      sys {
        id
      }
      content {
        json
        links {
          entries {
            block {
              __typename
              ... on VideoEmbed {
                title
                videoUrl
                thumbnail {
                  title
                  url
                }
              }
              sys {
                id
              }
            }
          }
          assets {
            block {
              sys {
                id
              }
              title
              url
              width
              height
            }
          }
        }
      }
    }
  }
}`;

export const GlobalQuery = /*GraphQL */ `
query Global {
  globalCollection(limit: 1) {
    items {
      mytopiaLogo {
        title
        url
      }
      hyaenenLogo {
        title
        url
      }
      zirkelLogo {
        title
        url
      }
      vertrauteLogo {
        title
        url
      }
      hyaenenSchwelle
      zirkelSchwelle
      vertrauteSchwelle
      einbuergerungMytopiaText
      einbuergerungMytopiaImage {
        title
        url
      }
      wechselZuHyaenenText
      wechselZuHyaenenImage {
        title
        url
      }
      wechselZuZirkelText
      wechselZuZirkelImage {
        title
        url
      }
      wechselZuVertrauteText
      wechselZuVertrauteImage {
        title
        url
      }
      mytopiaInfosCollection(limit: 3) {
        items {
          title
          sys {
            id
          }
        }
      }
      hyaenenInfosCollection(limit: 3) {
        items {
          title
          sys {
            id
          }
        }
      }
      zirkelInfosCollection(limit: 3) {
        items {
          title
          sys {
            id
          }
        }
      }
      vertrauteInfosCollection(limit: 3) {
        items {
          title
          sys {
            id
          }
        }
      }
    }
  }
}`;

export const GetInfoQuery = /*GraphQL */ `
query GetInfo($id: String!) {
  info(id: $id) {
    sys {
      id
    }
    title
    content {
      json
      links {
        entries {
          block {
            __typename
            ... on VideoEmbed {
              title
              videoUrl
              thumbnail {
                title
                url
              }
            }
            sys {
              id
            }
          }
        }
        assets {
          block {
            sys {
              id
            }
            title
            url
            width
            height
          }
        }
      }
    }
  }
}
`;
