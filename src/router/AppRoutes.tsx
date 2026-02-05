import { Route, Routes } from "react-router";
import App from "../views/App";

export function AppRoutes() {
    return <Routes>
        <Route index element={<App />} />
        <Route path="en" element={<App />} />
        <Route path="fr" element={<App />} />
    </Routes>
}
