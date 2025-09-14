import express, { type Request, type Response} from "express"
import router from "./routes/routes"
import cors from "cors"

function createApp(){
    const app = express()

    app.use(express.json()) 
    app.use("/api", router)
    app.use(cors())

    const corsOptions = {
        origin:"*",
        methods: ["GET"]
    }

    return app
}

export default createApp