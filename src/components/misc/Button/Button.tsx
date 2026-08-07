import styles from './Button.module.scss'
import type { HTMLProps, ReactNode } from 'react'
import { useTranslation } from '@/i18n/utils.ts'

export type ButtonLinkPropsBase = {
	label: string
	StartContent?: ReactNode
	leftIcon?: { src: string; alt: string; height?: number; width?: number }
	rightIcon?: {
		src: string
		alt: string
		height?: number
		width?: number
	}
	EndContent?: ReactNode
}

export type ButtonLinkProps = Omit<HTMLProps<HTMLAnchorElement>, 'children'> &
	ButtonLinkPropsBase

export function ButtonLink({
	className,
	href,
	label,
	leftIcon,
	rightIcon,
	StartContent,
	EndContent,
	...otherProps
}: ButtonLinkProps) {
	const classNames = [styles.Button, className].filter(Boolean)
	const computedClassname = classNames.join(' ')

	const { locale } = useTranslation()
	const realHref = href?.startsWith("/") ? `/${locale}${href}` : href

	return (
		<a className={computedClassname} {...otherProps} href={realHref}>
			{StartContent && StartContent}
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
			{EndContent && EndContent}
		</a>
	)
}
