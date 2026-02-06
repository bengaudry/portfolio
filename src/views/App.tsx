import styles from "./App.module.scss"
import { About, Hero } from "../components/sections"
import { lazy, Suspense } from "react"
import "../styles/App.scss"

const Education = lazy(
	() => import("../components/sections/Education/Education")
)
const Skills = lazy(() => import("../components/sections/Skills/Skills"))
const Projects = lazy(() => import("../components/sections/Projects/Projects"))
const Contact = lazy(() => import("../components/sections/Contact/Contact"))
const Footer = lazy(() => import("../components/sections/Footer/Footer"))

export default function App() {
	return (
		<div className={styles.App}>
			<Hero />
			<About />

			<Suspense>
				<Education />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</Suspense>
		</div>
	)
}
