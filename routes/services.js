import { Router } from "express";
import { createService, getAllServices } from "../controllers/servicesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)
servicesRouter.post('/services', authMiddleware, createService)


export default servicesRouter