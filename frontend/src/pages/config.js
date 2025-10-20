export const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE?.trim() ||
    (typeof window !== "undefined" &&
    (location.hostname === "localhost" || location.hostname === "127.0.0.1")
        ? "http://localhost:3001"
        : "https://trustworthy-ai.com.au");