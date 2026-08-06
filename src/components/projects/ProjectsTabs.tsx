import { Tabs } from '@/components/ui/Tabs/Tabs.tsx'
import { SubProjectsList } from '@/components/projects/SubProjectsList/SubProjectsList.tsx'

export function ProjectsTabs() {
	return (
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
			style={{ marginTop: '1rem' }}
		/>
	)
}
