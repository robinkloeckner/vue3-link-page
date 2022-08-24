/*
 * Load resources, set options and create I18n instance.
 */

import messages from "@intlify/vite-plugin-vue-i18n/messages";
import {createI18n} from "vue-i18n";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "de"],
  messages: messages,
});