import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import resourcesToBackend from "i18next-resources-to-backend"

export async function initI18n(language: string) {
  const instance = i18next.createInstance()

  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend((lang: string) =>
        import(`./${lang}.json`)
      )
    )
    .init({
      lng: language,
      fallbackLng: "fr",
      supportedLngs: ["en", "fr"],
      preload: ["en", "fr"],
      defaultNS: "common",
      ns: ["common"],
      interpolation: { escapeValue: false },
    })

  return instance
}
