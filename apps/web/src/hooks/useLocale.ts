import { getLocaleFromUrl } from '@/i18n/utils.ts'

export function useLocale(url?: URL): 'fr' | 'en' {
	if (url) {
		return getLocaleFromUrl(url)
	}
	return getLocaleFromUrl(new URL(window.location.href))
}
