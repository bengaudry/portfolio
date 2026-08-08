// Section icons
import frontendIcon from '../../../assets/icons/skills/icons8-code-94.png'
import backendIcon from '../../../assets/icons/skills/icons8-database-94.png'
import toolsIcon from '../../../assets/icons/skills/icons8-tool-94.png'
import othersIcon from '../../../assets/icons/skills/icons8-dots-94.png'

// Frontend icons
import frontHtmlIcon from '../../../assets/icons/skills/frontend/icons8-html-50.png'
import frontCssIcon from '../../../assets/icons/skills/frontend/icons8-css-48.png'
import frontReactIcon from '../../../assets/icons/skills/frontend/icons8-react-48.png'
import frontTypescriptIcon from '../../../assets/icons/skills/frontend/icons8-typescript-50.png'
import frontTailwindIcon from '../../../assets/icons/skills/frontend/icons8-tailwind-css-48.png'
import frontVueIcon from '../../../assets/icons/skills/frontend/icons8-vue.js-48.png'

// Backend icons
import backNextjsIcon from '../../../assets/icons/skills/backend/icons8-nextjs-48.png'
import backPrismaIcon from '../../../assets/icons/skills/backend/icons8-prisma-orm-50.png'
import backFirebaseIcon from '../../../assets/icons/skills/backend/icons8-firebase-48.png'
import backSupabaseIcon from '../../../assets/icons/skills/backend/icons8-supabase-48.png'
import backNodejsIcon from '../../../assets/icons/skills/backend/icons8-nodejs-32.png'
import backDatabaseIcon from '../../../assets/icons/skills/backend/icons8-database-50.png'

// Tools icons
import toolsGitIcon from '../../../assets/icons/skills/tools/icons8-git-50.png'
import toolsFigmaIcon from '../../../assets/icons/skills/tools/icons8-figma-50.png'
import toolsCanvaIcon from '../../../assets/icons/skills/tools/icons8-canva-app-50.png'
import toolsGithubIcon from '../../../assets/icons/skills/tools/icons8-github-64.png'
import toolsNotionIcon from '../../../assets/icons/skills/tools/icons8-notion-50.png'
import toolsVercelIcon from '../../../assets/icons/skills/tools/icons8-vercel-50.png'
import toolsNetlifyIcon from '../../../assets/icons/skills/tools/icons8-netlify-48.png'

// Others icons
import othersJavaIcon from '../../../assets/icons/skills/others/icons8-java-50.png'
import othersPythonIcon from '../../../assets/icons/skills/others/icons8-python-50.png'
import othersCppIcon from '../../../assets/icons/skills/others/icons8-c++-50.png'
import othersAssemblyIcon from '../../../assets/icons/skills/others/icons8-processor-50.png'
import othersPhpIcon from '../../../assets/icons/skills/others/icons8-php-50.png'
import othersLinuxIcon from '../../../assets/icons/skills/others/icons8-linux-50.png'
import othersRustIcon from "../../../assets/icons/skills/others/icons8-rust-24.png"

export type Skill = {
    title: string
    icon?: ImageMetadata
    category: "front-end" | "back-end" | "tools" | "others"
}

export const SKILLS: Record<string, Skill> = {
    html: {
        title: 'HTML',
        icon: frontHtmlIcon,
        category: "front-end"
    },
    css: {
        title: 'CSS',
        icon: frontCssIcon,
        category: "front-end"
    },
    react: {
        title: 'React',
        icon: frontReactIcon,
        category: "front-end"
    },
    typescript: {
        title: 'TypeScript',
        icon: frontTypescriptIcon,
        category: "front-end"
    },
    tailwindcss: {
        title: 'TailwindCSS',
        icon: frontTailwindIcon,
        category: "front-end"
    },
    alpinejs: {
        title: 'Alpine.js',
        category: "front-end"
    },
    vuejs: {
        title: 'Vue.js',
        icon: frontVueIcon,
        category: "front-end"
    },
    nextjs: {
        title: 'Next.JS',
        icon: backNextjsIcon,
        category: "back-end"
    },
    prisma: {
        title: 'Prisma',
        icon: backPrismaIcon,
        category: "back-end"
    },
    firebase: {
        title: 'Firebase',
        icon: backFirebaseIcon,
        category: "back-end"
    },
    supabase: {
        title: 'Supabase',
        icon: backSupabaseIcon,
        category: "back-end"
    },
    nodejs: {
        title: 'NodeJS',
        icon: backNodejsIcon,
        category: "back-end"
    },
    oraclesql: {
        title: 'Oracle SQL',
        icon: backDatabaseIcon,
        category: "back-end"
    },
    git: {
        title: 'Git',
        icon: toolsGitIcon,
        category: "tools"
    },
    figma: {
        title: 'Figma',
        icon: toolsFigmaIcon,
        category: "tools"
    },
    canva: {
        title: 'Canva',
        icon: toolsCanvaIcon,
        category: "tools"
    },
    github: {
        title: 'Github',
        icon: toolsGithubIcon,
        category: "tools"
    },
    notion: {
        title: 'Notion',
        icon: toolsNotionIcon,
        category: "tools"
    },
    vercel: {
        title: 'Vercel',
        icon: toolsVercelIcon,
        category: "tools"
    },
    netlify: {
        title: 'Netlify',
        icon: toolsNetlifyIcon,
        category: "tools"
    },
    java: {
        title: 'Java',
        icon: othersJavaIcon,
        category: "others"
    },
    python: {
        title: 'Python',
        icon: othersPythonIcon,
        category: "others"
    },
    c: {
        title: 'C',
        category: "others"
    },
    cpp: {
        title: 'C++',
        icon: othersCppIcon,
        category: "others"
    },
    rust: {
        title: "Rust",
        icon: othersRustIcon,
        category: "others"
    },
    asm: {
        title: 'Assembly',
        icon: othersAssemblyIcon,
        category: "others"
    },
    php: {
        title: 'Php',
        icon: othersPhpIcon,
        category: "others"
    },
    linux: {
        title: 'Linux',
        icon: othersLinuxIcon,
        category: "others"
    },
    openSource: {
        title: "Open-source",
        category: "others"
    }
} as const

export type SkillId = keyof typeof SKILLS

export const DISPLAYABLE_SKILLS: Record<
    string,
    {
        icon: ImageMetadata
        items: Array<Skill>
    }
> = {
    'front-end': {
        icon: frontendIcon,
        items: Object.values(SKILLS).filter((skill) => skill.category === 'front-end')
    },
    'back-end': {
        icon: backendIcon,
        items: Object.values(SKILLS).filter((skill) => skill.category === 'back-end')
    },
    'tools': {
        icon: toolsIcon,
        items: Object.values(SKILLS).filter((skill) => skill.category === 'tools')
    },
    'others': {
        icon: othersIcon,
        items: Object.values(SKILLS).filter((skill) => skill.category === 'others')
    }
}
