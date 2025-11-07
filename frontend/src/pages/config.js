export const API_BASE =
    (typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
        ? "http://localhost:8000"
        : "https://trustworthyai-5avd.onrender.com");


export const EVENT_TYPE_URL_PREFIX_MAPPING = {
    "workshop": "/events/workshops/"
}

export const TIMEOUT_MS = 25 * 1000;

