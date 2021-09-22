import React, {useState, FC} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Menu} from "antd";
import {
    WindowsOutlined,
    PartitionOutlined,
    ReadOutlined,
    ShoppingCartOutlined,
    PieChartOutlined,
    ContainerOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import {privateRoutes} from "../../../routes";
import {IRoutes} from "../../../core/types/routeTypes";
import {AuthActionCreators} from "../../../core/store/reducers/auth/action-creators";

const menuIcons = [
    {id: 1, icon: <WindowsOutlined style={{fontSize: 18}} />},
    {id: 2, icon: <PartitionOutlined style={{fontSize: 18}} />},
    {id: 3, icon: <ReadOutlined style={{fontSize: 18}} />},
    {id: 4, icon: <ShoppingCartOutlined style={{fontSize: 18}} />},
    {id: 5, icon: <PieChartOutlined style={{fontSize: 18}} />},
    {id: 6, icon: <ContainerOutlined style={{fontSize: 18}} />},
    {id: 7, icon: <LogoutOutlined style={{fontSize: 18}} />},
];

const Navigation: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const showCollapsed = () => {
        setCollapsed(false);
    };

    const hideCollapsed = () => {
        setCollapsed(true);
    };

    const logoutHandler = () => {
        dispatch(AuthActionCreators.logout());
        history.push("/login");
    };

    return (
        <div
            style={{width: 200, position: "fixed", left: 0, top: 0}}
            onMouseEnter={showCollapsed}
            onMouseLeave={hideCollapsed}
        >
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{height: "100vh"}}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                {privateRoutes &&
                    privateRoutes.map((route: IRoutes, index: number) => (
                        <Menu.Item
                            key={route.path + index}
                            icon={menuIcons[index].icon}
                        >
                            <Link to={route.path}>{route.name}</Link>
                        </Menu.Item>
                    ))}
                <Menu.Item
                    key={"/logout"}
                    icon={menuIcons[6].icon}
                    onClick={logoutHandler}
                >
                    Выход
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navigation;
