import { lazy } from "react";
import { RouteType } from "./types";

const SignUp = lazy(() => import("./containers/SignUp"));
const Dashboard = lazy(() => import("./containers/Dashboard"));

export const routes: RouteType[] = [
	{
		path: "/",
		element: SignUp,
	},
	{
		path: "/signup",
		element: SignUp,
	},
	{
		path: "/dashboard",
		element: Dashboard,
	},
	{
		path: "*",
		element: SignUp,
	},
];
