import React, { useEffect, useState, useCallback } from "react";
import "../../styles/Workshop_template_1.css";
import background from "../../assets/workshopRelated/ICDM_2025_trustworthy_machine_learning_12112025.png";
import cfg from "./icdm2025.config.json";
import Workshop_template_1 from "./templates/Workshop_template_1";
import { API_BASE } from "../config";
import { useParams } from "react-router-dom";
import "../../styles/WorkshopFactory.css"
import {TIMEOUT_MS} from "../config"

export default function WorkshopFactory({_predefinedDestinationId}) {
    let { _destination_id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    if (_destination_id == null) {
        _destination_id = _predefinedDestinationId;
    }

    const load = useCallback(async () => {
        setLoading(true);
        setErr(null);

        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);

        try {
            const r = await fetch(`${API_BASE}/api/workshops/${_destination_id}`, { signal: ctrl.signal });
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            const remote = await r.json();
            setData(remote);
        } catch (e) {
            setErr(e.name === "AbortError" ? "Time out, please refresh the page.\"" : "Failed to fetch data, please refresh the page.");
            if (cfg){
                setData(cfg);
                console.log("Using fallback.");
            }else
                setData(null);
        } finally {
            clearTimeout(timer);
            setLoading(false);
            
        }
    }, [_destination_id]);

    useEffect(() => {
        load();
        return () => {}; // 清理留空即可
    }, [load]);

    if (loading) {
        return (
            <div id = "loading"  className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <div className="spinner-border" role="status" aria-label="loading" />
                <small className="mt-3 text-muted">Loading…</small>
            </div>
        );
    }

    if (err && data == null) {
        return (
            <div  id = "fail"  className="d-flex flex-column justify-content-center align-items-center min-vh-100">
               
                <p className="text-black mb-3">{err}</p>
                <div className="d-flex gap-2">
                    <button className="btn btn-dark" onClick={load}>Retry</button>
                    {/*<button className="btn btn-outline-secondary btn-sm" onClick={() => setData(cfg)}>*/}
                    {/*    使用本地配置预览*/}
                    {/*</button>*/}
                </div>
            </div>
        );
    }

    if (data) return <Workshop_template_1 data={data} />;

    // 理论到不了这里，兜底
    return <div className="container-lg min-vh-100 align-items-center">No data</div>;
}
