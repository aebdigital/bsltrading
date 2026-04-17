import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BSL TRADING",
    short_name: "BSL TRADING",
    description:
      "Rekonštrukcie, stavebné práce, zatepľovanie budov, referencie, certifikáty a kontakt firmy BSL TRADING.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f2",
    theme_color: "#3ab79b",
    lang: "sk-SK",
  };
}
