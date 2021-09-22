"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        default: "",
    },
    user: {
        ref: "users",
        type: mongoose_1.Schema.Types.ObjectId,
    },
});
exports.default = mongoose_1.model("categories", categorySchema);
