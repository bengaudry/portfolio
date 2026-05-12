import { useEffect, useState } from "react"

/**
 * Hook to detect if code is running on the client side.
 * Returns false during SSR and true after hydration.
 * This prevents framer-motion animations from running during SSR,
 * which would cause hydration mismatches.
 */
export function useIsClient() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return isClient
}
