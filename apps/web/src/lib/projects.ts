import {
	fetchHighlightedProjects,
	fetchProjects,
	type CmsProject,
	type CmsSkill
} from '@/lib/cms'
import type { Locale } from '@/lib/localization'

export type ProjectState = 'active' | 'development' | 'inactive'
export type ProjectCategory = 'web' | 'low-level'

export type ProjectSkill = Pick<CmsSkill, '_id' | 'title' | 'iconUrl'>

export type ProjectProps = {
	id: string
	title: string
	description: string
	imgSrc: string
	iconSrc?: string
	state: ProjectState
	link?: string
	linkLabel?: string
	repoUrl?: string
	isPersonal: boolean
	category: ProjectCategory
	associatedSkills: ProjectSkill[]
}

export async function getProjectsList(locale: Locale): Promise<ProjectProps[]> {
	const projects = await fetchProjects(locale)
	return projects.map(toProjectProps)
}

export async function getHighlightedProjectsList(
	locale: Locale
): Promise<ProjectProps[]> {
	const projects = await fetchHighlightedProjects(locale)
	return projects.map(toProjectProps)
}

function toProjectProps(project: CmsProject): ProjectProps {
	return {
		id: project.id,
		title: project.title,
		description: project.description,
		imgSrc: project.imgSrc,
		iconSrc: project.iconSrc,
		state: project.state,
		link: project.link,
		linkLabel: project.linkLabel,
		repoUrl: project.repoUrl,
		isPersonal: project.isPersonal,
		category: project.category,
		associatedSkills: project.associatedSkills.map((skill) => ({
			_id: skill._id,
			title: skill.title,
			iconUrl: skill.iconUrl
		}))
	}
}
