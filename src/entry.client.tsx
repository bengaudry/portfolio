import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { startTransition, StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import i18next from "i18next"
import i18n from "./locales/i18n"
import { I18nextProvider, initReactI18next } from "react-i18next"
import { getInitialNamespaces } from "remix-i18next/client"
import { BrowserRouter } from "react-router"

import "@flaticon/flaticon-uicons/css/brands/all.css"
import "@flaticon/flaticon-uicons/css/solid/rounded.css"

async function hydrate() {
	await i18next
		.use(initReactI18next)
		.use(LanguageDetector)
		.use(Backend)
		.init({
			...i18n,
			ns: getInitialNamespaces(),
			detection: {
				order: ["htmlTag"],
				caches: []
			}
		})

	startTransition(() => {
		hydrateRoot(
			document,
			<I18nextProvider i18n={i18next}>
				<StrictMode>
					<BrowserRouter />
				</StrictMode>
			</I18nextProvider>
		)
	})
}

if (window.requestIdleCallback) {
	window.requestIdleCallback(hydrate)
} else {
	window.setTimeout(hydrate, 1)
}
