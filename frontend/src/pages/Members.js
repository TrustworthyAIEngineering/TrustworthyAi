import React from "react";
import { Link } from "react-router-dom";
import "../styles/Members.css";
import huamingImg from "../assets/general/huaming.jpg";
import yitianImg from "../assets/general/yitian.jpg";
import haolinImg from "../assets/general/haolin.jpg";
import taozhaoImg from "../assets/general/taozhao.jpg";
import linghanImg from "../assets/general/linghan.jpg";

import jiawenImg from "../assets/general/jiawen.jpg";
import liningImg from "../assets/general/lining.jpg";
import zhaogeImg from "../assets/general/zhaoge.jpg";
import pengyueImg from "../assets/general/pengyue.jpg";
import qingwenImg from "../assets/general/qingwen.jpg";

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
    { avatar: jiawenImg, name: "Jiawen Wen", direction: "Vulnerability Detection" },
    { avatar: linghanImg, name: "Linghan Huang", direction: "Trustworthy AI" },
    { avatar: liningImg, name: "Lining Chen", direction: "The Application of Recommendation System" },
    { avatar: pengyueImg, name: "Pengyue Yang", direction: "Trustworthy AI" },
    { avatar: qingwenImg, name: "Qingwen Zeng", direction: "AI Algotithm & FInance" },
    { avatar: taozhaoImg, name: "Taozhao Chen", direction: "Trustworthy AI" },
    { avatar: yitianImg, name: "Yitian Yang", direction: "Trustworthy AI" },
    { avatar: zhaogeImg, name: "Zhaoge Bi", direction: "Forecasting AI" }
  ].reverse();

  return (
    <div className="members-page mt-lg-5 min-vh-100 w-100">
      <div className="members-container">
        <h1 className="members-title">USYD Trustworthy AI Team</h1>
        <p className="members-subtitle">Infinitely progressing</p>
        <div className="members-underline" />

        {/* 2x5 Grid: first row first leader, then 4 members, etc. */}
        <div className="members-grid">
          {people.map((p, idx) => (
            <Link key={idx} to={p.name==="Huaming Chen"&&`/members/${p.name.toLowerCase().replace(/\s+/g,'-')}`} className="member-link">
              <MemberCard {...p} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}