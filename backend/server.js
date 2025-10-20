import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { MongoClient } from "mongodb";

config();
const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);
let col;

async function init() {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    col = db.collection(process.env.COLL_NAME);
    console.log("Mongo connected");
}
init().catch(err => {
    console.error("Mongo connect failed:", err);
    process.exit(1);
});

app.get("/api/items", async (req, res) => {
    try {
        const items = await col.find({}).limit(3).toArray();
        res.json(items);
        console.log("items: ",items)
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get("/health", (_req, res) => res.send("ok"));

const port = process.env.PORT || 3001;
console.log("Port: ",port)
app.listen(port, () => console.log(`Listening to http://localhost:${port}`));
