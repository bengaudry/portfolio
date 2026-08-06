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

export const SKILLS: Record<
	string,
	{
		icon: ImageMetadata
		items: Array<{ title: string; icon?: ImageMetadata }>
	}
> = {
	'front-end': {
		icon: frontendIcon,
		items: [
			{
				title: 'HTML',
				icon: frontHtmlIcon
			},
			{
				title: 'CSS',
				icon: frontCssIcon
			},
			{
				title: 'React',
				icon: frontReactIcon
			},
			{
				title: 'TypeScript',
				icon: frontTypescriptIcon
			},
			{
				title: 'TailwindCSS',
				icon: frontTailwindIcon
			},
			{
				title: 'Alpine.js'
			},
			{
				title: 'Vue.js',
				icon: frontVueIcon
			}
		]
	},
	'back-end': {
		icon: backendIcon,
		items: [
			{
				title: 'Next.JS',
				icon: backNextjsIcon
			},
			{
				title: 'Prisma',
				icon: backPrismaIcon
			},
			{
				title: 'Firebase',
				icon: backFirebaseIcon
			},
			{
				title: 'Supabase',
				icon: backSupabaseIcon
			},
			{
				title: 'NodeJS',
				icon: backNodejsIcon
			},
			{
				title: 'Oracle SQL',
				icon: backDatabaseIcon
			}
		]
	},
	tools: {
		icon: toolsIcon,
		items: [
			{
				title: 'Git',
				icon: toolsGitIcon
			},
			{
				title: 'Figma',
				icon: toolsFigmaIcon
			},
			{
				title: 'Canva',
				icon: toolsCanvaIcon
			},
			{
				title: 'Github',
				icon: toolsGithubIcon
			},
			{
				title: 'Notion',
				icon: toolsNotionIcon
			},
			{
				title: 'Vercel',
				icon: toolsVercelIcon
			},
			{
				title: 'Netlify',
				icon: toolsNetlifyIcon
			}
		]
	},
	others: {
		icon: othersIcon,
		items: [
			{
				title: 'Java',
				icon: othersJavaIcon
			},
			{
				title: 'Python',
				icon: othersPythonIcon
			},
			{ title: 'C' },
			{
				title: 'C++',
				icon: othersCppIcon
			},
			{
				title: 'Assembly',
				icon: othersAssemblyIcon
			},
			{
				title: 'Php',
				icon: othersPhpIcon
			},
			{
				title: 'Linux',
				icon: othersLinuxIcon
			}
		]
	}
}
