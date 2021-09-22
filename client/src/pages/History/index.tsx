import React from "react";
import {Row, Col, Button, Typography, Table} from "antd";
import {FaExternalLinkAlt} from "react-icons/fa";

const columns: any = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
        sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        defaultSortOrder: "descend",
        sorter: (a: any, b: any) => a.age - b.age,
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
        onFilter: (value: any, record: any) =>
            record.address.indexOf(value) === 0,
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text: string) => (
            <Button type="primary" key={text}>
                <FaExternalLinkAlt />
            </Button>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
    },
];

const History = () => {
    const onChange = (
        pagination: any,
        filters: any,
        sorter: any,
        extra: any,
    ) => {
        console.log("params", pagination, filters, sorter, extra);
    };
    return (
        <>
            <Row justify="space-between" align="middle">
                <Col>
                    <Typography.Title>История заказов</Typography.Title>
                </Col>
                <Col>
                    <Button type="primary">Завершить</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <Table
                        style={{minWidth: 1200}}
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </>
    );
};

export default History;
