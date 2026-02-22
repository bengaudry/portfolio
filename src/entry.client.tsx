import "@flaticon/flaticon-uicons/css/brands/all.css"
import "@flaticon/flaticon-uicons/css/solid/rounded.css"
import "./assets/fonts/SpaceMono-Bold.ttf"
import "./assets/fonts/SpaceMono-Regular.ttf"
import i18n from "i18next"
import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { HydratedRouter } from "react-router/dom"
import { initReactI18next } from "react-i18next"

const initialStore = window.__INITIAL_I18N_STORE__ ?? {
	en: { common: {} },
	fr: { common: {} }
}

const initialLanguage = window.__INITIAL_LANGUAGE__ ?? "fr"

i18n
	.use(initReactI18next)
	.init({
		resources: initialStore,
		lng: initialLanguage,
		fallbackLng: "fr",
		supportedLngs: ["en", "fr"],
		defaultNS: "common",
		ns: ["common"],
		interpolation: {
			escapeValue: false
		}
	})
	.finally(() => {
		hydrateRoot(
			document,
			<StrictMode>
				<HydratedRouter />
			</StrictMode>
		)
	})
