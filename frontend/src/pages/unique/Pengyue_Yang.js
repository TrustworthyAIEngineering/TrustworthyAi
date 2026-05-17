import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Qingwen_Zeng.css";
import "../../styles/Linghan_Huang.css";

export default function Pengyue_Yang() {
  const fields = [
    "Contact",
    "Affiliation",
    "Research Interests",
    "Selected Publications",
    "Links",
  ];

  return (
    <div className="qz-profile-page">
      <main className="qz-profile-container">
        <Link to="/members" className="qz-back-link">
          Back to Members
        </Link>

        <header className="qz-hero">
          <div>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Pengyue Yang"
              className="profile-avatar-lh"
            />
            <h1 className="qz-name">Pengyue Yang</h1>
            <p className="profile-role-lh">Student Researcher</p>
          </div>
        </header>

        {fields.map((field) => (
          <section className="qz-section" key={field}>
            <h2 className="qz-section-title">{field}</h2>
            <p className="qz-section-text">waiting for updates</p>
          </section>
        ))}
      </main>
    </div>
  );
}
