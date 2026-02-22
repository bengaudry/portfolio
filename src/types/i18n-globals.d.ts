import type { Resource } from "i18next"

declare global {
	interface Window {
		__INITIAL_I18N_STORE__?: Resource
		__INITIAL_LANGUAGE__?: string
	}
}

export {}
