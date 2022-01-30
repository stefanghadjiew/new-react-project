import express from 'express'
import cors from 'cors'
import { errorHandler } from './errorHandler.js'
import router from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/v1/api', router)
app.use(errorHandler)

export default app
