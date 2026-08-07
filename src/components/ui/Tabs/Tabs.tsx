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

const TabsContext = createContext<{
	currentTabId: string
	setCurrentTabId: Dispatch<SetStateAction<string>>
} | null>(null)

const useTabs = () => {
	const ctx = useContext(TabsContext)
	if (!ctx) {
		throw new Error('useTabs must be used within a Tabs component')
	}
	return ctx
}

export function TabTrigger({
	tabId,
	tabName,
	index
}: {
	tabId: string
	tabName: string,
	index: number
}) {
	const { setCurrentTabId, currentTabId } = useTabs()

	return (
		<button
			tabIndex={0}
			className={[
				styles.Trigger,
				currentTabId === tabId && styles.ActiveTrigger
			].join(' ')}
			onClick={() => setCurrentTabId(tabId)}
		>
			{tabName}
		</button>
	)
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
				<nav className={styles.Nav}>
					{tabs.map((tab, idx) => (
						<TabTrigger
							key={tab.id}
							index={idx}
							tabId={tab.id}
							tabName={tab.name}
						/>
					))}
				</nav>

				<section className={styles.Content}>
					{tabs.find((tab) => tab.id === currentTabId)?.content}
				</section>
			</div>
		</TabsContext.Provider>
	)
}
