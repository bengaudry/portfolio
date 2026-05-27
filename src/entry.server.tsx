import { PassThrough } from "node:stream"
import { I18nextProvider } from "react-i18next"
import { initI18n } from "./locales/i18n.server"
import { ServerRouter, type EntryContext } from "react-router"
import { renderToPipeableStream } from "react-dom/server"
import { createReadableStreamFromReadable } from "@react-router/node"

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext
) {
	try {
		const url = new URL(request.url)

		const lang = url.pathname.startsWith("/en") ? "en" : "fr"

		const i18n = await initI18n(lang)

		routerContext.i18n = {
			initialI18nStore: i18n.store.data,
			initialLanguage: i18n.language
		}

		return new Promise((resolve, reject) => {
			const { pipe } = renderToPipeableStream(
				<I18nextProvider i18n={i18n}>
					<ServerRouter url={request.url} context={routerContext} />
				</I18nextProvider>,
				{
					onShellReady() {
						// Set Cache-Control based on route
						if (
							url.pathname === "/" ||
							url.pathname === "/en" ||
							url.pathname === "/fr"
						) {
							// Prerendered pages: cache for 1 hour, but always check server
							responseHeaders.set(
								"Cache-Control",
								"public, max-age=3600, must-revalidate"
							)
						} else {
							// Dynamic pages: don't cache, always fetch fresh
							responseHeaders.set(
								"Cache-Control",
								"private, no-cache, must-revalidate"
							)
						}

						// Set content type with charset
						responseHeaders.set("Content-Type", "text/html; charset=utf-8")

						// Security headers
						responseHeaders.set(
							"Content-Security-Policy",
							"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https:; media-src 'self'"
						)
						responseHeaders.set("X-Content-Type-Options", "nosniff")
						responseHeaders.set("X-Frame-Options", "DENY")
						responseHeaders.set("Referrer-Policy", "strict-no-referrer")
						responseHeaders.set(
							"Permissions-Policy",
							"geolocation=(), camera=(), microphone=(), payment=()"
						)

						const body = new PassThrough()
						const stream = createReadableStreamFromReadable(body)

						resolve(
							new Response(stream, {
								headers: responseHeaders,
								status: responseStatusCode
							})
						)

						pipe(body)
					},
					onShellError(err: unknown) {
						reject(err)
					}
				}
			)
		})
	} catch (error) {
		console.error("[entry.server.tsx] Error during SSR rendering:")
		console.error(error)

		// Return error response
		responseHeaders.set("Content-Type", "text/html; charset=utf-8")
		responseHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate")

		const errorHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Server Error</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
    .container { max-width: 600px; margin: 100px auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    h1 { color: #d32f2f; margin: 0 0 10px; }
    p { color: #666; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>500 - Server Error</h1>
    <p>An error occurred while rendering this page. Please try again later.</p>
  </div>
</body>
</html>
		`.trim()

		return new Response(errorHtml, {
			headers: responseHeaders,
			status: 500
		})
	}
}
