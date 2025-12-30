import { createBrowserRouter, type RouteObject } from "react-router-dom";

const routes: RouteObject[] = [{ path: "/", element: <div>Home</div> }];

const router = createBrowserRouter(routes);

export default router;
