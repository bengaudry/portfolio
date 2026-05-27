/* eslint-disable react-refresh/only-export-components */

import i18next, { type Resource } from "i18next"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import { useLoaderData } from "react-router"
import appleTouchIcon from "./assets/me-rounded-64.png"
import portraitImage from "./assets/me.webp"

const SITE_URL = "https://bengaudry.dev"
const SITE_NAME = "Ben Gaudry"
const MAILTO = "ben.gaudry@etu.univ-lyon1.fr"
const SOCIAL_URLS = [
	"https://www.linkedin.com/in/ben-gaudry",
	"https://github.com/bengaudry"
]

const metadata = {
	en: {
		title: "Ben Gaudry | Portfolio - Computer Science Student & Web Developer",
		description:
			"Ben Gaudry's portfolio showcasing web development projects, software engineering work, and low-level programming interests in English and French.",
		locale: "en_US",
		alternateLocale: "fr_FR"
	},
	fr: {
		title: "Ben Gaudry | Portfolio - Étudiant en informatique & développeur web",
		description:
			"Portfolio de Ben Gaudry présentant ses projets de développement web, ses travaux en ingénierie logicielle et ses centres d'intérêt en programmation bas niveau.",
		locale: "fr_FR",
		alternateLocale: "en_US"
	}
} as const

function getCanonicalPathname(pathname: string) {
	if (pathname.startsWith("/en")) return "/en"
	if (pathname.startsWith("/fr")) return "/fr"
	return "/"
}

export async function loader({ request }: { request: Request }) {
	const url = new URL(request.url)
	const initialLanguage = url.pathname.startsWith("/en") ? "en" : "fr"
	const canonicalPathname = getCanonicalPathname(url.pathname)

	const [en, fr] = await Promise.all([
		import("./locales/en/common.json"),
		import("./locales/fr/common.json")
	])

	return {
		i18n: {
			initialI18nStore: {
				en: { common: en.default },
				fr: { common: fr.default }
			} as Resource,
			initialLanguage
		},
		seo: {
			canonicalUrl: `${SITE_URL}${canonicalPathname}`,
			description: metadata[initialLanguage].description,
			language: initialLanguage,
			locale: metadata[initialLanguage].locale,
			alternateLocale: metadata[initialLanguage].alternateLocale,
			title: metadata[initialLanguage].title
		}
	}
}

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useLoaderData() as {
		i18n: { initialI18nStore: Resource; initialLanguage: string }
		seo: {
			alternateLocale: string
			canonicalUrl: string
			description: string
			language: keyof typeof metadata
			locale: string
			title: string
		}
	}
	const initialI18nStore = JSON.stringify(
		data?.i18n?.initialI18nStore ?? {}
	).replace(/</g, "\\u003c")
	const initialLanguage = JSON.stringify(data?.i18n?.initialLanguage ?? "fr")
	const seo = data?.seo ?? {
		alternateLocale: "en_US",
		canonicalUrl: `${SITE_URL}/`,
		description: metadata.fr.description,
		language: "fr" as const,
		locale: "fr_FR",
		title: metadata.fr.title
	}
	const alternateLinks = [
		{ href: `${SITE_URL}/`, hrefLang: "x-default" },
		{ href: `${SITE_URL}/fr`, hrefLang: "fr" },
		{ href: `${SITE_URL}/en`, hrefLang: "en" }
	]

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: SITE_NAME,
		url: seo.canonicalUrl,
		image: `${SITE_URL}${portraitImage}`,
		jobTitle:
			seo.language === "en"
				? "Computer Science Student & Web Developer"
				: "Étudiant en informatique & développeur web",
		email: MAILTO,
		sameAs: SOCIAL_URLS,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Lyon",
			addressCountry: "FR"
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Polytech Lyon"
		},
		knowsAbout:
			seo.language === "en"
				? [
						"Web development",
						"Front-end development",
						"Software engineering",
						"Low-level programming",
						"Computer science"
					]
				: [
						"Développement web",
						"Développement front-end",
						"Ingénierie logicielle",
						"Programmation bas niveau",
						"Informatique"
					]
	}

	return (
		<html lang={data?.i18n?.initialLanguage || i18next.language || "fr"}>
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="description" content={seo.description} />
				<meta
					name="keywords"
					content="Ben Gaudry, portfolio, web development, full-stack, software engineering, computer science, Lyon, France"
				/>
				<meta name="author" content={SITE_NAME} />
				<meta
					name="robots"
					content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
				/>
				<meta
					name="googlebot"
					content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
				/>
				<meta name="theme-color" content="#0b1220" />
				<meta name="color-scheme" content="dark light" />
				<meta
					name="application-name"
					content={`${SITE_NAME} Portfolio`}
				/>
				<meta name="apple-mobile-web-app-title" content={SITE_NAME} />
				<meta
					name="format-detection"
					content="telephone=no,address=no,email=no"
				/>
				<link rel="canonical" href={seo.canonicalUrl} />
				{alternateLinks.map((link) => (
					<link
						key={`${link.hrefLang}-${link.href}`}
						rel="alternate"
						hrefLang={link.hrefLang}
						href={link.href}
					/>
				))}
				<title>{seo.title}</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href={appleTouchIcon} />
				<meta property="og:type" content="website" />
				<meta
					property="og:site_name"
					content={`${SITE_NAME} Portfolio`}
				/>
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:url" content={seo.canonicalUrl} />
				<meta property="og:locale" content={seo.locale} />
				<meta
					property="og:locale:alternate"
					content={seo.alternateLocale}
				/>
				<meta
					property="og:image"
					content={`${SITE_URL}${portraitImage}`}
				/>
				<meta
					property="og:image:alt"
					content="Portrait of Ben Gaudry"
				/>
				<meta property="og:image:width" content="480" />
				<meta property="og:image:height" content="480" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta
					name="twitter:image"
					content={`${SITE_URL}${portraitImage}`}
				/>
				<meta
					name="twitter:image:alt"
					content="Portrait of Ben Gaudry"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData).replace(
							/</g,
							"\\u003c"
						)
					}}
				/>
				<Meta />
				<Links />

				<script
					dangerouslySetInnerHTML={{
						__html: `window.__INITIAL_I18N_STORE__ = ${initialI18nStore};window.__INITIAL_LANGUAGE__ = ${initialLanguage};`
					}}
				/>
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function Root() {
	return <Outlet />
}
