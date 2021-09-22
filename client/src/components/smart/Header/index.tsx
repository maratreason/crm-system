import React, {FC} from "react";
import {Layout, Row, Menu, Typography} from "antd";
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <Layout.Header>
            <Row justify="space-between">
                <Typography.Link style={{color: "#fff", fontSize: "2rem"}}>CRM</Typography.Link>
                <Menu theme="dark" mode="horizontal" selectable={false} disabledOverflow={true}>
                    <Menu.Item
                        key="1"
                    >
                        <Link to="/login">Вход</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                    >
                        <Link to="/register">Регистрация</Link>
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Header;
