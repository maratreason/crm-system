"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const moment = require("moment");
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads/");
    },
    filename(req, file, cb) {
        const date = moment().format("DDMMYYYY-HHmmss_SSS");
        cb(null, `${date}-${file.originalname}`);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png"
        || file.mimetype === "image/jpeg"
        || file.mimetype === "image/jpg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
// Лимит на размер для картинок
const limits = {
    fileSize: 1024 * 1024 * 5,
};
exports.default = multer_1.default({
    storage,
    fileFilter,
    limits,
});
