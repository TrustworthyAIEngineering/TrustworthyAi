import React from "react";
import { Link } from "react-router-dom";
import "../styles/Members.css";
import huamingImg from "../assets/huaming.jpg";
import yitianImg from "../assets/yitian.jpg";
import haolinImg from "../assets/haolin.jpg";
import taozhaoImg from "../assets/taozhao.jpg";
import linghanImg from "../assets/linghan.jpg";

function MemberCard({ avatar, name, direction }) {
  return (
    <div className="member-card">
      <img src={avatar} alt={name} className="member-avatar" />
      <div className="member-info">
        <h4 className="member-name">{name}</h4>
        <p className="member-dir">{direction}</p>
      </div>
    </div>
  );
}

export default function Members() {
  // Leader plus 9 members sorted alphabetically by given names
  const people = [
    { avatar: huamingImg, name: "Huaming Chen", direction: "AI Safety & Trust" },
    { avatar: haolinImg, name: "Haolin Jin", direction: "AI Agent" },
    { avatar: "/assets/m3.jpg", name: "Jiawen Wen", direction: "Trustworthy AI" },
    { avatar: linghanImg, name: "Linghan Huang", direction: "Trustworthy AI" },
    { avatar: "/assets/m8.jpg", name: "Lining Chen", direction: "Forecasting AI" },
    { avatar: "/assets/m6.jpg", name: "Pengyue Yang", direction: "Trustworthy AI" },
    { avatar: "/assets/m12.jpg", name: "Qingwen Zeng", direction: "Forecasting AI" },
    { avatar: taozhaoImg, name: "Taozhao Chen", direction: "Trustworthy AI" },
    { avatar: yitianImg, name: "Yitian Yang", direction: "Trustworthy AI" },
    { avatar: "/assets/m2.jpg", name: "Zhaoge Bi", direction: "Forecasting AI" }
  ];

  return (
    <div className="members-page">
      <div className="members-container">
        <h1 className="members-title">USYD Trustworthy AI Team</h1>
        <p className="members-subtitle">Infinitely progressing</p>
        <div className="members-underline" />

        {/* 2x5 Grid: first row first leader, then 4 members, etc. */}
        <div className="members-grid">
          {people.map((p, idx) => (
            <Link key={idx} to={`/members/${p.name.toLowerCase().replace(/\s+/g,'-')}`} className="member-link">
              <MemberCard {...p} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}