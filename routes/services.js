import { Router } from "express";
import { createService, deleteServiceByID, getAllServices, getServicesById } from "../controllers/servicesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadFile.js";
import checkAdminOrOwner from "../middlewares/checkAdminOrOwner.js";


const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)
servicesRouter.get('/service/:id', getServicesById)

servicesRouter.post('/services', upload.single('image'), authMiddleware, createService)

servicesRouter.delete('/service/:id',authMiddleware , checkAdminOrOwner , deleteServiceByID)

export default servicesRouter