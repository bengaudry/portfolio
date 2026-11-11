import { createClient, type SanityClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = '0iappbm6'
export const dataset = 'production'

export const sanityClient: SanityClient = createClient({
	projectId,
	dataset,
	apiVersion: '2024-04-01',
	useCdn: true
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(
	source:
		{ asset?: { _id?: string; _ref?: string; url?: string } } | undefined
) {
	if (!source?.asset) return undefined
	if (source.asset._id || source.asset._ref) {
		return builder.image(source).url()
	}
	return source.asset.url
}
