import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Row, Col, Card} from "antd";
import {AuthActionCreators} from "../../core/store/reducers/auth/action-creators";
import Formik from "../../components/smart/Formik";
import {IUser} from "../../core/models/IUser";

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = (values: IUser) => {
        dispatch(AuthActionCreators.register(values.email, values.password));
        history.push("/login");
    };

    return (
        <Card title="Регистрация" bordered={true} style={{width: 700}}>
            <Row justify="center">
                <Col span={24}>
                    <Formik
                        onFinish={submit}
                        buttonTitle={"Зарегистрироваться"}
                    />
                </Col>
            </Row>
        </Card>
    );
};

export default Register;
