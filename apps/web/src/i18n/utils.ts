import en from '@/locales/en.json'
import fr from '@/locales/fr.json'
import { useLocale } from '@/hooks/useLocale.ts'

const translations: Record<string, any> = { en, fr }
export const defaultLang = 'fr'

export type TranslationFunction = (
	key: string,
	vars?: Record<string, string>
) => string

export function useTranslation(url?: URL) {
	const locale = useLocale(url)
	const dict = translations[locale] || translations[defaultLang]

	function t(key: string, vars: Record<string, string> = {}): string {
		// Gets composed keys (ex: "welcome.title")
		const value = key.split('.').reduce((obj, k) => obj?.[k], dict) || key

		// Replaces variables {{name}}
		return value.replace(
			/\{\{(\w+)}}/g,
			(_: string, k: string) => vars[k] ?? `{{${k}}}`
		)
	}

	return { t, locale }
}

export function getLocaleFromUrl(url: URL): 'fr' | 'en' {
	const { pathname } = url

	if (pathname.startsWith('/en')) return 'en'
	if (pathname.startsWith('/fr')) return 'fr'

	throw new Error('useLocale should be used within the [locale]/ route')
}
