"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const Header_1 = __importDefault(require("./components/smart/Header"));
const Table_1 = __importDefault(require("./components/UI/Table"));
function App() {
    const [rows, setRows] = react_1.useState(3);
    return (<>
            <Header_1.default />
            <antd_1.Row>
                <antd_1.Col xs={24} md={{ span: 18, offset: 3 }}>
                    <antd_1.Typography.Title level={4}>Количество покемонов на страницу:</antd_1.Typography.Title>
                    <antd_1.Slider min={1} max={10} defaultValue={rows} onChange={setRows}/>
                    <Table_1.default rows={rows}/>
                </antd_1.Col>
            </antd_1.Row>
        </>);
}
exports.default = App;
