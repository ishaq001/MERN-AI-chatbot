import express from "express"
import { config } from "dotenv"
import morgan from "morgan"
import appRouter from "./routes/index.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
config()

// middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
// remove this in production
app.use(morgan("dev"))

app.use("/api/v1", appRouter)

export default app
