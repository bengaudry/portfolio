import { useEffect } from "react"
import styles from "./Lightbox.module.scss"

export type LightboxProps = {
	isOpen: boolean
	onClose: () => void
	imageSrc: string
	imageAlt: string
}

export function Lightbox({
	isOpen,
	onClose,
	imageSrc,
	imageAlt
}: LightboxProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener("keydown", handleEscape)
			document.body.style.overflow = "hidden"
		}

		return () => {
			document.removeEventListener("keydown", handleEscape)
			document.body.style.overflow = "unset"
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	const handleBackdropClick = (
		e: React.MouseEvent<HTMLDivElement>
	) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div className={styles.LightboxBackdrop} onClick={handleBackdropClick}>
			<div className={styles.LightboxContainer}>
				<button
					className={styles.CloseButton}
					onClick={onClose}
					aria-label="Close fullscreen"
					type="button"
				>
					✕
				</button>
				<img
					src={imageSrc}
					alt={imageAlt}
					className={styles.LightboxImage}
				/>
			</div>
		</div>
	)
}

