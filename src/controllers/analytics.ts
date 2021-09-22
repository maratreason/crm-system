import {RequestHandler} from "express";

export const overview: RequestHandler = function (req, res) {
    res.status(200).json({});
};

export const analytics: RequestHandler = function (req, res) {
    res.status(200).json({});
};
