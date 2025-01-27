import { redirect } from "next/navigation";
import { i18n } from "./i18n/settings";

export default function Home() {
  // Redirect to the default locale
  redirect(`/${i18n.defaultLocale}`);
}
