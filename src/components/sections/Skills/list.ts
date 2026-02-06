// Section icons
import frontendIconSrc from "../../../assets/icons/skills/icons8-code-94.png"
import backendIconSrc from "../../../assets/icons/skills/icons8-database-94.png"
import toolsIconSrc from "../../../assets/icons/skills/icons8-tool-94.png"
import othersIconSrc from "../../../assets/icons/skills/icons8-dots-94.png"

// Frontend icons
import frontHtmlIconSrc from "../../../assets/icons/skills/frontend/icons8-html-50.png"
import frontCssIconSrc from "../../../assets/icons/skills/frontend/icons8-css-48.png"
import frontReactIconSrc from "../../../assets/icons/skills/frontend/icons8-react-48.png"
import frontTypescriptIconSrc from "../../../assets/icons/skills/frontend/icons8-typescript-50.png"
import frontTailwindIconSrc from "../../../assets/icons/skills/frontend/icons8-tailwind-css-48.png"
import frontVueIconSrc from "../../../assets/icons/skills/frontend/icons8-vue.js-48.png"

// Backend icons
import backNextjsIconSrc from "../../../assets/icons/skills/backend/icons8-nextjs-48.png"
import backPrismaIconSrc from "../../../assets/icons/skills/backend/icons8-prisma-orm-50.png"
import backFirebaseIconSrc from "../../../assets/icons/skills/backend/icons8-firebase-48.png"
import backSupabaseIconSrc from "../../../assets/icons/skills/backend/icons8-supabase-48.png"
import backNodejsIconSrc from "../../../assets/icons/skills/backend/icons8-nodejs-32.png"
import backDatabaseIconSrc from "../../../assets/icons/skills/backend/icons8-database-50.png"

// Tools icons
import toolsGitIconSrc from "../../../assets/icons/skills/tools/icons8-git-50.png"
import toolsFigmaIconSrc from "../../../assets/icons/skills/tools/icons8-figma-50.png"
import toolsCanvaIconSrc from "../../../assets/icons/skills/tools/icons8-canva-app-50.png"
import toolsGithubIconSrc from "../../../assets/icons/skills/tools/icons8-github-64.png"
import toolsNotionIconSrc from "../../../assets/icons/skills/tools/icons8-notion-50.png"
import toolsVercelIconSrc from "../../../assets/icons/skills/tools/icons8-vercel-50.png"
import toolsNetlifyIconSrc from "../../../assets/icons/skills/tools/icons8-netlify-48.png"

// Others icons
import othersJavaIconSrc from "../../../assets/icons/skills/others/icons8-java-50.png"
import othersPythonIconSrc from "../../../assets/icons/skills/others/icons8-python-50.png"
import othersCppIconSrc from "../../../assets/icons/skills/others/icons8-c++-50.png"
import othersAssemblyIconSrc from "../../../assets/icons/skills/others/icons8-processor-50.png"
import othersPhpIconSrc from "../../../assets/icons/skills/others/icons8-php-50.png"
import othersLinuxIconSrc from "../../../assets/icons/skills/others/icons8-linux-50.png"

export const SKILLS: Record<
	string,
	{ iconUrl: string; items: Array<{ title: string; iconUrl?: string }> }
> = {
	"front-end": {
		iconUrl: frontendIconSrc,
		items: [
			{
				title: "HTML",
				iconUrl: frontHtmlIconSrc
			},
			{
				title: "CSS",
				iconUrl: frontCssIconSrc
			},
			{
				title: "React",
				iconUrl: frontReactIconSrc
			},
			{
				title: "TypeScript",
				iconUrl: frontTypescriptIconSrc
			},
			{
				title: "TailwindCSS",
				iconUrl: frontTailwindIconSrc
			},
			{
				title: "Alpine.js"
			},
			{
				title: "Vue.js",
				iconUrl: frontVueIconSrc
			}
		]
	},
	"back-end": {
		iconUrl: backendIconSrc,
		items: [
			{
				title: "Next.JS",
				iconUrl: backNextjsIconSrc
			},
			{
				title: "Prisma",
				iconUrl: backPrismaIconSrc
			},
			{
				title: "Firebase",
				iconUrl: backFirebaseIconSrc
			},
			{
				title: "Supabase",
				iconUrl: backSupabaseIconSrc
			},
			{
				title: "NodeJS",
				iconUrl: backNodejsIconSrc
			},
			{
				title: "Oracle SQL",
				iconUrl: backDatabaseIconSrc
			}
		]
	},
	tools: {
		iconUrl: toolsIconSrc,
		items: [
			{
				title: "Git",
				iconUrl: toolsGitIconSrc
			},
			{
				title: "Figma",
				iconUrl: toolsFigmaIconSrc
			},
			{
				title: "Canva",
				iconUrl: toolsCanvaIconSrc
			},
			{
				title: "Github",
				iconUrl: toolsGithubIconSrc
			},
			{
				title: "Notion",
				iconUrl: toolsNotionIconSrc
			},
			{
				title: "Vercel",
				iconUrl: toolsVercelIconSrc
			},
			{
				title: "Netlify",
				iconUrl: toolsNetlifyIconSrc
			}
		]
	},
	others: {
		iconUrl: othersIconSrc,
		items: [
			{
				title: "Java",
				iconUrl: othersJavaIconSrc
			},
			{
				title: "Python",
				iconUrl: othersPythonIconSrc
			},
			{ title: "C" },
			{
				title: "C++",
				iconUrl: othersCppIconSrc
			},
			{
				title: "Assembly",
				iconUrl: othersAssemblyIconSrc
			},
			{
				title: "Php",
				iconUrl: othersPhpIconSrc
			},
			{
				title: "Linux",
				iconUrl: othersLinuxIconSrc
			}
		]
	}
}
