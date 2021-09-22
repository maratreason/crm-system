import {Request} from "express";
import multer, {DiskStorageOptions, Options, FileFilterCallback} from "multer";
const moment = require("moment");

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads/");
    },
    filename(req, file, cb) {
        const date = moment().format("DDMMYYYY-HHmmss_SSS");
        cb(null, `${date}-${file.originalname}`);
    }
} as DiskStorageOptions);

const fileFilter = (req: Request, file: any, cb: FileFilterCallback) => {
    if (
        file.mimetype === "image/png"
        || file.mimetype === "image/jpeg"
        || file.mimetype === "image/jpg"
        ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
// Лимит на размер для картинок
const limits = {
    fileSize: 1024 * 1024 * 5,
};

export default multer({
    storage,
    fileFilter,
    limits,
} as Options);
