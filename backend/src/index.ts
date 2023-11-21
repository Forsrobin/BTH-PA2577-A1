import 'dotenv/config'
import PostRouter from './routes/post'
import express from 'express'

import { envValidator } from './helper/envValidator'
import { PrismaClient } from '@prisma/client'

import cors from 'cors'

const app = express()

export const prisma = new PrismaClient()

const main = async () => {
  await envValidator(process.env)

  const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
  }

  app.use(express.json())
  app.use(cors(corsOptions))

  // Setup routes
  app.use('/blog', PostRouter)

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
  })
}

main()
