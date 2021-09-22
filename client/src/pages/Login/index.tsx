import React from "react";
import {useDispatch} from "react-redux";
import {Row, Col, Card} from "antd";
import {AuthActionCreators} from "../../core/store/reducers/auth/action-creators";
import Formik from "../../components/smart/Formik";
import {IUser} from "../../core/models/IUser";

const Login = () => {
    const dispatch = useDispatch();

    const submit = (values: IUser) => {
        dispatch(AuthActionCreators.login(values.email, values.password));
    };

    return (
        <Card title="Войти в систему" bordered={true} style={{width: 700}}>
            <Row justify="center">
                <Col span={24}>
                    <Formik onFinish={submit} buttonTitle={"Войти"} />
                </Col>
            </Row>
        </Card>
    );
};

export default Login;
