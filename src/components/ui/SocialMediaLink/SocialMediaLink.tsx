import { PERSONNAL_EMAIL } from "../../../lib/constants"
import styles from "./SocialMediaLink.module.scss"
import linkedinIconSrc from "../../../assets/icons/icons8-linkedin-50.png"
import githubIconSrc from "../../../assets/icons/icons8-github-64.png"
import mailIconSrc from "../../../assets/icons/icons8-mail-50.png"

export type SocialMediaLinkProps = {
	name: "linkedin" | "github" | "mail"
}

export function SocialMediaLink({ name }: SocialMediaLinkProps) {
	let iconSrc: string = ""
	let link: string = ""

	if ("linkedin" === name) {
		link = "https://www.linkedin.com/in/ben-gaudry-4702932a5/"
		iconSrc = linkedinIconSrc
	}

	if ("github" === name) {
		link = "https://github.com/bengaudry"
		iconSrc = githubIconSrc
	}

	if ("mail" === name) {
		link = `mailto:${PERSONNAL_EMAIL}`
		iconSrc = mailIconSrc
	}

	return (
		<a
			className={styles.SocialMediaLink}
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={"Open " + name + " in a new tab"}
		>
			<img height={36} width={36} src={iconSrc} alt={name + " icon"} />
		</a>
	)
}
