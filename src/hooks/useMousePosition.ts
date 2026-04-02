// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
import { useState, useEffect } from "react"

export const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<{
		mouseX: number | null;
		mouseY: number | null;
	}>({
		mouseX: null,
		mouseY: null
	})

	const updateMousePosition = (ev: MouseEvent) => {
		setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY })
	}

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition)

		return () =>
			window.removeEventListener("mousemove", updateMousePosition)
	}, [])

	return mousePosition
}
