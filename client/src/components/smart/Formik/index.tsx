import React, {FC} from "react";
import {
    Formik as FormikForm,
    Field,
    Form,
    ErrorMessage,
} from "formik";
import * as Yup from "yup";
import {Input, Button, Typography, Row} from "antd";

interface FormikValidate {
    onFinish?: any;
    email?: string;
    password?: string;
    buttonTitle?: string;
}

const Formik: FC<FormikValidate> = ({onFinish, buttonTitle}) => {
    const initValues: FormikValidate = {email: "", password: ""};
    return (
        <FormikForm
            initialValues={initValues}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Некорректный Email")
                    .required("Это поле обязательно для заполнения"),
                password: Yup.string()
                    .min(4, "Пароль должен иметь не менее 4 символов")
                    .required("Это поле обязательно для заполнения"),
            })}
            onSubmit={(values, {setSubmitting}) => {
                onFinish(values);
            }}
        >
            <Form>
                <Row style={{marginBottom: 10}}>
                    <Field
                        name="email"
                        type="email"
                        as={Input}
                        placeholder="Введите Email"
                    />
                    <ErrorMessage
                        name="email"
                        render={(errorMessage: string) => (
                            <Typography.Text type="danger" style={{fontSize: 13, fontWeight: 500}}>
                                {errorMessage}
                            </Typography.Text>
                        )}
                    />
                </Row>

                <Row style={{marginBottom: 10}}>
                    <Field
                        name="password"
                        type="password"
                        as={Input}
                        placeholder="Введите Пароль"
                    />
                    <ErrorMessage
                        name="password"
                        render={(errorMessage: string) => (
                            <Typography.Text type="danger" style={{fontSize: 13, fontWeight: 500}}>
                                {errorMessage}
                            </Typography.Text>
                        )}
                    />
                </Row>

                <Row>
                    <Button
                        htmlType="submit"
                        type="primary"
                    >
                        {buttonTitle}
                    </Button>
                </Row>
            </Form>
        </FormikForm>
    );
};

export default Formik;
