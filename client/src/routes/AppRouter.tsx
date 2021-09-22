import React, {FC} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {useTypedSelector} from "../core/hooks/useTypedSelector";
import {IRoutes, IRouteProps} from "../core/types/routeTypes";

const AppRouter: FC<IRouteProps> = ({routes}) => {
    const {token, isLoading} = useTypedSelector((state) => state.auth);

    if (token && isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <Switch>
            {routes.map((route: IRoutes) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}

            {token ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Switch>
    );
};

export default AppRouter;
