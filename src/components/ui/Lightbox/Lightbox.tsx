import { useOverlayControls } from "../../../hooks/useOverlayControls"
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
	const { handleBackdropClick } = useOverlayControls(isOpen, onClose)

	if (!isOpen) return null


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

