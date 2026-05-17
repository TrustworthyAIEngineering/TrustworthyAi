import React from "react";
import { Link } from "react-router-dom";
import liningAvatar from "../../assets/general/lining.jpg";
import "../../styles/Qingwen_Zeng.css";
import "../../styles/Linghan_Huang.css";

export default function Lining_Chen() {
  const interests = [
    "Recommendation Systems",
    "LLM-powered Recommendation",
    "Cold-start Recommendation",
    "Time-Series Forecasting",
  ];

  const publications = [
    {
      title:
        "M-LLM3REC: A Motivation-Aware User-Item Interaction Framework for Enhancing Recommendation Accuracy with LLMs",
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
        "SW-HyDEC: A Structure-Aware Hybrid Decomposition and Ensemble Learning Framework for Carbon Price Forecasting",
      authors: "Qingwen Zeng, Zhaoge Bi, Lining Chen, Huaming Chen",
      venue: "Neural Computing and Applications",
    },
    {
      title:
        "Bootstrapped Exploration with Causal Reasoning: A Training Paradigm for Adaptive Forecasting Agent",
      authors:
        "Qingwen Zeng, Dajun Guo, Zhaoge Bi, Lining Chen, Jushang Qiu, Yitian Yang, Carl Yang, Huaming Chen, Ling Chen",
      venue: "ICML 2026",
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
            <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Taozhao Chen"
                className="profile-avatar-lh"
              />
            <h1 className="qz-name">Lining Chen</h1>
            <p className="profile-role-lh">Master Student & Student Researcher</p>
          </div>
        </header>

        <section className="qz-section">
          <h2 className="qz-section-title">Contact</h2>
          <p className="qz-section-text">lining.chen@sydney.edu.au</p>
        </section>

        <section className="qz-section">
          <h2 className="qz-section-title">Affiliation</h2>
          <p className="qz-section-text">
            School of Electrical and Computer Engineering, The University of Sydney
          </p>
        </section>

        <section className="qz-section qz-interest-section">
          <div>
            <h2 className="qz-section-title">Research Interests</h2>
            <p className="qz-section-text">
              Lining's research focuses on recommendation systems and the use of
              large language models to improve personalization, especially in
              sparse-data and cold-start settings. His recent work also connects
              LLM-based reasoning with forecasting tasks and high-stakes decision
              support.
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

        <section className="qz-section">
          <h2 className="qz-section-title">Links</h2>
          <a
            href="https://scholar.google.com/citations?user=FAlk4gEAAAAJ&hl=en"
            className="qz-scholar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
        </section>
      </main>
    </div>
  );
}
