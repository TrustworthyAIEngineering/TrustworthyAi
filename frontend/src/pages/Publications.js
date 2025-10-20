import React, {useEffect, useState} from "react";
import "../styles/Publication.css"
import hm_c_avatar from "../assets/general/huaming.jpg"
import {get_huaming_chen} from "./FetchPublication/all";



function CollapsibleAuthor({ author }) {
    const [open, setOpen] = useState(false);

    return (
        <div id = "colla" className="card mb-3 w-100" style={{ maxWidth: 720 }}>
            <button
                className="btn text-start p-3 d-flex align-items-center gap-3"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={`refs-${author.id}`}
            >
                <img
                    src={author.avatar}
                    alt={author.name}
                    className="rounded-circle border"
                    width="48"
                    height="48"
                />
                <div className="flex-grow-1">
                    <div className="fw-semibold">{author.name}</div>
                    <div className="text-muted small">{author.affiliation}</div>
                </div>
                <span className="ms-auto small">{open ? "▾" : "▸"}</span>
            </button>

            <div
                id={`refs-${author.id}`}
                className={`collapse ${open ? "show" : ""}`}
            >
                <div className="card-body pt-0" style={{maxHeight: "50vh", overflowY: "auto"}}>
                    <ul className="list-group list-group-flush">
                        {author.references.map((r, idx) => (
                            <li key={idx} className="list-group-item">
                                {idx+1}{". "}{r}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}



function Publications() {
    const [hm_c_pub, set_hm_c_pub] = useState(["Loading....."])


    const DUMMY_AUTHORS = [
        {
            id: "a1",
            name: "Huaming Chen",
            affiliation: "Senior Lecturer",
            avatar: hm_c_avatar,
            references: hm_c_pub,
        },

    ];

    useEffect(( () => {
     fetch("http://localhost:10000/api/items")
        .then(async r => {
            const json = await r.json();       // 关键：解析 JSON
            console.log("items:", json);         // 现在能看到集合里的具体值
        })
        .catch(console.error);
    }))

    useEffect(() => {



        let alive = true;
        (async () => {
            try {
                const data = await get_huaming_chen(); // 仅挂载时调用一次
                set_hm_c_pub(data)
                // if (alive) setRefs(data);
                // console.log(data)
            } catch (e) {
                // if (alive) setErr(e.message || String(e));
                set_hm_c_pub(["Error"])
                console.log(e)
            }
        })();
        return () => { alive = false; };
    }, []);

    return (
        <>

            <div
                id="whole"
                className="d-flex flex-column justify-content-start align-items-center min-vh-100 w-100 p-3"

            >
                <div style={{marginTop: "20vh"}}></div>
                <div className="w-100 d-flex flex-column align-items-center">
                    {DUMMY_AUTHORS.map((a) => (
                        <CollapsibleAuthor key={a.id} author={a} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Publications;
