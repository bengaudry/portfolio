import { fetchSkills, type CmsSkill } from '@/lib/cms'
import type { Locale } from '@/lib/localization'

import frontendIcon from '@/assets/icons/skills/icons8-code-94.png'
import backendIcon from '@/assets/icons/skills/icons8-database-94.png'
import toolsIcon from '@/assets/icons/skills/icons8-tool-94.png'
import othersIcon from '@/assets/icons/skills/icons8-dots-94.png'

export type { CmsSkill as Skill }

export const SKILL_CATEGORY_ICONS: Record<CmsSkill['category'], string> = {
	'front-end': frontendIcon.src,
	'back-end': backendIcon.src,
	tools: toolsIcon.src,
	others: othersIcon.src
}

export async function getDisplayableSkills(locale: Locale): Promise<
	Record<
		CmsSkill['category'],
		{
			iconUrl: string
			items: CmsSkill[]
		}
	>
> {
	const skills = await fetchSkills(locale)

	const categories: Array<CmsSkill['category']> = [
		'front-end',
		'back-end',
		'tools',
		'others'
	]

	return Object.fromEntries(
		categories.map((category) => [
			category,
			{
				iconUrl: SKILL_CATEGORY_ICONS[category],
				items: skills.filter((skill) => skill.category === category)
			}
		])
	) as Record<
		CmsSkill['category'],
		{
			iconUrl: string
			items: CmsSkill[]
		}
	>
}
