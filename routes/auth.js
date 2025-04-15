import { Router } from "express";
import { createUser, loginUser } from "../controllers/authController.js";

import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { upload } from "../middlewares/uploadFile.js";

const authRouter = Router()


authRouter.post('/register', upload.single('image'), createUser)

authRouter.post('/login', loginUser)

export default authRouter