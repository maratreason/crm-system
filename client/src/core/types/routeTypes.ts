import {FC} from "react";

export interface IRoutes {
    path: string;
    name: string;
    component: FC;
    exact: boolean;
}

export interface IRouteProps {
    routes: IRoutes[];
}