import sideBySideIcon from '@/assets/side-by-side-icon-white.svg'
import studyswipeIllustration from '@/assets/studyswipe-screenshot.png'
import studyswipeIcon from '@/assets/studyswipe-icon.png'
import compilerIllustration from '@/assets/compiler-illustration.png'
import compilerIcon from '@/assets/binary-icon.png'
import prontoIllustration from '@/assets/pronto-screenshot.png'
import irrigationProjectIllustration from '@/assets/irrigation-proj-illustration.png'
import irrigationProjectIcon from '@/assets/flowerpot-icon.png'
import tradeFairScreenshot from '@/assets/trade-fair-screenshot.png'
import tradeFairIcon from '@/assets/polytech.webp'
import {type TranslationFunction} from '@/i18n/utils.ts'
import type {SkillId} from "@/components/sections/Skills/list.ts";

export type ProjectState = 'active' | 'development' | 'inactive'
export type ProjectCategory = 'web' | 'low-level'

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
    associatedSkills: SkillId[]
}

export const getProjectsList = (t: TranslationFunction) => {
    return [
        {
            id: 'side-by-side',
            title: 'Side by Side',
            state: 'active',
            description: t('projects.side-by-side.description'),
            imgSrc: 'https://addons.mozilla.org/user-media/previews/full/322/322418.png?modified=1748884796',
            iconSrc: sideBySideIcon.src,
            link: 'https://addons.mozilla.org/firefox/addon/side-by-side',
            linkLabel: t('projects.side-by-side.link-label'),
            repoUrl: 'https://github.com/bengaudry/side-by-side',
            category: 'web',
            isPersonal: true,
            associatedSkills: ["typescript", "git", "github", "figma"]
        },
        {
            id: 'studyswipe',
            title: 'Studyswipe',
            state: 'active',
            description: t('projects.studyswipe.description'),
            imgSrc: studyswipeIllustration.src,
            iconSrc: studyswipeIcon.src,
            link: 'https://studyswipe.vercel.app',
            linkLabel: t('projects.studyswipe.link-label'),
            category: 'web',
            isPersonal: true,
            associatedSkills: ["react", "nextjs", "tailwindcss", "prisma", "supabase"]
        },
        {
            id: 'trade-fair',
            title: t('projects.trade-fair.title'),
            state: 'active',
            description: t('projects.trade-fair.description'),
            imgSrc: tradeFairScreenshot.src,
            iconSrc: tradeFairIcon.src,
            link: 'https://forum-polytech-lyon.org',
            linkLabel: t('projects.trade-fair.link-label'),
            repoUrl: 'https://github.com/bengaudry/forum-polytech-lyon',
            category: 'web',
            isPersonal: false,
            associatedSkills: ['vuejs', 'git', "github", 'tailwindcss']
        },
        {
            id: 'pronto',
            title: 'Pronto',
            state: 'active',
            description: t('projects.pronto.description'),
            imgSrc: prontoIllustration.src,
            repoUrl: 'https://github.com/bengaudry/pronto',
            category: 'low-level',
            isPersonal: true,
            associatedSkills: ['rust', "git", "github", "c"]
        },
        {
            id: 'compiler',
            title: t('projects.compiler.title'),
            state: 'inactive',
            description: t('projects.compiler.description'),
            imgSrc: compilerIllustration.src,
            iconSrc: compilerIcon.src,
            category: 'low-level',
            isPersonal: false,
            associatedSkills: ['java', 'asm', 'git', 'github']
        },
        {
            id: 'irrigation-system',
            title: t('projects.irrigation-system.title'),
            state: 'inactive',
            description: t('projects.irrigation-system.description'),
            imgSrc: irrigationProjectIllustration.src,
            iconSrc: irrigationProjectIcon.src,
            category: 'low-level',
            isPersonal: false,
            associatedSkills: ['cpp']
        }
    ] satisfies Array<ProjectProps>
}

const highlightedProjectsIds = [
    'side-by-side',
    'studyswipe',
    'pronto'
] satisfies Array<ReturnType<typeof getProjectsList>[number]['id']>

export const getHighlightedProjectsList = (t: TranslationFunction) => {
    const projectsList = getProjectsList(t)
    return projectsList.filter(({id}) => highlightedProjectsIds.includes(id))
}
