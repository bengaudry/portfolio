import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from "react-router"
import type { Route } from "./+types/root"
import { useTranslation } from "react-i18next"
import { i18next } from "./locales/i18n.server"
import { useChangeLanguage } from "remix-i18next/react"
import { AnimatePresence } from "framer-motion"

export async function loader({ request }: Route.LoaderArgs) {
	const locale = await i18next.getLocale(request)
	return Response.json({ locale })
}

export const links: Route.LinksFunction = () => []

export function Layout({ children }: { children: React.ReactNode }) {
	const { locale } = useLoaderData<typeof loader>()

	const { i18n } = useTranslation()

	// This hook will change the i18n instance language to the current locale
	useChangeLanguage(locale)

	return (
		<html lang={locale} dir={i18n.dir()}>
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
			</head>
			<body>
				<AnimatePresence mode="wait">{children}</AnimatePresence>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function Root() {
	return <Outlet />
}
