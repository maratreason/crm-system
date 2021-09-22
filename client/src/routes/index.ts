import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Register from "../pages/Register";
import Category from "../pages/Category";
import History from "../pages/History";
import Order from "../pages/Order";
import {IRoutes} from "../core/types/routeTypes";

export const publicRoutes: IRoutes[] = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        exact: true,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        exact: true,
    },
];

export const privateRoutes: IRoutes[] = [
    {
        path: "/",
        name: "Обзор",
        component: Overview,
        exact: true,
    },
    {
        path: "/category",
        name: "Категории",
        component: Category,
        exact: true,
    },
    {
        path: "/history",
        name: "История заказов",
        component: History,
        exact: true,
    },
    {
        path: "/orders",
        name: "Заказы",
        component: Order,
        exact: true,
    },
];
