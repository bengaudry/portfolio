import {useEffect, useState} from "react";

export function HeroTitleTick() {
    const [isTickVisible, setIsTickVisible] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTickVisible((v) => !v)
        }, 800)

        return () => clearInterval(intervalId)
    }, [])

    return <span>
        {isTickVisible ? "_" : ""}
    </span>
}