import type {ReactNode} from "react";
import styles from "./Tabs.module.scss";
import {TabTrigger} from "./TabTrigger.tsx";

export function TabsNav({ tabs }: { tabs: Array<{ id: string; name: string; content: ReactNode }>}) {
    return <nav className={styles.Nav}>
        {tabs.map((tab, idx) => (
            <TabTrigger
                key={tab.id}
                index={idx}
                tabId={tab.id}
                tabName={tab.name}
            />
        ))}
    </nav>
}