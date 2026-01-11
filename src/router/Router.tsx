import { createBrowserRouter, type RouteObject } from "react-router-dom";

import ArticlePage from "@/pages/ArticlePage";
import HomePage from "@/pages/HomePage";

const routes: RouteObject[] = [
    { path: "/", element: <HomePage /> },
    { path: "/news/:id", element: <ArticlePage /> },
];

const router = createBrowserRouter(routes);

export default router;
