"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.remove = exports.create = exports.getByCategoryId = void 0;
const Position = require("../models/Position");
const errorHandler = require("../utils/errorHandler");
const getByCategoryId = async function (req, res) {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id,
        });
        res.status(200).json(positions);
    }
    catch (err) {
        errorHandler(res, err);
    }
};
exports.getByCategoryId = getByCategoryId;
const create = async function (req, res) {
    try {
        const { name, cost, category } = req.body;
        const user = req.user.id;
        const position = await new Position({
            name,
            cost,
            category,
            user,
        }).save();
        res.status(201).json(position);
    }
    catch (err) {
        errorHandler(res, err);
    }
};
exports.create = create;
const remove = async function (req, res) {
    try {
        const { id } = req.params;
        await Position.remove({
            _id: id,
        });
        res.status(200).json({
            message: "Позиция была удалена",
        });
    }
    catch (err) {
        errorHandler(res, err);
    }
};
exports.remove = remove;
const update = async function (req, res) {
    try {
        const { id } = req.params;
        const position = await Position.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true });
        res.status(200).json(position);
    }
    catch (err) {
        errorHandler(res, err);
    }
};
exports.update = update;
