import { ProjectsProvider } from '@/components/projects/ProjectsContext.tsx'
import { getProjectsList } from '@/lib/projects.ts'
import { ResponsiveWrapper } from '@/components/ui/ResponsiveWrapper/ResponsiveWrapper.tsx'
import styles from './ProjectsView.module.scss'
import { ChevronLeft } from 'lucide-react'
import { SubProjectsList } from '@/components/projects/SubProjectsList/SubProjectsList.tsx'
import { Tabs } from '@/components/ui/Tabs/Tabs.tsx'
import { useTranslation } from '@/i18n/utils.ts'
import { ProjectsModal } from '@/components/projects/ProjectsModal/ProjectsModal.tsx'

export function ProjectsView({
	defaultProjectId
}: {
	defaultProjectId: string | null
}) {
	const { t, locale } = useTranslation()
	const projects = getProjectsList(t)

	return (
		<ProjectsProvider
			projects={projects}
			defaultProjectId={defaultProjectId}
		>
			<ResponsiveWrapper>
				<Tabs
					tabs={[
						{
							id: 'web',
							name: 'Web',
							content: <SubProjectsList category="web" />
						},
						{
							id: 'low-level',
							name: 'Low level',
							content: <SubProjectsList category="low-level" />
						}
					]}
				/>
			</ResponsiveWrapper>
			<ProjectsModal />
		</ProjectsProvider>
	)
}
