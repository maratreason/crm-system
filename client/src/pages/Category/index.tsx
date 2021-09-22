import React from "react";
import {Typography, Row, Col, Collapse, Button} from "antd";

const Category = () => {
    function callback(key: any) {
        console.log(key);
      }
      
      const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      `;

    return (
        <>
            <Row justify="space-between" align="middle">
                <Col>
                    <Typography.Title>Категории</Typography.Title>
                </Col>
                <Col>
                    <Button type="primary">Добавить категорию</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <Collapse defaultActiveKey={['1']} onChange={callback} style={{minWidth: 600}}>
                        <Collapse.Panel header="This is panel header 1 long text" key="1">
                        <p>{text}</p>
                        </Collapse.Panel>
                        <Collapse.Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Collapse.Panel>
                        <Collapse.Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                        </Collapse.Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
};

export default Category;
