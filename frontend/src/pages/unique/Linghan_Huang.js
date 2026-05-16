import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Huaming_Chen.css";

export default function Linghan_Huang() {
  return (
    <div className="profile-page mt-lg-5 mt-lg-5 min-vh-100 w-100">
      <div className="container profile-stack">
        <Link to="/members" className="btn btn-link mb-4">← Back to Members</Link>

        <div className="profile-header">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Linghan Huang"
            className="profile-avatar"
          />
          <h1 className="profile-title mb-1">Linghan Huang</h1>
          <p className="profile-position">PhD Student & Student Researcher</p>
        </div>

        <div className="profile-list">
          <div className="profile-item">
            <h3 className="profile-item-title">Contact</h3>
            <p className="profile-item-desc">lhua5130@uni.sydney.edu.au</p>
          </div>

          <div className="profile-item">
            <h3 className="profile-item-title">Affiliation</h3>
            <p className="profile-item-desc">
              School of Electrical and Computer Engineering, The University of Sydney
            </p>
          </div>

          <div className="profile-item">
            <h3 className="profile-item-title">Research Summary</h3>
            <p className="profile-item-desc">
              My research focuses on trustworthy AI, large language models, software engineering,
              fuzz testing, and software/application security.
            </p>
          </div>

          <div className="profile-item">
            <h3 className="profile-item-title">Research Experience</h3>
            <p className="profile-item-desc">
              I have worked on LLM-based fuzzing, trustworthy AI evaluation, jailbreak prompt attacks,
              multimodal LLM security, LLM agents for software engineering, and intelligent forecasting
              with large language models.
            </p>
          </div>

          <div className="profile-item">
            <h3 className="profile-item-title">Selected Projects</h3>
            <p className="profile-item-desc">
              Large Language Models Based Fuzzing Techniques: A Survey; MOJOFuzzer for the MOJO
              programming language; Flanking Attack against multimodal LLMs; multilingual jailbreak
              prompts on closed-source LLMs.
            </p>
          </div>

          <div className="profile-item">
            <h3 className="profile-item-title">Education</h3>
            <p className="profile-item-desc">
              Bachelor of Software Engineering Honours, The University of Sydney.
              Currently pursuing a Doctor of Philosophy at The University of Sydney.
            </p>
          </div>

          <div className="profile-item">
            <h3 className="profile-item-title">Links</h3>
            <p className="profile-item-desc">
              <Link
                to="https://scholar.google.com/citations?hl=zh-CN&user=9b_rfZUAAAAJ"
                className="btn btn-link mb-4"
              >
                Google Scholar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
