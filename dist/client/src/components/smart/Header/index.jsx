"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Header = () => {
    return (<>
            <antd_1.PageHeader className="site-page-header" onBack={() => null} title="Ant design text" subTitle="This is a subtitle"/>
            <antd_1.Divider />
        </>);
};
exports.default = Header;
