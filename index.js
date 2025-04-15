import express from 'express'
import 'dotenv/config'
import connectDB from './database/client.js'
import authRouter from './routes/auth.js'
import eventRouter from './routes/events.js'
import cors from 'cors'
import servicesRouter from './routes/services.js'
import { authMiddleware } from './middlewares/authMiddleware.js'
import userRouter from './routes/users.js'
import fs from 'fs'
import path from 'path'

const app = express()

const PORT = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api', authRouter, eventRouter, servicesRouter, userRouter)
app.use('/images', express.static('public/images'))


app.get('/', (req, res) => {
    res.send("bienvenue ici")
})

app.get('/public/images/:filename', (req, res) => {
    const file = `public/images/${req.params.filename}`;
    res.sendFile(path.resolve(file));
    });

app.get('/images', (req, res) => {
    fs.readdir('public/images', (err, files) => {
        if (err) {
        return res.status(500).send({ error: err });
        }
        res.send({ images: files });
    });
});

connectDB()
app.listen(PORT, () => {
    console.log(`Le server tourne sur le port ${PORT}`)
})

