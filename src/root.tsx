import i18next, { type Resource } from "i18next"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import { useLoaderData } from "react-router"

export async function loader({ request }: { request: Request }) {
	const url = new URL(request.url)
	const initialLanguage = url.pathname.startsWith("/en") ? "en" : "fr"

	const [en, fr] = await Promise.all([
		import("./locales/en.json"),
		import("./locales/fr.json")
	])

	return {
		i18n: {
			initialI18nStore: {
				en: { common: en.default },
				fr: { common: fr.default }
			} as Resource,
			initialLanguage
		}
	}
}

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useLoaderData() as {
		i18n: { initialI18nStore: Resource; initialLanguage: string }
	}
	const initialI18nStore = JSON.stringify(data?.i18n?.initialI18nStore ?? {}).replace(
		/</g,
		"\\u003c"
	)
	const initialLanguage = JSON.stringify(data?.i18n?.initialLanguage ?? "fr")

	return (
		<html lang={data?.i18n?.initialLanguage || i18next.language || "fr"}>
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Portfolio of Ben Gaudry, a french computer science student, interested in software development, web development, and low-level programming."
				/>
				<title>Ben Gaudry - Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
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
