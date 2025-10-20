import { getCol } from "../../db.js";

export async function listUsers(_req, res) {
    try {
        const users = await getCol()
            .find({}, { projection: { /* 按需投影 */ } })
            .toArray();
        // console.log("users", users)
        res.json(users);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}