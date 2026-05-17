import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Qingwen_Zeng.css";
import "../../styles/Linghan_Huang.css";

export default function Haolin_Jin() {
  const interests = [
    "AI in Software Engineering",
    "LLM Applications in Software Engineering",
    "LLM in Code Generation",
    "LLM-based Agents for Software Engineering",
  ];

  const publications = [
    {
      title:
        "From LLMs to LLM-based Agents for Software Engineering: A Survey of Current, Challenges and Future",
      authors:
        "Haolin Jin, Linghan Huang, Haipeng Cai, Jun Yan, Bo Li, Huaming Chen",
      venue: "arXiv preprint arXiv:2408.02479, 2024",
    },
    {
      title:
        "Uncovering Systematic Failures of LLMs in Verifying Code Against Natural Language Specifications",
      authors: "Haolin Jin, Huaming Chen",
      venue:
        "2025 40th IEEE/ACM International Conference on Automated Software Engineering (ASE), 2025",
    },
    {
      title:
        "Deliverables Are Not Understanding in the AI Era: Reforming Full-Stack Development Education with Continuous Interactive Learning",
      authors: "Haolin Jin, Jiawen Wen, Zhaoge Bi, Linghan Huang, Huaming Chen",
      venue: "FSE 2026 Software Engineering Education, 2026",
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
              alt="Haolin Jin"
              className="profile-avatar-lh"
            />
            <h1 className="qz-name">Haolin Jin</h1>
            <p className="profile-role-lh">PhD Student & Student Researcher</p>
          </div>
        </header>

        <section className="qz-section">
          <h2 className="qz-section-title">Contact</h2>
          <p className="qz-section-text">haolin.jin@sydney.edu.au</p>
        </section>

        <section className="qz-section qz-interest-section">
          <div>
            <h2 className="qz-section-title">Research Interests</h2>
            <p className="qz-section-text">
              Haolin's work focuses on applying AI and large language models to
              software engineering, including downstream software engineering
              applications, code generation, and LLM-based agent systems.
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
            href="https://scholar.google.com/citations?user=zzlhX4UAAAAJ&hl=en"
            className="qz-scholar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar <span className="external-link-icon" aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </div>
  );
}
