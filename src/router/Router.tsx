import { createBrowserRouter, type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NewsItemPage from "@/pages/NewsItemPage";

const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/news/:id", element: <NewsItemPage /> },
];

const router = createBrowserRouter(routes);

export default router;
