"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = void 0;
const Order = require("../models/Order");
const errorHandler = require("../utils/errorHandler");
// GET localhost:5000/api/order?offset=2&limit=5
const getAll = async function (req, res) {
    const query = {
        user: req.user.id,
    };
    // Дата старта
    if (req.query.start) {
        query.date = {
            // больше или равно
            $gte: req.query.start,
        };
    }
    // Дата конца
    if (req.query.end) {
        if (!query.date) {
            query.date = {};
        }
        query.date["$lte"] = req.query.end;
    }
    if (req.query.order) {
        query.order = +req.query.order;
    }
    try {
        const { offset, limit } = req.query;
        const orders = await Order.find(query)
            .sort({ date: -1 })
            .skip(+offset)
            .limit(+limit);
        res.status(200).json(orders);
    }
    catch (err) {
        errorHandler(res, err);
    }
};
exports.getAll = getAll;
const create = async function (req, res) {
    try {
        const lastOrder = await Order.findOne({ user: req.user.id }).sort({
            date: -1,
        });
        const maxOrder = lastOrder ? lastOrder.order : 0;
        const order = await new Order({
            list: req.body.list,
            user: req.user.id,
            order: maxOrder + 1,
        }).save();
        res.status(201).json(order);
    }
    catch (err) {
        errorHandler(res, err);
    }
};
exports.create = create;
