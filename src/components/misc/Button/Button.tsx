import { NavLink, type NavLinkProps } from "react-router"
import styles from "./Button.module.scss"

export type ButtonLinkProps = Omit<
	{
		label: string
		leftIcon?: { src: string; alt: string; height?: number; width?: number }
		rightIcon?: {
			src: string
			alt: string
			height?: number
			width?: number
		}
	} & NavLinkProps,
	"children"
>

export function ButtonLink(props: ButtonLinkProps) {
	const { className, label, leftIcon, rightIcon, ...otherProps } = props

	const classNames = [styles.Button, className].filter(Boolean)

	return (
		<NavLink className={classNames.join(" ")} {...otherProps}>
			{leftIcon && (
				<img
					src={leftIcon.src}
					alt={leftIcon.alt}
					height={leftIcon.height ?? 16}
					width={leftIcon.width ?? 16}
					loading="lazy"
				/>
			)}
			<span>{label}</span>
			{rightIcon && (
				<img
					src={rightIcon.src}
					alt={rightIcon.alt}
					height={rightIcon.height ?? 16}
					width={rightIcon.width ?? 16}
					loading="lazy"
				/>
			)}
		</NavLink>
	)
}
