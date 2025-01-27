export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export async function getTranslations(locale: Locale) {
  try {
    // Make the import path explicit
    const translations = await import(`./locales/${locale}.json`);
    console.log(`Loaded translations for ${locale}:`, translations);
    return translations.default;
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error);
    // Fallback to English if translation fails
    const fallback = await import("./locales/en.json");
    return fallback.default;
  }
}
