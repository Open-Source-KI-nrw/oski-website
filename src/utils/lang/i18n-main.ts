import { createI18n } from "vue-i18n";
import de from "@/utils/lang/de";
import en from "@/utils/lang/en";

const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "en",
  messages: {
    de: de,
    en: en,
  },
});

export default i18n;
