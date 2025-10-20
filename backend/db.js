import { MongoClient, ServerApiVersion } from "mongodb";



let col;

export async function initDB() {
    const client = new MongoClient(process.env.MONGODB_URI, {
        serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    });
    try {
        await client.connect();

        const db = client.db(process.env.DB_NAME);
        col = db.collection(process.env.COLL_NAME);
        console.log("Mongo connected");
    } catch (err) {
        console.error("Mongo connect failed:", err);
        process.exit(1);
    }
}

export function getCol() {
    if (!col) throw new Error("DB not initialized");
    return col;
}
