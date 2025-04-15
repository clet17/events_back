import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const eventRouter = Router()

eventRouter.get('/events', authMiddleware,(req, res) => {
    // console.log(req.user)
    res.send('Bienvenue sur mes events')
})

export default eventRouter