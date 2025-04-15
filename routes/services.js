import { Router } from "express";
import { createService, getAllServices, getServicesById } from "../controllers/servicesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)
servicesRouter.get('/services/:id', getServicesById)

servicesRouter.post('/services', authMiddleware, createService)


export default servicesRouter