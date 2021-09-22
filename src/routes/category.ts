import {Router} from "express";
import multer from "../middleware/upload";
import * as controller from "../controllers/category";
const passport = require("passport");
const router = Router();

router.get(
    "/",
    passport.authenticate("jwt", {session: false}),
    controller.getAll,
);

router.get("/:id", passport.authenticate("jwt", {session: false}), controller.getById);
router.delete("/:id", passport.authenticate("jwt", {session: false}), controller.removeById);
router.post("/", passport.authenticate("jwt", {session: false}), multer.single("image"), controller.create);
router.patch("/:id", passport.authenticate("jwt", {session: false}), multer.single("image"), controller.update);

export default router;
