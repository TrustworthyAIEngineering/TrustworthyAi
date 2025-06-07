import React from "react";
import "../styles/Members.css";
import { Link } from "react-router-dom";

// 复用的卡片组件
function MemberCard({ avatar, name, direction }) {
  return (
    <div className="member-card">
      <img src={avatar} alt={name} className="member-avatar" />
      <div className="member-info">
        <p className="member-name"><strong>Name:</strong> {name}</p>
        <p className="member-dir"><strong>Research Direction:</strong> {direction}</p>
      </div>
    </div>
  );
}

export default function Members() {
  // 领导人数据
  const leader = {
    avatar: "/assets/leader.jpg",
    name: "Dr. Huaming Chen",
    direction: "AI Safety & Trust",
  };

  // 其他 12 位成员的数据（示例）
  const members = [
    { avatar: "/assets/m1.jpg", name: "Bob Lee",   direction: "Adversarial ML" },
    { avatar: "/assets/m2.jpg", name: "Cathy Wu", direction: "Model Interpretability" },
    { avatar: "/assets/m3.jpg", name: "David Ng", direction: "Robustness Testing" },
    { avatar: "/assets/m4.jpg", name: "Eva Chan", direction: "Fairness in AI" },
    { avatar: "/assets/m5.jpg", name: "Frank Li", direction: "NLP Security" },
    { avatar: "/assets/m6.jpg", name: "Grace Yao",direction: "Reinforcement Safety" },
    { avatar: "/assets/m7.jpg", name: "Henry Xu", direction: "Privacy Preserving ML" },
    { avatar: "/assets/m8.jpg", name: "Irene Ho", direction: "Explainable AI" },
    { avatar: "/assets/m9.jpg", name: "Jack Tan", direction: "Ethical AI" },
    { avatar: "/assets/m10.jpg",name: "Kelly Ng", direction: "AI Governance" },
    { avatar: "/assets/m11.jpg",name: "Leo Lim",  direction: "Secure Vision Models" },
    { avatar: "/assets/m12.jpg",name: "Mia Teo",  direction: "ML Verification" },
  ];

  return (
    <div className="members-page">
      <h1 className="members-title">USYD Trustworthy AI Team</h1>
      <p className="members-subtitle">Infinitely progressing</p>
      <div className="members-underline"></div>

      {/* 第一行：领导人居中 */}
      <div className="members-leader">
        <Link to="/members/huaming-chen" className="member-link">
            <MemberCard {...leader} />
        </Link>
      </div>



      {/* 接着三行，每行四个 */}
      <div className="members-grid">
        {members.map((m, idx) => (
          <MemberCard
            key={idx}
            avatar={m.avatar}
            name={m.name}
            direction={m.direction}
          />
        ))}
      </div>
    </div>
  );
}

