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
					responseHeaders.set("Content-Type", "text/html")

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
}
