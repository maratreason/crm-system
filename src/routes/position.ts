import express from "express";
const passport = require("passport");
import * as controller from "../controllers/position";
const router = express.Router();

router.get("/:categoryId", passport.authenticate("jwt", {session: false}), controller.getByCategoryId);
router.post("/", passport.authenticate("jwt", {session: false}), controller.create);
router.delete("/:id", passport.authenticate("jwt", {session: false}), controller.remove);
router.patch("/:id", passport.authenticate("jwt", {session: false}), controller.update);

export default router;
