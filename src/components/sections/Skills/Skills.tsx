import { useTranslation } from "react-i18next";
import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Skills.module.scss";

const SKILLS: Record<
	string,
	{ iconUrl: string; items: Array<{ title: string; iconUrl?: string }> }
> = {
	"front-end": {
		iconUrl:
			"https://img.icons8.com/?size=100&id=i1DTRHrbIVcm&format=png&color=000000",
		items: [
			{
				title: "HTML",
				iconUrl:
					"https://img.icons8.com/?size=32&id=23028&format=png&color=000000",
			},
			{
				title: "CSS",
				iconUrl:
					"https://img.icons8.com/?size=32&id=38272&format=png&color=000000",
			},
			{
				title: "React",
				iconUrl:
					"https://img.icons8.com/?size=32&id=35989&format=png&color=000000",
			},
			{
				title: "TypeScript",
				iconUrl:
					"https://img.icons8.com/?size=32&id=cHBUT9SmrD2V&format=png&color=000000",
			},
			{
				title: "TailwindCSS",
				iconUrl:
					"https://img.icons8.com/?size=32&id=UpSCHTwpywad&format=png&color=000000",
			},
			{
				title: "Alpine.js",
			},
		],
	},
	"back-end": {
		iconUrl:
			"https://img.icons8.com/?size=100&id=Wy3XKG1CjyKf&format=png&color=000000",
		items: [
			{
				title: "Next.JS",
				iconUrl:
					"https://img.icons8.com/?size=32&id=yUdJlcKanVbh&format=png&color=000000",
			},
			{
				title: "Prisma",
				iconUrl:
					"https://img.icons8.com/?size=32&id=aqb9SdV9P8oC&format=png&color=000000",
			},
			{
				title: "Firebase",
				iconUrl:
					"https://img.icons8.com/?size=32&id=5pr1cz6sq9qI&format=png&color=000000",
			},
			{
				title: "Supabase",
				iconUrl:
					"https://img.icons8.com/?size=32&id=WOIMvKUjwCRp&format=png&color=000000",
			},
			{
				title: "NodeJS",
				iconUrl:
					"https://img.icons8.com/?size=32&id=FQlr_bFSqEdG&format=png&color=000000",
			},
			{
				title: "Oracle SQL",
				iconUrl:
					"https://img.icons8.com/?size=32&id=8305&format=png&color=000000",
			},
		],
	},
	tools: {
		iconUrl:
			"https://img.icons8.com/?size=100&id=8ODuhw2BOSHc&format=png&color=000000",
		items: [
			{
				title: "Git",
				iconUrl:
					"https://img.icons8.com/?size=32&id=38389&format=png&color=000000",
			},
			{
				title: "Figma",
				iconUrl:
					"https://img.icons8.com/?size=32&id=amXjtNWVYSKP&format=png&color=000000",
			},
			{
				title: "Canva",
				iconUrl:
					"https://img.icons8.com/?size=32&id=jGpsTXAr6PAK&format=png&color=000000",
			},
			{
				title: "VS Code",
				iconUrl:
					"https://img.icons8.com/?size=32&id=SNeRmWiOLnK7&format=png&color=000000",
			},
			{
				title: "Github",
				iconUrl:
					"https://img.icons8.com/?size=32&id=62856&format=png&color=000000",
			},
			{
				title: "Notion",
				iconUrl:
					"https://img.icons8.com/?size=32&id=F6H2fsqXKBwH&format=png&color=000000",
			},
			{ title: "Vercel" },
		],
	},
	others: {
		iconUrl:
			"https://img.icons8.com/?size=100&id=dsj11frDp0rw&format=png&color=000000",
		items: [
			{
				title: "Java",
				iconUrl:
					"https://img.icons8.com/?size=32&id=2572&format=png&color=000000",
			},
			{
				title: "Python",
				iconUrl:
					"https://img.icons8.com/?size=32&id=12592&format=png&color=000000",
			},
			{ title: "C" },
			{
				title: "ARM",
				iconUrl:
					"https://img.icons8.com/?size=32&id=9134&format=png&color=000000",
			},
			{
				title: "React Native",
				iconUrl:
					"https://img.icons8.com/?size=32&id=35989&format=png&color=000000",
			},
		],
	},
};

export function Skills() {
	const { t } = useTranslation();

	return (
		<section className={styles.Skills}>
			<ResponsiveWrapper withMargin withBorder>
				<SectionTitle title={t("skills.title")} />
				{Object.keys(SKILLS).map((skillName) => (
					<List
						key={skillName}
						title={t("skills." + skillName)}
						iconUrl={SKILLS[skillName].iconUrl}
						items={SKILLS[skillName].items}
					/>
				))}
			</ResponsiveWrapper>
		</section>
	);
}
