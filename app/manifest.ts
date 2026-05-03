import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BSL TRADING",
    short_name: "BSL TRADING",
    description:
      "Rekonštrukcie, stavebné práce, zatepľovanie budov, referencie, certifikáty a kontakt firmy BSL TRADING.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d50a2",
    lang: "sk-SK",
  };
}
