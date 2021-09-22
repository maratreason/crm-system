"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport = require("passport");
const keys_1 = require("./config/keys");
const auth_1 = __importDefault(require("./routes/auth"));
const analytics_1 = __importDefault(require("./routes/analytics"));
const category_1 = __importDefault(require("./routes/category"));
const order_1 = __importDefault(require("./routes/order"));
const position_1 = __importDefault(require("./routes/position"));
const passport_1 = __importDefault(require("./middleware/passport"));
const app = express_1.default();
mongoose_1.default
    .connect(keys_1.keys.mongoURI)
    .then(() => console.log("Соединение прошло успешно"))
    .catch((error) => console.log(error));
app.use(passport.initialize());
passport_1.default(passport);
app.use(require("morgan")("dev"));
app.use("/uploads", express_1.default.static("uploads"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(require("cors")());
app.use("/api/auth", auth_1.default);
app.use("/api/analytics", analytics_1.default);
app.use("/api/category", category_1.default);
app.use("/api/order", order_1.default);
app.use("/api/position", position_1.default);
exports.default = app;
