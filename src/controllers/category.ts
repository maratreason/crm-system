import {RequestHandler, Request} from "express";
import {
    IRequestFile,
    IRequestUser,
} from "./types/controllerTypes";
const Category = require("../models/Category");
const Position = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

export const getAll: RequestHandler = async function (req: IRequestUser, res) {
    try {
        const user = req.user.id;
        const categories = await Category.find({user});
        res.status(200).json(categories);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const getById: RequestHandler = async function (req, res) {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.status(200).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const removeById: RequestHandler = async function (req, res) {
    try {
        const {id} = req.params;
        // Удаляем категории и позиции, которые относились к этой категории
        await Category.remove({_id: id});
        await Position.remove({category: id});
        res.status(204).json({
            message: "Категория удалена",
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

export const create: RequestHandler = async function (
    req: IRequestUser & IRequestFile,
    res,
) {
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : "",
    });

    try {
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const update: RequestHandler = async function (
    req: IRequestFile & IRequestUser,
    res,
) {
    const updated: any = {
        name: req.body.name,
    };

    if (req.file) {
        updated.imageSrc = req.file.path;
    }

    try {
        const {id} = req.params;
        const category = await Category.findOneAndUpdate(
            {_id: id},
            {$set: updated},
            {new: true},
        );
        res.status(200).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};
