import {Router} from "express";
import * as controller from "../controllers/order";
const passport = require("passport");
const router = Router();

router.get("/", passport.authenticate("jwt", {session: false}), controller.getAll);
router.post("/", passport.authenticate("jwt", {session: false}), controller.create);

export default router;
