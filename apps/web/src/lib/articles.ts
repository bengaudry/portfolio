import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import { fetchArticleBySlug, fetchArticles, type CmsArticle } from '@/lib/cms'
import type { Locale } from '@/lib/localization'

export type ArticleSummaryProps = {
	slug: string
	title: string
	summary: string
	publishedAt: string
	publishedAtIso: string
	coverImageUrl?: string
}

export type ArticleProps = ArticleSummaryProps & {
	contentHtml: string
}

function formatDate(dateString: string, locale: Locale): string {
	const date = new Date(dateString)
	return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

function renderMarkdown(markdown: string): string {
	const rawHtml = marked.parse(markdown, { async: false }) as string
	return sanitizeHtml(rawHtml, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat([
			'h1',
			'h2',
			'h3',
			'img',
			'pre',
			'code',
			'span'
		]),
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			a: ['href', 'title', 'target', 'rel'],
			img: ['src', 'alt', 'title', 'width', 'height']
		}
	})
}

function toArticleSummaryProps(
	article: CmsArticle,
	locale: Locale
): ArticleSummaryProps {
	return {
		slug: article.slug,
		title: article.title,
		summary: article.summary,
		publishedAt: formatDate(article.publishedAt, locale),
		publishedAtIso: article.publishedAt,
		coverImageUrl: article.coverImageUrl
	}
}

function toArticleProps(article: CmsArticle, locale: Locale): ArticleProps {
	return {
		...toArticleSummaryProps(article, locale),
		contentHtml: renderMarkdown(article.content)
	}
}

export async function getArticlesList(
	locale: Locale
): Promise<ArticleSummaryProps[]> {
	const articles = await fetchArticles(locale)
	return articles.map((article) => toArticleSummaryProps(article, locale))
}

export async function getArticleBySlug(
	slug: string,
	locale: Locale
): Promise<ArticleProps | undefined> {
	const article = await fetchArticleBySlug(slug, locale)
	return article ? toArticleProps(article, locale) : undefined
}
