import { type ReactNode, useEffect } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Modal.module.scss"

export type ModalProps = {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const { t } = useTranslation()

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

