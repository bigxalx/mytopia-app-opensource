import { Image } from "react-native";
import { useContentfulDataStore, useAufgabeStore } from "../hooks/useStore";

export default function SmallLogo() {
  const aufgabe = useAufgabeStore((state) => state.aufgabe);

  const global = useContentfulDataStore((state) => state.global);

  const logoUrl = () => {
    if (!global) {
      return;
    }
    switch (aufgabe?.fraktion) {
      case "mytopia":
        return global!.mytopiaLogo?.url;
      case "hyaenen":
        return global!.hyaenenLogo?.url;
      case "zirkel":
        return global!.zirkelLogo?.url;
      case "vertraute":
        return global!.vertrauteLogo?.url;
      default:
        break;
    }
  };
  return (
    <Image
      className="w-16 h-16 mx-auto mt-8 mb-4"
      source={{ uri: logoUrl() ?? undefined }}
    />
  );
}
