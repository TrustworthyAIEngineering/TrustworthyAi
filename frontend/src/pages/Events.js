import React, { useEffect, useState, useCallback } from "react";
import {API_BASE, EVENT_TYPE_URL_PREFIX_MAPPING} from "./config";
import "../styles/Events.css"
import { useNavigate } from "react-router-dom";
import {TIMEOUT_MS} from "./config"

function Events() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const load = useCallback(async () => {
        setLoading(true);
        setErr(null);
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);

        try {
            const r = await fetch(`${API_BASE}/api/events/all`, { signal: ctrl.signal });
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            const all = await r.json(); // 期望形如 [{ pk, title, type, _id }]
            console.log(all)
            setData(Array.isArray(all) ? all : []);
        } catch (e) {
            setErr(e.name === "AbortError" ? "Time out, please refresh the page.\"" : "Failed to fetch data, please refresh the page.");
        } finally {
            clearTimeout(timer);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    if (loading) {
        return (

            <div id = "loading" className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <div className="spinner-border" role="status" aria-label="loading" />
                <small className="mt-3 text-muted">Loading...</small>
            </div>
        );
    }

    if (err) {
        return (
            <div id = "fail" className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <h4 className="text-black mb-3">{err}</h4>
                <button className="btn btn-dark" onClick={load}>Retry</button>
            </div>
        );
    }

    return (
        <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-3 min-vh-100 w-100">
            <div className="events-container">
                <h1 className="events-title">Events</h1>
                <p className="events-subtitle">Catch our latest events.</p>
                <div className="events-underline" />
            </div>
            {data.filter(ev => ev?.show !== false).length === 0 ? (
                <p className="text-muted">No data</p>
            ) : (
                <div className="row g-3">
                    {data.filter(ev => ev?.show !== false).map((ev) => (
                        <div className="d-flex flex-column justify-content-start align-items-start" key={ev.pk || ev._id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{ev.title || "Untitled"}</h5>
                                    <div className="card-text mb-2 d-flex flex-row align-items-center justify-content-start">
                                        <span className="badge bg-secondary me-2">
                                            {ev._type?.toUpperCase() || "EVENT"}
                                        </span>
                                        <small className="text-muted">
                                            {"Posted at " + ev.post_time + " " + `(${ev.time_zone})`}
                                        </small>
                                    </div>
                                    <p className="text"><small>{ev.subtitle || ""}</small></p>

                                    {/* 如果有详情页，可替换为 Link 到 /events/:pk */}
                                    <a className="mt-auto btn btn-sm btn-dark" aria-disabled="true" onClick={() => navigate(`${EVENT_TYPE_URL_PREFIX_MAPPING[ev._type]}${ev._destination_id}`)}>Check details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Events;
