import {type PropsWithChildren} from 'react'
import styles from './List.module.scss'

type Variant = "primary" | "secondary"

export type ListItemT = {
    title: string
    size?: "sm" | "md",
    variant?: Variant
} & (
    | {
    icon?: ImageMetadata | undefined
}
    | { iconUrl?: string }
    )

export type ListProps = PropsWithChildren<{
    title: string
    items?: Array<ListItemT>
    className?: string
    linksTo?: string
    variant?: Variant
}> &
    (
        | {
        icon?: ImageMetadata | undefined
    }
        | { iconUrl?: string }
        | { forceIcon?: boolean }
        )

export function ListItem({title, size = "md", variant = "primary", ...props}: ListItemT) {
    const iconUrl =
        'icon' in props && props.icon
            ? props.icon.src
            : 'iconUrl' in props
                ? props.iconUrl
                : undefined

    const classNames = [styles.ListItem]
    if ("sm" === size) classNames.push(styles.ListItemSm)
    if ("secondary" === variant) classNames.push(styles.ListItemSecondary)

    return (
        <div className={classNames.join(" ")}>
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

function ListItemsContainer({children}: PropsWithChildren) {
    return <div className={styles.ListItemsContainer}>{children}</div>
}

export function List({
                         title,
                         children,
                         items,
                         linksTo,
                         className,
                         variant = "primary",
                         ...props
                     }: ListProps) {
    const classNames = [styles.List]
    if (className) classNames.push(className)

    const forceIcon = "forceIcon" in props && props.forceIcon === true

    const Children = () => {
        if (!items) return children
        return (
            <ListItemsContainer>
                {items.map((item, index) => (
                    <ListItem key={index} variant={variant} {...item} />
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
            <div className={styles.RoundedSquare}/>
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
                {forceIcon && (
                    <span className={styles.ForceIcon}>{title[0]}</span>
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
            <Children/>
        </div>
    )
}
