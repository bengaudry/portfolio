import type { Config } from "@react-router/dev/config"

export default {
	appDirectory: "src",
	ssr: true,
	async prerender() {
		return ["/", "/en", "/fr"]
	}
} satisfies Config
