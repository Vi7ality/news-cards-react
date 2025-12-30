import { createBrowserRouter, type RouteObject } from "react-router-dom";

import NewsItemPage from "@/pages/NewsItemPage";
import HomePage from "@/pages/HomePage";

const routes: RouteObject[] = [
    { path: "/", element: <HomePage /> },
    { path: "/news/:id", element: <NewsItemPage /> },
];

const router = createBrowserRouter(routes);

export default router;
