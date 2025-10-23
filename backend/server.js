import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { initDBs } from "./db.js";
import { listUsers } from "./src/controllers/userController.js";
import {getAllEvents, loadWorkshopContent} from "./src/controllers/eventController.js";
import cron from "node-cron";
import axios from "axios";


          // 本地默认

config();
const app = express();
const isProd = process.env.NODE_ENV === "production";

export const API_BASE = isProd? "https://trustworthyai-5avd.onrender.com":"http://localhost:8000";

app.use(cors({
    origin: isProd ? (process.env.ALLOW_ORIGIN || "").split(",") : true,
    credentials: true,
}));
app.use(express.json());

await initDBs({ dbNames: ["Events", "User"] });


app.get("/api/healthcheck", (req, res) => {
    res.status(200).send("OK");
});

app.get("/api/users", listUsers);
app.get("/api/workshops/:_destination_id", loadWorkshopContent);
app.get("/api/events/all",getAllEvents)

const port = (isProd ? process.env.PORT : 8000) || 8000;
app.set("trust proxy", 1);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port} (${isProd ? "prod" : "dev"})`);
});

cron.schedule("*/14 * * * *", async () => {
    try {
        await axios.get(`${API_BASE}/api/healthcheck`); // 换成你后端真实地址
        console.log("Healthcheck pinged");
    } catch (err) {
        console.error("Healthcheck failed:", err.message);
    }

});
