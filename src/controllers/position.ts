import {RequestHandler} from "express";
import { IRequestUser } from "./types/controllerTypes";
const Position = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

export const getByCategoryId: RequestHandler = async function (req: IRequestUser, res) {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id,
        });
        res.status(200).json(positions);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const create: RequestHandler = async function (req: IRequestUser, res) {
    try {
        const {name, cost, category} = req.body;
        const user = req.user.id;

        const position = await new Position({
            name,
            cost,
            category,
            user,
        }).save();

        res.status(201).json(position);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const remove: RequestHandler = async function (req, res) {
    try {
        const {id} = req.params;

        await Position.remove({
            _id: id,
        });

        res.status(200).json({
            message: "Позиция была удалена",
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

export const update: RequestHandler = async function (req, res) {
    try {
        const {id} = req.params;

        const position = await Position.findOneAndUpdate(
            {_id: id},
            {$set: req.body},
            {new: true},
        );
        res.status(200).json(position);
    } catch (err) {
        errorHandler(res, err);
    }
};
