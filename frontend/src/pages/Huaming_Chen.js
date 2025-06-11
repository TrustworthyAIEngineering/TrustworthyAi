import React from "react";
import { Link } from "react-router-dom";
import "../styles/Huaming_Chen.css";
import huamingImg from "../assets/huaming.jpg";
export default function Huaming_Chen() {
  return (
    <div className="profile-page py-5">
      {/* 中心化内容区域 */}
      <div className="container">
        <Link to="/members" className="btn btn-link mb-4">← Back to Members</Link>
        <h1 className="profile-title mb-2">Dr. Huaming Chen</h1>
        <p className="profile-position mb-4"><strong>Team Leader – AI Safety & Trust</strong></p>
        
        {/* 两列信息卡 */}
        <div className="profile-grid mb-5">
          {/* 1. 个人信息：水平排列头像和信息 */}
          <div className="profile-card profile-card--horizontal">
            <img src={huamingImg} alt="Huaming Chen" className="profile-avatar" />
            <div className="profile-info">
              <p><strong>Name:</strong> Huaming Chen</p>
              <p><strong>Age:</strong> 35</p>
              <p><strong>Contact:</strong> huaming.chen@sydney.edu.au</p>
              <p><strong>Address:</strong> School of ECE, The University of Sydney</p>
            </div>
          </div>
          {/* 2. Key Summary 并排 */}
          <div className="profile-card">
            <h3 className="card-heading">Key Summary</h3>
            <p>
              Experienced researcher in AI safety, leading multiple projects on adversarial robustness
              and trustworthy machine learning deployments in high-stakes domains.
            </p>
          </div>
        </div>

        {/* 下方大栏目：Research Experience */}
        <div className="profile-experience">
          <h2 className="experience-heading mb-3">Research Experience</h2>
          <p>
            Over 10 years of research experience in AI security, including leading the development
            of MOJOFuzzer for LLM-based fuzz testing, supervising red-team evaluations of commercial LLMs,
            and proposing novel hallucination-detection algorithms. Publications in top-tier venues
            such as NeurIPS, ICSE, and AAAI.
          </p>
        </div>
      </div>
    </div>
  );
}
