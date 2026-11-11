export type LocaleString = {
	_type: 'localeString'
	fr: string
	en: string
}

export type LocaleText = {
	_type: 'localeText'
	fr: string
	en: string
}

export type Locale = 'fr' | 'en'

export function getLocalized(
	value: LocaleString | LocaleText | undefined | null,
	locale: Locale
): string {
	if (!value) return ''
	return value[locale] || value.fr || value.en || ''
}
