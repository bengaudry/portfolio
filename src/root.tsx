import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
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
