import React, {FC} from "react";
import {Typography, Button, Row, Col, Card} from "antd";

const Order: FC = () => {
    return (
        <>
            <Row justify="space-between" align="middle">
                <Col>
                    <Typography.Title>Заказы</Typography.Title>
                </Col>
                <Col>
                    <Button type="primary">Завершить</Button>
                </Col>
            </Row>
            <Row justify="start" gutter={[16, 16]}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example1" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example2" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example3" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example4" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example5" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Order;
