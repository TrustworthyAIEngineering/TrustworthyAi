import { getCollection } from "../../db.js";

export async function listUsers(_req, res) {
    try {
        const users = getCollection("Users", "users");
        const results = await users.find({}, { projection: { /* 按需投影 */ } })
            .toArray();
        // console.log("users", users)
        res.json(results);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}