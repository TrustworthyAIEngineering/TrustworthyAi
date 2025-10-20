export const API_BASE =
    (typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
        ? "http://localhost:3001"
        : "https://trustworthyai-5avd.onrender.com");