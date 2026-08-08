import styles from "./Tabs.module.scss"
import {useTabs} from "./Tabs"

export function TabTrigger({
                               tabId,
                               tabName,
                               index
                           }: {
    tabId: string
    tabName: string,
    index: number
}) {
    const {setCurrentTabId, currentTabId} = useTabs()

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