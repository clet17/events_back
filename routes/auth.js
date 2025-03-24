import { Router } from "express";
import { createUser, loginUser } from "../controllers/authController.js";

import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authRouter = Router()


authRouter.post('/register', createUser)

authRouter.post('/login', loginUser)

export default authRouter