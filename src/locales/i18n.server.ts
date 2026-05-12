import { resolve } from "node:path"
import { URL } from "node:url"
import { RemixI18Next } from "remix-i18next/server"
import Backend from "i18next-fs-backend/cjs"
import i18n from "./i18n"

export const i18next = new RemixI18Next({
	detection: {
		supportedLanguages: i18n.supportedLngs,
		fallbackLanguage: i18n.fallbackLng,
		async findLocale(request) {
			const url = new URL(request.url)
			const locale = url.pathname.split("/").at(1)
			return locale && i18n.supportedLngs.includes(locale)
				? locale
				: i18n.fallbackLng
		}
	},
	i18next: {
		...i18n,
		backend: {
			loadPath: resolve("./src/locales/{{lng}}.json")
		}
	},
	plugins: [Backend]
})
