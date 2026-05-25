import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Qingwen_Zeng.css";
import "../../styles/Linghan_Huang.css";

export default function Pengyue_Yang() {
  const interests = [
    "LLM Reliability",
    "Hallucination and Failure Analysis",
    "LLM Errors and Creativity",
    "AI in Software Engineering",
  ];

  const publications = [
    {
      title:
        "Trust in One Round: Confidence Estimation for Large Language Models via Structural Signals",
      authors:
        "Pengyue Yang, Jiawen Wen, Haolin Jin, Linghan Huang, Huaming Chen, Ling Chen",
      venue: "WWW '26: Proceedings of the ACM Web Conference 2026",
    },
    {
      title:
        "Human-aligned AI Model Cards with Weighted Hierarchy Architecture",
      authors:
        "Pengyue Yang, Haolin Jin, Qingwen Zeng, Jiawen Wen, Harry Rao, Huaming Chen",
      venue:
        "FSE Companion '26: Proceedings of the ACM International Conference on the Foundations of Software Engineering Companion, 2026",
    },
    {
      title:
        "The Tower of Babel Revisited: Multilingual Jailbreak Prompts on Closed-Source Large Language Models",
      authors:
        "Linghan Huang, Haolin Jin, Zhaoge Bi, Pengyue Yang, Peizhou Zhao, Taozhao Chen, Xiongfei Wu, Lei Ma, Huaming Chen",
      venue: "arXiv preprint arXiv:2505.12287, 2025",
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
              alt="Pengyue Yang"
              className="profile-avatar-lh"
            />
            <h1 className="qz-name">Pengyue Yang</h1>
            <p className="profile-role-lh">PhD Student</p>
          </div>
        </header>

        <section className="qz-section">
          <h2 className="qz-section-title">Contact</h2>
          <p className="qz-section-text">pyan8493@uni.sydney.edu.au</p>
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
                Pengyue's research focuses on trustworthy AI, large language
                models, and AI for software engineering. His work includes
                confidence estimation for large language models, responsible AI
                documentation, multilingual LLM safety evaluation, and the
                relationship between LLM errors, hallucination, and creativity.
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

        // <section className="qz-section">
        //   <h2 className="qz-section-title">Education</h2>
        //   <p className="qz-section-text">
        //     Currently pursuing a Doctor of Philosophy at The University of Sydney.
        //   </p>
        // </section>

        <section className="qz-section">
          <h2 className="qz-section-title">Links</h2>
          <a
            href="https://scholar.google.com/citations?user=KikScjgAAAAJ&hl=en"
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
