import { MongoClient, ServerApiVersion } from "mongodb";

const conns = {}; // { Events: Db, User: Db }
let client;

export async function initDBs({
                                  uri = process.env.MONGODB_URI,
                                  dbNames = ["Events", "User"],
                              } = {}) {
    client = new MongoClient(uri, {
        serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    });
    await client.connect();
    for (const name of dbNames) conns[name] = client.db(name);
    console.log(`Mongo connected. DBs: ${dbNames.join(", ")}`);
}

export function getDb(name) {
    const db = conns[name];
    if (!db) throw new Error(`DB not initialized: ${name}`);
    return db;
}

export function getCollection(dbName, collName) {
    return getDb(dbName).collection(collName);
}

export async function closeAll() {
    if (client) await client.close();
}