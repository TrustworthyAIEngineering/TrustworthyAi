import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Keep existing research URLs usable after moving the content onto Home.
export default function Research() {
  const { hash, search } = useLocation();
  return <Navigate replace to={{ pathname: "/home", hash: hash || "#research", search }} />;
}
