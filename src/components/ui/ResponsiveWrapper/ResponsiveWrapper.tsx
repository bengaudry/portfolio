import type { CSSProperties, PropsWithChildren } from "react"
import styles from "./ResponsiveWrapper.module.scss"

export type ResponsiveWrapperProps = PropsWithChildren<{
	withMargin?: boolean
	withBorder?: boolean
	className?: string
	isFirst?: boolean
	isLast?: boolean
	style?: CSSProperties
}>

export function ResponsiveWrapper({
	children,
	isFirst,
	isLast,
	className,
	withBorder,
	withMargin,
	style
}: ResponsiveWrapperProps) {
	const classNames = [styles.ResponsiveWrapper]
	if (withMargin) classNames.push(styles.WithMargin)
	if (withBorder) classNames.push(styles.WithBorder)
	if (isFirst) classNames.push(styles.First)
	if (isLast) classNames.push(styles.Last)
	if (className) classNames.push(className)

	return (
		<div className={classNames.join(" ")} style={style}>
			{children}
		</div>
	)
}
