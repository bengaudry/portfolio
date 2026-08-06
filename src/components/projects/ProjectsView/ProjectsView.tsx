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
			<ResponsiveWrapper withMargin isFirst>
				<a href={`/${locale}/`} className={styles.BackButton}>
					<ChevronLeft size={24} />
					{t('common.back')}
				</a>
				<h1>{t('projects.title')}</h1>
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
				></Tabs>
			</ResponsiveWrapper>
			<ProjectsModal />
		</ProjectsProvider>
	)
}
