"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const data_1 = require("../../../db/data");
const antd_1 = require("antd");
const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Number",
        dataIndex: "number",
        key: "number",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <antd_1.Typography.Text copyable>{text}</antd_1.Typography.Text>
    },
    {
        title: "Class",
        dataIndex: "classification",
        key: "class",
        filters: [
            {
                text: "Pin Pokemon",
                value: "Pin Pokemon",
            },
            {
                text: "Lake Pokemon",
                value: "Lake Pokemon",
            },
            {
                text: "Some Pokemon",
                value: "Some Pokemon",
            },
        ],
        onFilter: (value, item) => item.classification.includes(value)
    },
    {
        title: "Rate",
        dataIndex: "fleeRate",
        key: "fleeRate",
        sorter: (a, b) => a.fleeRate - b.fleeRate
    },
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: (image) => <antd_1.Image src={image} alt="pokemon" width={150}/>
    },
];
const dataSource = data_1.data.map((item) => ({ ...item, key: item.id }));
const TableComponent = ({ rows = 3 }) => {
    return <antd_1.Table columns={columns} dataSource={dataSource} pagination={{
        // defaultPageSize: 3,
        // showSizeChanger: true,
        // pageSizeOptions: ["3", "5"]
        pageSize: rows
    }}></antd_1.Table>;
};
exports.default = TableComponent;
