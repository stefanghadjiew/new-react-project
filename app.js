import express from 'express'
import cors from 'cors'
import { errorHandler } from './errorHandler.js'
import router from './routes/index.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/v1/api', router)
app.use(errorHandler)

export default app
