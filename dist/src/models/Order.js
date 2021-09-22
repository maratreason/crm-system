"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    data: {
        type: Date,
        default: Date.now,
    },
    order: {
        type: Number,
        required: true,
    },
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            },
        }
    ],
    user: {
        ref: "users",
        type: mongoose_1.Schema.Types.ObjectId,
    },
});
exports.default = mongoose_1.model("orders", orderSchema);
