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

export async function openAdminLogin(req, res) {
    try {
        const { _userinput } = req.params;

        if ( _userinput.replace("trust","")!== process.env.ADMIN_GATEWAY_KEY) {
            
            return res.status(403).json({ error: "forbidden" });
        }else{
            console.log(_userinput)
            res.status(200).json();
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
        
    }
}