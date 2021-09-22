import React from "react";
import {Row, Col, Space} from "antd";
import Header from "./components/smart/Header";
import AppRouter from "./routes/AppRouter";
import {privateRoutes, publicRoutes} from "./routes";
import Navigation from "./components/smart/Navigation";
import {useTypedSelector} from "./core/hooks/useTypedSelector";

function App() {
    const {token} = useTypedSelector((state) => state.auth);
    return (
        <>
            {token ? (
                <>
                    <Row style={{background: "#ececec", minHeight: "100vh", height: "100%"}}>
                        <Col xs={4} md={4}>
                            <Navigation />
                        </Col>
                        <Col xs={18} md={18}>
                            <Space align="center" style={{margin: "50px 0"}}>
                                <AppRouter routes={privateRoutes} />
                            </Space>
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                    <Header />
                    <Row 
                        style={{
                            background: "#ececec", minHeight: "calc(100vh - 65px)", height: "100%",
                            display: "flex", alignItems: "center",
                        }}
                        >
                        <Col md={{span: 12, offset: 6}} style={{marginTop: -100}}>
                            <Space align="center">
                                <AppRouter routes={publicRoutes} />
                            </Space>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
}

export default App;
