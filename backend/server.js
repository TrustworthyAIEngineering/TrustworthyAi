import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

config();

const app = express();
const isProd = process.env.NODE_ENV === "production";

// 精确放开前端域名：例如 https://yourdomain.com
app.use(cors({
    origin: isProd ? (process.env.ALLOW_ORIGIN || "").split(",") : true,
    credentials: true,
}));
app.use(express.json());

// 连接字符串放到环境变量（dev/prod 各一份）
const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

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

app.get("/api/items", async (_req, res) => {
    try {
        const items = await col.find({}, { projection: { /* 按需投影 */ } })
            .limit(3).toArray();
        res.json(items);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get("/health", (_req, res) => res.send("ok"));

// 线上用平台注入的 PORT；监听 0.0.0.0
const port = process.env.PORT || 3001;
app.set("trust proxy", 1); // 反向代理/HTTPS 场景建议开启
app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port} (${isProd ? "prod" : "dev"})`);
});
