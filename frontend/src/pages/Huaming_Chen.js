// src/pages/Huaming_Chen.js
import React from "react";
import { Link } from "react-router-dom";

export default function Huaming_Chen() {
  return (
    <div className="container py-5">
      <Link to="/members" className="btn btn-link mb-4">← Back to Members</Link>
      <h1>Huaming Chen</h1>
      <p><strong>Position:</strong> Team Leader</p>
      <p><strong>Research Direction:</strong> AI Safety & Trust</p>
      {/* 根据需要补充更多个人信息 */}
    </div>
  );
}
