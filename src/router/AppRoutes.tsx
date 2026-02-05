import { Route, Routes } from "react-router";
import App from "../views/App";
import { Resume } from "../views/Resume";

export function AppRoutes() {
    return <Routes>
        <Route index element={<App />} />
        <Route path="en" element={<App />} />
        <Route path="fr" element={<App />} />

        <Route path="resume" element={<Resume />} />
        <Route path="/fr/resume" element={<Resume lang="fr" />} />
        <Route path="/en/resume" element={<Resume lang="en" />} />
    </Routes>
}
