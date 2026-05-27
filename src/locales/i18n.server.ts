import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import resourcesToBackend from "i18next-resources-to-backend"

const localeLoaders: Record<string, () => Promise<{ default: unknown }>> = {
	en: () => import("./en/common.json"),
	fr: () => import("./fr/common.json")
}

export async function initI18n(language: string) {
	const instance = i18next.createInstance()

	await instance
		.use(initReactI18next)
		.use(resourcesToBackend((lang: string) => {
			const loader = localeLoaders[lang] ?? localeLoaders.fr
			return loader()
		}))
		.init({
			lng: language,
			fallbackLng: "fr",
			supportedLngs: ["en", "fr"],
			preload: ["en", "fr"],
			defaultNS: "common",
			ns: ["common"],
			interpolation: { escapeValue: false }
		})

	return instance
}
