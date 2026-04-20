import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useOverlayControls } from "../../../hooks/useOverlayControls"
import styles from "./Modal.module.scss"

export type ModalProps = {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const { t } = useTranslation()
	const { handleBackdropClick } = useOverlayControls(isOpen, onClose)

	if (!isOpen) return null


	return (
		<div className={styles.ModalBackdrop} onClick={handleBackdropClick}>
			<div className={styles.Modal}>
				<div className={styles.ModalHeader}>
					{title && <h2>{title}</h2>}
					<button
						className={styles.CloseButton}
						onClick={onClose}
						aria-label={t("common.close")}
						type="button"
					>
						✕
					</button>
				</div>
				<div className={styles.ModalContent}>{children}</div>
			</div>
		</div>
	)
}

