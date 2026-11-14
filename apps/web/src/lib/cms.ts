import { sanityClient, urlFor } from './sanity'
import {
	getLocalized,
	type Locale,
	type LocaleString,
	type LocaleText
} from './localization'

export type CmsImage = {
	_type: 'image'
	asset?: {
		_id?: string
		_ref?: string
		url?: string
	}
}

export type CmsSkill = {
	_id: string
	name: string
	title: string
	category: 'front-end' | 'back-end' | 'tools' | 'others'
	iconUrl?: string
	url?: string
}

export type CmsProject = {
	_id: string
	id: string
	title: string
	description: string
	state: 'active' | 'development' | 'inactive'
	category: 'web' | 'low-level'
	isPersonal: boolean
	imgSrc: string
	iconSrc?: string
	link?: string
	linkLabel?: string
	repoUrl?: string
	highlighted: boolean
	order?: number
	associatedSkills: CmsSkill[]
}

export type CmsRole = {
	position: string
	duration: string
	location?: string
	description?: string
	associatedSkills: CmsSkill[]
}

export type CmsCompany = {
	_id: string
	name: string
	logoUrl?: string
	order?: number
	roles: CmsRole[]
}

export type CmsArticle = {
	_id: string
	slug: string
	title: string
	summary: string
	content: string
	publishedAt: string
	coverImageUrl?: string
	isPublished: boolean
}

type RawSkill = {
	_id: string
	name: string
	title: LocaleString
	category: CmsSkill['category']
	icon?: CmsImage
	url?: string
}

function toCmsSkill(raw: RawSkill, locale: Locale): CmsSkill {
	return {
		_id: raw._id,
		name: raw.name,
		title: getLocalized(raw.title, locale),
		category: raw.category,
		iconUrl: urlFor(raw.icon),
		url: raw.url
	}
}

export async function fetchSkills(locale: Locale): Promise<CmsSkill[]> {
	const raw = await sanityClient.fetch<RawSkill[]>(
		`*[_type == "skill"] | order(category asc, name asc) {
			_id,
			name,
			title,
			category,
			icon { asset->{_id, url} },
			url
		}`
	)
	return raw.map((skill) => toCmsSkill(skill, locale))
}

type RawProject = {
	_id: string
	slug: { current: string }
	title: LocaleString
	description: LocaleText
	state: CmsProject['state']
	category: CmsProject['category']
	isPersonal: boolean
	image: CmsImage
	icon?: CmsImage
	link?: string
	linkLabel?: LocaleString
	repoUrl?: string
	highlighted: boolean
	order?: number
	associatedSkills: RawSkill[]
}

export async function fetchProjects(locale: Locale): Promise<CmsProject[]> {
	const raw = await sanityClient.fetch<RawProject[]>(
		`*[_type == "project"] | order(order asc) {
			_id,
			"slug": slug,
			title,
			description,
			state,
			category,
			isPersonal,
			image { asset->{_id, url} },
			icon { asset->{_id, url} },
			link,
			linkLabel,
			repoUrl,
			highlighted,
			order,
			"associatedSkills": associatedSkills[]->{
				_id,
				name,
				title,
				category,
				icon { asset->{_id, url} },
				url
			}
		}`
	)

	return raw.map((project) => ({
		_id: project._id,
		id: project.slug.current,
		title: getLocalized(project.title, locale),
		description: getLocalized(project.description, locale),
		state: project.state,
		category: project.category,
		isPersonal: project.isPersonal,
		imgSrc: urlFor(project.image) ?? '',
		iconSrc: urlFor(project.icon),
		link: project.link,
		linkLabel: project.linkLabel
			? getLocalized(project.linkLabel, locale)
			: undefined,
		repoUrl: project.repoUrl,
		highlighted: project.highlighted,
		order: project.order,
		associatedSkills: project.associatedSkills.map((skill) =>
			toCmsSkill(skill, locale)
		)
	}))
}

export async function fetchHighlightedProjects(
	locale: Locale
): Promise<CmsProject[]> {
	const projects = await fetchProjects(locale)
	return projects.filter((project) => project.highlighted)
}

type RawCompany = {
	_id: string
	name: string
	logo?: CmsImage
	order?: number
	roles: Array<{
		position: LocaleString
		duration: LocaleString
		location?: LocaleString
		description?: LocaleText
		associatedSkills: RawSkill[]
	}>
}

export async function fetchCompanies(locale: Locale): Promise<CmsCompany[]> {
	const raw = await sanityClient.fetch<RawCompany[]>(
		`*[_type == "company"] | order(order asc) {
			_id,
			name,
			logo { asset->{_id, url} },
			order,
			roles[] {
				position,
				duration,
				location,
				description,
				"associatedSkills": associatedSkills[]->{
					_id,
					name,
					title,
					category,
					icon { asset->{_id, url} },
					url
				}
			}
		}`
	)

	return raw.map((company) => ({
		_id: company._id,
		name: company.name,
		logoUrl: urlFor(company.logo),
		order: company.order,
		roles: company.roles.map((role) => ({
			position: getLocalized(role.position, locale),
			duration: getLocalized(role.duration, locale),
			location: role.location
				? getLocalized(role.location, locale)
				: undefined,
			description: role.description
				? getLocalized(role.description, locale)
				: undefined,
			associatedSkills: role.associatedSkills.map((skill) =>
				toCmsSkill(skill, locale)
			)
		}))
	}))
}

type RawArticle = {
	_id: string
	slug: { current: string }
	title: LocaleString
	summary: LocaleText
	content: LocaleText
	publishedAt: string
	coverImage?: CmsImage
	isPublished: boolean
}

function toCmsArticle(raw: RawArticle, locale: Locale): CmsArticle {
	return {
		_id: raw._id,
		slug: raw.slug.current,
		title: getLocalized(raw.title, locale),
		summary: getLocalized(raw.summary, locale),
		content: getLocalized(raw.content, locale),
		publishedAt: raw.publishedAt,
		coverImageUrl: urlFor(raw.coverImage),
		isPublished: raw.isPublished
	}
}

export async function fetchArticles(locale: Locale): Promise<CmsArticle[]> {
	const raw = await sanityClient.fetch<RawArticle[]>(
		`*[_type == "article" && isPublished == true] | order(publishedAt desc) {
			_id,
			"slug": slug,
			title,
			summary,
			content,
			publishedAt,
			coverImage { asset->{_id, url} },
			isPublished
		}`
	)
	return raw.map((article) => toCmsArticle(article, locale))
}

export async function fetchArticleBySlug(
	slug: string,
	locale: Locale
): Promise<CmsArticle | undefined> {
	const raw = await sanityClient.fetch<RawArticle | undefined>(
		`*[_type == "article" && slug.current == $slug && isPublished == true][0] {
			_id,
			"slug": slug,
			title,
			summary,
			content,
			publishedAt,
			coverImage { asset->{_id, url} },
			isPublished
		}`,
		{ slug }
	)
	return raw ? toCmsArticle(raw, locale) : undefined
}
