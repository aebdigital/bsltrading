import dynamic from "next/dynamic";
import { company } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

const HomePageClient = dynamic(() => import("@/components/home-page-client"), {
  ssr: true,
});

export const metadata = buildPageMetadata({
  description: company.heroText,
  path: "/",
  image: "/images/hero.jpg",
  keywords: ["BSL TRADING Humenné", "stavebná firma Slovensko", "stavebné riešenia"],
});

export default function HomePage() {
  return <HomePageClient />;
}
