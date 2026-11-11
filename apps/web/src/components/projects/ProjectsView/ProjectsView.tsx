import { ProjectsProvider } from '@/components/projects/ProjectsContext.tsx'
import type { ProjectProps } from '@/lib/projects.ts'
import styles from './ProjectsView.module.scss'
import { SubProjectsList } from '@/components/projects/SubProjectsList/SubProjectsList.tsx'
import { Tabs } from '@/components/ui/Tabs/Tabs.tsx'
import { ProjectsModal } from '@/components/projects/ProjectsModal/ProjectsModal.tsx'

export function ProjectsView({ projects }: { projects: ProjectProps[] }) {
	const currentUrl = new URL(window.location.href)
	const defaultProjectId = currentUrl.searchParams.get('modal-content-id')

	return (
		<ProjectsProvider
			projects={projects}
			defaultProjectId={defaultProjectId}
		>
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
				className={styles.MobileView}
			/>

			<div className={[styles.LaptopView].join(' ')}>
				<section>
					<h2>Web</h2>
					<SubProjectsList category="web" />
				</section>
				<section>
					<h2>Low-level</h2>
					<SubProjectsList category="low-level" />
				</section>
			</div>
			<ProjectsModal />
		</ProjectsProvider>
	)
}
