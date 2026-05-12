import { run } from "@react-router/dev/cli"

// On simule l'appel à: react-router-serve ./build/server/index.mjs
process.argv = [
	"node",
	"react-router-serve",
	"./build/server/index.mjs" // Vérifie bien que ce fichier existe dans build/server/
]

import("@react-router/node/cli.js").catch(() => {
	// Si le chemin au-dessus change selon la version, on utilise npx en fallback interne
	import("child_process").then((cp) => {
		cp.spawn("npx", ["react-router-serve", "./build/server/index.mjs"], {
			stdio: "inherit",
			shell: true
		})
	})
})
