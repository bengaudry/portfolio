import "@flaticon/flaticon-uicons/css/brands/all.css"
import "@flaticon/flaticon-uicons/css/solid/rounded.css"
import "./assets/fonts/SpaceMono-Bold.ttf"
import "./assets/fonts/SpaceMono-Regular.ttf"
import i18n from "i18next"
import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { initReactI18next } from "react-i18next"
import { HydratedRouter } from "react-router/dom"
import en from "./locales/en.json"
import fr from "./locales/fr.json"

i18n.use(initReactI18next).init({
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false
	},
	resources: {
		en: {
			translation: en
		},
		fr: {
			translation: fr
		}
	}
})

if (window.location.pathname.endsWith("/en")) {
	i18n.changeLanguage("en")
}

if (window.location.pathname.endsWith("/fr")) {
	i18n.changeLanguage("fr")
}

hydrateRoot(
	document,
	<StrictMode>
		<HydratedRouter />
	</StrictMode>
)
