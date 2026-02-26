import React, {useEffect, useState} from "react";
import "../styles/Publication.css"
import hm_c_avatar from "../assets/general/huaming.jpg"
import {get_huaming_chen} from "./FetchPublication/all";
import {API_BASE} from "./config";



function CollapsibleAuthor({ author }) {
    const [open, setOpen] = useState(false);

    return (
        <div id="colla" className="card mb-3 w-100" style={{ maxWidth: 960 }}>
            <button
                className="btn text-start p-3 d-flex align-items-center gap-3 author-toggle"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={`refs-${author.id}`}
            >
                <div className="author-avatar">
                    <img
                        src={author.avatar}
                        alt={author.name}
                        width="52"
                        height="52"
                    />
                </div>
                <div className="flex-grow-1">
                    <div className="fw-semibold author-name">{author.name}</div>
                    <div className="text-muted small">{author.affiliation}</div>
                </div>
                <span className="ms-auto small author-arrow">{open ? "▾" : "▸"}</span>
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
            affiliation: "Supervisor",
            avatar: hm_c_avatar,
            references: hm_c_pub,
        },

    ];

    useEffect(( () => {
        // console.log(API_BASE)
     fetch(`${API_BASE}/api/users`)
        .then(async r => {
            const json = await r.json();
            console.log("Users:", json);         // 现在能看到集合里的具体值
        })
        .catch(console.error);
    }),[])

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
                className="publications-page d-flex flex-column justify-content-start align-items-center min-vh-100 w-100"
            >
                <section className="publications-header-container">
                    <h1 className="publications-title">Publications</h1>
                    <p className="publications-subtitle">
                        Browse by author to explore the full list of publications.
                    </p>
                    <div className="publications-underline" />
                </section>
                
                <div className="publications-list container">
                    {DUMMY_AUTHORS.map((a) => (
                        <CollapsibleAuthor key={a.id} author={a} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Publications;
