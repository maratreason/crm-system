import React, {FC} from "react";
import {Form, Input, Button} from "antd";
import {rules} from "../../../core/utils/rules";

const LoginForm: FC<any> = ({buttonTitle, onSubmit}) => {
    return (
        <>
            <Form onFinish={onSubmit}>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[rules.required("Email не должен быть пустым")]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="password"
                    name="password"
                    rules={[rules.required("Пароль не должен быть пустым")]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        {buttonTitle}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;
