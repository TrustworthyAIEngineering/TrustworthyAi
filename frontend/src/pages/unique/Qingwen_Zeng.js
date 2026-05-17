import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Qingwen_Zeng.css";

export default function Qingwen_Zeng() {
  const interests = ["Research Interest", "LLM MI", "LLM Application"];

  const publications = [
    {
      title: (
        <>
          M-LLM<sup>3</sup>REC: A Motivation-Aware User-Item Interaction Framework
          for Enhancing Recommendation Accuracy with LLMs
        </>
      ),
      authors: "Lining Chen, Qingwen Zeng, Huaming Chen",
      venue:
        "Proceedings of the 34th ACM International Conference on Information and Knowledge Management (CIKM), 2025",
    },
    {
      title:
        "DAMA: A Dual Alignment Framework for Enhanced LLM-Powered Recommendations",
      authors:
        "Qingwen Zeng, Lining Chen, Jushang Qiu, Fangchen Liu, Huaming Chen, Ling Chen",
      venue: "2025 IEEE International Conference on Data Mining (ICDM), 2025",
    },
    {
      title:
        "SplineFormer: Improving Time Series Forecasting with Kolmogorov-Arnold Networks and Enhanced ProbSparse Self-Attention",
      authors:
        "Qingwen Zeng, Nan Yang, Jushang Qiu, Junbin Gao, Huaming Chen",
      venue:
        "Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD), 2025",
    },
    {
      title:
        "Bootstrapped Exploration with Causal Reasoning: A Training Paradigm for Adaptive Forecasting Agent",
      authors:
        "Qingwen Zeng, Dajun Guo, Zhaoge Bi, Lining Chen, Jushang Qiu, Yitian Yang, Carl Yang, Huaming Chen, Ling Chen",
      venue:
        "Proceedings of the International Conference on Machine Learning (ICML), 2026",
    },
  ];

  return (
    <div className="qz-profile-page">
      <main className="qz-profile-container">
        <Link to="/members" className="qz-back-link">
          Back to Members
        </Link>

        <header className="qz-hero">
          <div>
            {/* <p className="qz-eyebrow">Team Member Profile</p> */}
            <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Linghan Huang"
            className="profile-avatar-lh"
          />
            <h1 className="qz-name">Qingwen Zeng</h1>
            <p className="profile-role-lh">PhD Student & Student Researcher</p>
          </div>
          {/* <a
            href="https://scholar.google.com/citations?hl=zh-CN&user=D9UaWEMAAAAJ"
            className="qz-scholar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a> */}
        </header>

        <section className="qz-section qz-interest-section">
          <div>
            <h2 className="qz-section-title">Research Interests</h2>
            <p className="qz-section-text">
              Qingwen's work focuses on large language model methods and
              applications, with recent projects spanning recommender systems,
              forecasting agents, and time series modeling.
            </p>
          </div>
          <div className="qz-interest-list" aria-label="Research interest tags">
            {interests.map((interest) => (
              <span className="qz-interest-pill" key={interest}>
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section className="qz-section">
          <div className="qz-section-heading-row">
            <h2 className="qz-section-title">Selected Publications</h2>
            <span className="qz-count">{publications.length} papers</span>
          </div>

          <div className="qz-publication-list">
            {publications.map((publication, index) => (
              <article className="qz-publication" key={index}>
                <h3 className="qz-publication-title">{publication.title}</h3>
                <p className="qz-publication-authors">{publication.authors}</p>
                <p className="qz-publication-venue">{publication.venue}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qz-section qz-service-section">
          <div>
            <h2 className="qz-section-title">Academic Service</h2>
            <p className="qz-section-text">ICML 2026 Gold Reviewer</p>
          </div>
        </section>
        <div className="profile-item">
          <h3 className="profile-item-title">Links</h3>
          <p className="profile-item-desc">
            <a
            href="https://scholar.google.com/citations?hl=en&user=D9UaWEMAAAAJ"
            className="qz-scholar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar <span className="external-link-icon" aria-hidden="true">↗</span>
          </a>
          </p>
        </div>
      </main>
    </div>
  );
}
