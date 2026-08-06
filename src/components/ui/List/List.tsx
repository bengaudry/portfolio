import { type PropsWithChildren } from 'react'
import styles from './List.module.scss'

export type ListItemT = {
	title: string
} & (
	| {
			icon?: ImageMetadata
	  }
	| { iconUrl?: string }
)

export type ListProps = PropsWithChildren<{
	title: string
	items?: Array<ListItemT>
	className?: string
	linksTo?: string
}> &
	(
		| {
				icon?: ImageMetadata
		  }
		| { iconUrl?: string }
	)

function ListItem({ title, ...props }: ListItemT) {
	const iconUrl =
		'icon' in props && props.icon
			? props.icon.src
			: 'iconUrl' in props
				? props.iconUrl
				: undefined

	return (
		<div className={styles.ListItem}>
			{iconUrl && (
				<img
					src={iconUrl}
					loading="lazy"
					width={16}
					height={16}
					alt={title + ' icon'}
				/>
			)}
			<p>{title}</p>
		</div>
	)
}

function ListItemsContainer({ children }: PropsWithChildren) {
	return <div className={styles.ListItemsContainer}>{children}</div>
}

export function List({
	title,
	children,
	items,
	linksTo,
	className,
	...props
}: ListProps) {
	const classNames = [styles.List]
	if (className) classNames.push(className)

	const Children = () => {
		if (!items) return children
		return (
			<ListItemsContainer>
				{items.map((item, index) => (
					<ListItem key={index} {...item} />
				))}
			</ListItemsContainer>
		)
	}

	const iconUrl =
		'icon' in props && props.icon
			? props.icon.src
			: 'iconUrl' in props
				? props.iconUrl
				: undefined

	return (
		<div className={classNames.join(' ')}>
			<div className={styles.RoundedSquare} />
			<div className={styles.TitleContainer}>
				{iconUrl && (
					<img
						height={32}
						width={32}
						src={iconUrl}
						alt={title + ' icon'}
						className={styles.Icon}
					/>
				)}
				{linksTo ? (
					<a
						href={linksTo}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.Title}
					>
						{title}
					</a>
				) : (
					<span className={styles.Title}>{title}</span>
				)}
			</div>
			<Children />
		</div>
	)
}
