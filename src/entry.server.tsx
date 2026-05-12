import { resolve as resolvePath } from "node:path"
import { PassThrough } from "node:stream"
import { createReadableStreamFromReadable } from "@react-router/node"
import { createInstance } from "i18next"
import Backend from "i18next-fs-backend/cjs"
import { renderToPipeableStream } from "react-dom/server"
import { I18nextProvider, initReactI18next } from "react-i18next"
import { ServerRouter, type EntryContext } from "react-router"
import i18n from "./locales/i18n"
import { i18next } from "./locales/i18n.server"

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext
) {
	return new Promise(async (resolve, reject) => {
		const i18nextInstance = createInstance()
		const lng = await i18next.getLocale(request)
		const ns = i18next.getRouteNamespaces(routerContext)

		i18nextInstance
			.use(initReactI18next)
			.use(Backend)
			.init({
				...i18n,
				lng,
				ns,
				fallbackLng: "fr",
				supportedLngs: ["en", "fr"],
				preload: [lng],
				backend: {
					addPath: resolvePath("./locales"),
					loadPath: resolvePath("./locales/{{lng}}.json")
				}
			})
			.finally(() => {
				const { pipe } = renderToPipeableStream(
					<I18nextProvider i18n={i18nextInstance}>
						<ServerRouter
							url={request.url}
							context={routerContext}
						/>
					</I18nextProvider>,
					{
						onShellReady() {
							responseHeaders.set("Content-Type", "text/html")

							const body = new PassThrough()
							const stream =
								createReadableStreamFromReadable(body)

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
						},
						onError(err: unknown) {
							console.error(err)
						}
					}
				)
			})
	})
}
