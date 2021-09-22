import React, {FC} from "react";
import {Row, Col, Typography, Card} from "antd";

const Overview: FC = () => {
    return (
        <>
            <Typography.Title>Overview Page</Typography.Title>
            <Row gutter={16}>
                <Col span={12}>
                    <Card
                        title="Card title"
                        bordered={false}
                    >
                        <p>Card content Lorem, ipsum. Lorem ipsum dolor sit amet.</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="Card title"
                        bordered={false}
                        style={{minWidth: "600px"}}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Overview;
