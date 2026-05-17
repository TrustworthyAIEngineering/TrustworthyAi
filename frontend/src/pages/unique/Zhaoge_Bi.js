import React from "react";
import { Link } from "react-router-dom";
import zhaogeAvatar from "../../assets/general/zhaoge.jpg";
import "../../styles/Qingwen_Zeng.css";
import "../../styles/Linghan_Huang.css";

export default function Zhaoge_Bi() {
  const interests = [
    "Forecasting AI",
    "Time-Series Forecasting",
    "LLM-based Forecasting Agents",
    "Energy Market Prediction",
  ];

  const publications = [
    {
      title:
        "Bootstrapped Exploration with Causal Reasoning: A Training Paradigm for Adaptive Forecasting Agent",
      authors:
        "Qingwen Zeng, Dajun Guo, Zhaoge Bi, Lining Chen, Jushang Qiu, Yitian Yang, Carl Yang, Huaming Chen, Ling Chen",
      venue: "ICML 2026",
    },
    {
      title:
        "NSW-EPNews: A News-Augmented Benchmark for Electricity Price Forecasting with LLMs",
      authors:
        "Zhaoge Bi, Linghan Huang, Lining Chen, Haolin Jin, Qingwen Zeng, Dong Yuan, Huaming Chen",
      venue: "arXiv preprint arXiv:2506.11050, 2025",
    },
    {
      title:
        "SW-HyDEC: A Structure-Aware Hybrid Decomposition and Ensemble Learning Framework for Carbon Price Forecasting",
      authors: "Qingwen Zeng, Zhaoge Bi, Lining Chen, Huaming Chen",
      venue: "Neural Computing and Applications",
    },
    {
      title:
        "Deliverables Are Not Understanding in the AI Era: Reforming Full-Stack Development Education with Continuous Interactive Learning",
      authors: "Haolin Jin, Jiawen Wen, Zhaoge Bi, Linghan Huang, Huaming Chen",
      venue: "FSE 2026 Software Engineering Education Track",
    },
  ];

  return (
    <div className="qz-profile-page">
      <main className="qz-profile-container">
        <Link to="/members" className="qz-back-link">
          ← Back to Members
        </Link>

        <header className="qz-hero">
          <div>
            <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Taozhao Chen"
                className="profile-avatar-lh"
              />
            <h1 className="qz-name">Zhaoge Bi</h1>
            <p className="profile-role-lh">Master Student & Student Researcher</p>
          </div>
        </header>

        <section className="qz-section">
          <h2 className="qz-section-title">Contact</h2>
          <p className="qz-section-text">zhaoge.bi@sydney.edu.au</p>
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
              Zhaoge's research focuses on forecasting AI, time-series modeling,
              and large language model-based forecasting agents. His recent work
              studies adaptive forecasting with causal reasoning, electricity
              price forecasting with multimodal news signals, and trustworthy
              AI applications in software engineering education.
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
            href="https://scholar.google.com/citations?hl=en&user=StMiY64AAAAJ"
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
