import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { initDB } from "./db.js";
import { listUsers } from "./src/controllers/userController.js";

config();
const app = express();
const isProd = process.env.NODE_ENV === "production";

app.use(cors({
    origin: isProd ? (process.env.ALLOW_ORIGIN || "").split(",") : true,
    credentials: true,
}));
app.use(express.json());

await initDB(); // 先连库再挂路由

app.get("/api/users", listUsers);


const port = (isProd ? process.env.PORT : 8000) || 8000;
app.set("trust proxy", 1);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port} (${isProd ? "prod" : "dev"})`);
});
