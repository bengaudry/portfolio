import { useEffect } from "react";
import { useNavigate } from "react-router";

const RESUMES: Record<string, {name: string, url: string}> = {
    "en": {
        name: "resume-ben-gaudry.pdf",
        url: "/en-resume-bengaudry.pdf",
    },
    "fr": {
        name: "cv-ben-gaudry.pdf",
        url: "/fr-cv-bengaudry.pdf"
    }
};

export function Resume({ lang }: { lang?: string }) {
    const navigate = useNavigate();
    useEffect(() => {
        const link = document.createElement("a");
        const resume = RESUMES[lang || "fr"];
        link.href = resume.url;
        link.download = resume.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        navigate("/" + (lang ?? ""));
    }, [lang, navigate]);

    return null;
}
