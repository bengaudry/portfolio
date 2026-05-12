import type { HTMLMotionProps } from "framer-motion"
import { motion as fmotion } from "framer-motion"
import { forwardRef } from "react"
import { useIsClient } from "../../lib/hooks/useIsClient"
import { useLocation } from "react-router"

export { useInView } from "framer-motion"

export const motion = {
	div: forwardRef<HTMLDivElement, HTMLMotionProps<"div">>((props, ref) => {
		const isClient = useIsClient()
		const location = useLocation()
		const { initial, animate, ...otherProps } = props
		return (
			<fmotion.div
				key={location.pathname}
				initial={isClient ? initial : false}
				animate={isClient ? animate : undefined}
				{...otherProps}
				ref={ref}
			/>
		)
	}),
	p: forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>((props, ref) => {
		const isClient = useIsClient()
		const location = useLocation()
		const { initial, animate, ...otherProps } = props
		return (
			<fmotion.p
				key={location.pathname}
				initial={isClient ? initial : false}
				animate={isClient ? animate : undefined}
				{...otherProps}
				ref={ref}
			/>
		)
	}),
	section: forwardRef<HTMLElement, HTMLMotionProps<"section">>(
		(props, ref) => {
			const isClient = useIsClient()
			const location = useLocation()
			const { initial, animate, ...otherProps } = props
			return (
				<fmotion.section
					key={location.pathname}
					initial={isClient ? initial : false}
					animate={isClient ? animate : undefined}
					{...otherProps}
					ref={ref}
				/>
			)
		}
	),
	h1: forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>((props, ref) => {
		const isClient = useIsClient()
		const location = useLocation()
		const { initial, animate, ...otherProps } = props
		return (
			<fmotion.h1
				key={location.pathname}
				initial={isClient ? initial : false}
				animate={isClient ? animate : undefined}
				{...otherProps}
				ref={ref}
			/>
		)
	}),
	h2: forwardRef<HTMLHeadingElement, HTMLMotionProps<"h2">>((props, ref) => {
		const isClient = useIsClient()
		const location = useLocation()
		const { initial, animate, ...otherProps } = props
		return (
			<fmotion.h2
				key={location.pathname}
				initial={isClient ? initial : false}
				animate={isClient ? animate : undefined}
				{...otherProps}
				ref={ref}
			/>
		)
	})
}
