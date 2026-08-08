import styles from './Tabs.module.scss'
import {
	createContext,
	type CSSProperties,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useContext,
	useState
} from 'react'
import {TabsNav} from "@/components/ui/Tabs/TabsNav.tsx";

const TabsContext = createContext<{
	currentTabId: string
	setCurrentTabId: Dispatch<SetStateAction<string>>
} | null>(null)

export const useTabs = () => {
	const ctx = useContext(TabsContext)
	if (!ctx) {
		throw new Error('useTabs must be used within a Tabs component')
	}
	return ctx
}

export function Tabs({
	tabs,
	className,
	style
}: {
	tabs: Array<{ id: string; name: string; content: ReactNode }>
	className?: string
	style?: CSSProperties
}) {
	const [currentTabId, setCurrentTabId] = useState(tabs[0]?.id || '')

	return (
		<TabsContext.Provider value={{ currentTabId, setCurrentTabId }}>
			<div className={[styles.Tabs, className].join(' ')} style={style}>
				<TabsNav tabs={tabs} />

				<section className={styles.Content}>
					{tabs.find((tab) => tab.id === currentTabId)?.content}
				</section>
			</div>
		</TabsContext.Provider>
	)
}
