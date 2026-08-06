import {defineMiddleware} from "astro/middleware";

console.log("loaded")

export const onRequest = defineMiddleware((context, next) => {
    const {pathname} = context.url;

    console.log(pathname);

    if (!pathname.startsWith("/en") && !pathname.startsWith("/fr")) {
        console.log("Redirecting to localed route")
        return context.redirect(`/fr${pathname === "/" ? "" : pathname}`);
    }

    return next();
});
