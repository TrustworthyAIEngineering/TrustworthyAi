import { getCollection } from "../../db.js";
import {ObjectId} from "mongodb";

export async function loadWorkshopContent(req, res) {
    try {
        const { _destination_id } = req.params;
        if (!_destination_id) return res.status(400).json({ error: "_destination_id required" });

        const col = getCollection("Events", "workshops");
        if (!ObjectId.isValid(_destination_id)) {
            // 非法 ObjectId，可按需要返回 400 或退回用 pk/wid 查询
            throw new Error("invalid ObjectId");
        }
        const oid = new ObjectId(_destination_id);

        const doc = await col.findOne(
            { _id: oid },
            { projection: { _id: 0 } } // 不返回 _id
        );
        if (!doc) return res.status(404).json({ error: "Workshop _destination_id not found" });

        return res.json(doc);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "server_error" });
    }
}
export async function getAllEvents(req, res) {
    try {
        const col = getCollection("Events", "all");
        const doc = await col.find({},{ projection: { /* 按需投影 */ } }).toArray();
        // console.log(res.json(doc))
        res.json(doc);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "server_error" });
    }
}

// export async function getWorkshopIDbyEventID(req, res) {
//     try {
//         const col = getCollection("Events", "all");
//         const doc = await col.findOne({},{ projection: { /* 按需投影 */ } }).toArray();
//         // console.log(res.json(doc))
//         res.json(doc);
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ error: "server_error" });
//     }
// }