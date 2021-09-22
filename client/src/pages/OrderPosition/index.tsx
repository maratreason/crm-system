import React from 'react'
import {Row, Col, Typography, Button, Table, Input} from "antd";
import {FaChevronRight} from "react-icons/fa";

const columns: any = [
    {
        title: "Название",
        dataIndex: "name",
        onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
        sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
        title: "Стоимость",
        dataIndex: "cost",
        defaultSortOrder: "descend",
        sorter: (a: any, b: any) => a.cost - b.cost,
    },
    {
        title: "Количество",
        dataIndex: "quantity",
        onFilter: (value: any, record: any) =>
            record.address.indexOf(value) === 0,
        render: (value: number) => (
            <Input type="number" style={{width: "20%"}} value={value} />
        ),
    },
    {
        title: 'Действия',
        key: 'action',
        render: () => (
          <Button type="primary">Добавить</Button>
        ),
      },
];

const data = [
    {
        name: "Coffee",
        cost: 12.00,
        quantity: 1,
    },
    {
        name: "Jim Green",
        cost: 10.00,
        quantity: 2,
    },
    {
        name: "Joe Black",
        cost: 9.40,
        quantity: 1,
    },
];

const OrderPosition = () => {
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
                    <Typography.Title>Заказы <FaChevronRight style={{fontSize: 24, marginTop: 14}} /> Добавить продукцию</Typography.Title>
                </Col>
                <Col>
                    <Button type="primary">Завершить</Button>
                </Col>
            </Row>
            <Row justify="start" gutter={[16, 16]}>
                <Col>
                    <Table
                        style={{minWidth: 1200}}
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </>
    )
}

export default OrderPosition
