import { Router } from "express";
import { createService, getAllServices, getServicesById } from "../controllers/servicesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadFile.js";


const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)
servicesRouter.get('/service/:id', getServicesById)

servicesRouter.post('/services', upload.single('image'), authMiddleware, createService)


export default servicesRouter