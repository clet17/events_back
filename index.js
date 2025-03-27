import express from 'express'
import 'dotenv/config'
import connectDB from './database/client.js'
import authRouter from './routes/auth.js'
import eventRouter from './routes/events.js'
import cors from 'cors'
import servicesRouter from './routes/services.js'
import { authMiddleware } from './middlewares/authMiddleware.js'
import userRouter from './routes/users.js'

const app = express()

const PORT = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api', authRouter, eventRouter, servicesRouter, userRouter)


app.get('/', (req, res) => {
    res.send("bienvenue ici")
})

connectDB()
app.listen(PORT, () => {
    console.log(`Le server tourne sur le port ${PORT}`)
})

