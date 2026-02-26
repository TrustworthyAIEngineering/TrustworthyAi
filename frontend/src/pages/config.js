import { useEffect } from "react";
export const API_BASE =
    (typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
        ? "http://localhost:8000"
        : "https://trustworthyai-5avd.onrender.com");


export const EVENT_TYPE_URL_PREFIX_MAPPING = {
    "workshop": "/events/workshops/"
}

export const TIMEOUT_MS = 8 * 1000;

export function MapMyVisitorsMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "mapmyvisitors";
    script.type = "text/javascript";
    script.src = "//mapmyvisitors.com/map.js?d=uFIukxp8lXvvXheH03kv5cEmq54rWhKGo7IkLRuXaoY&cl=000000&w=a";
    document.getElementById("mapmyvisitors-container")?.appendChild(script);
    document.getElementById("mapmyvisitors-container").style.width = "30vw";
    document.getElementById("mapmyvisitors-container").style.height = "auto";


  }, []);

  return <div id="mapmyvisitors-container"></div>;
}

export function MapMyVisitorsGlobe() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "mmvst_globe";
    script.type = "text/javascript";
    script.src = "//mapmyvisitors.com/globe.js?d=fDjwS5nFM7pflAG-Bw8VJITfJsPBdkPCa2Py9V6RJjI";
    document.getElementById("mmvst-globe-container")?.appendChild(script);
    document.getElementById("mmvst-globe-container").style.width = "1000px";
    document.getElementById("mmvst-globe-container").style.height = "1000px";
    document.getElementById("mmvst-globe-container").style.backgroundColor = "rgba(0,0,0,0)";

  }, []);

  return <div id="mmvst-globe-container"></div>;
}