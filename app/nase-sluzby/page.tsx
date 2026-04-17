import { redirect } from "next/navigation";

import { services } from "@/lib/site-content";

export default function ServicesPage() {
  redirect(services[0]?.href ?? "/");
}
