import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { initDBs } from "./db.js";
import { listUsers } from "./src/controllers/userController.js";
import {getAllEvents, loadWorkshopContent} from "./src/controllers/eventController.js";

config();
const app = express();
const isProd = process.env.NODE_ENV === "production";

app.use(cors({
    origin: isProd ? (process.env.ALLOW_ORIGIN || "").split(",") : true,
    credentials: true,
}));
app.use(express.json());

await initDBs({ dbNames: ["Events", "User"] });

app.get("/api/users", listUsers);
app.get("/api/workshops/:_destination_id", loadWorkshopContent);
app.get("/api/events/all",getAllEvents)

const port = (isProd ? process.env.PORT : 8000) || 8000;
app.set("trust proxy", 1);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port} (${isProd ? "prod" : "dev"})`);
});
