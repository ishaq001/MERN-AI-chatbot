import express from "express"
import { config } from "dotenv"
import morgan from "morgan"
import appRouter from "./routes/index.js"

const app = express()
config()

// middleware
app.use(express.json())

// remove this in production
app.use(morgan("dev"))

app.use("/api/v1", appRouter)

export default app
