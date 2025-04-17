import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getAllUsers, getUserById, getUserProfile } from "../controllers/usersController.js";
import checkAdmin from "../middlewares/checkAdmin.js";

const userRouter = Router()

userRouter.get('/profile', authMiddleware , getUserProfile )

userRouter.get('/users', authMiddleware, checkAdmin ,getAllUsers)
userRouter.get('/user/:id', getUserById)

export default userRouter