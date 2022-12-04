import Express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = Express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get("/:id", see);

export default userRouter;
