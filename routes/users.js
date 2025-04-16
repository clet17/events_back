import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getAllUsers, getUserById, getUserProfile } from "../controllers/usersController.js";

const userRouter = Router()

userRouter.get('/profile', authMiddleware , getUserProfile )

userRouter.get('/users', getAllUsers)
userRouter.get('/user/:id', getUserById)

export default userRouter