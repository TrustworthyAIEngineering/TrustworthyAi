import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Jiawen_Wen.css";

export default function Jiawen_Wen() {
  const keywords = [
    "Vulnerability Detection",
    "Open-Source Software Security",
    "Trustworthy AI",
    "AI for Software Engineering",
  ];

  const publications = [
    {
      title:
        "Trust in One Round: Confidence Estimation for Large Language Models via Structural Signals",
      authors: [
        "Pengyue Yang",
        "Jiawen Wen",
        "Haolin Jin",
        "Linghan Huang",
        "Huaming Chen",
        "Ling Chen",
      ],
      venue: "WWW '26: Proceedings of the ACM Web Conference 2026",
    },
    {
      title:
        "What You See Is Not Always What You Get: Evaluating GPT's Comprehension of Source Code",
      authors: ["Jiawen Wen", "Bangshuo Zhu", "Huaming Chen"],
      venue:
        "2025 32nd Asia-Pacific Software Engineering Conference (APSEC), 2025",
    },
    {
      title: "Code Ownership in Open-Source AI Software Security",
      authors: ["Jiawen Wen", "Dong Yuan", "Lei Ma", "Huaming Chen"],
      venue:
        "RAIE '24: Proceedings of the 2nd International Workshop on Responsible AI Engineering, ICSE 2024",
    },
  ];

  const education = [
    {
      institution: "The University of Sydney",
      period: "Mar 2024 - Present",
      degree: "Doctor of Philosophy (Engineering)",
      details: [
        "Research Training Program (RTP) Stipend Scholarship",
      ],
    },
    {
      institution: "The University of Sydney",
      period: "Mar 2020 - Nov 2023",
      degree: "Bachelor of Engineering Honours (Software Engineering)",
      details: [
        "First Class Honours",
        "Dean's List of Excellence in Academic Performance",
      ],
    },
  ];

  const renderAuthors = (authors) =>
    authors.map((author, index) => (
      <React.Fragment key={author}>
        {author === "Jiawen Wen" ? <strong>{author}</strong> : author}
        {index < authors.length - 1 ? ", " : ""}
      </React.Fragment>
    ));

  return (
    <div className="jw-profile-page">
      <div className="jw-profile-container">
        <Link to="/members" className="jw-back-link">
          Back to Members
        </Link>

        <div className="jw-header">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Jiawen Wen"
            className="jw-avatar"
          />
          <h1 className="jw-name">Jiawen Wen</h1>
          <p className="jw-role">PhD Candidate</p>
        </div>

        <div className="jw-section">
          <h3 className="jw-section-title">Contact</h3>
          <p className="jw-section-text">jiawen.wen@sydney.edu.au</p>
        </div>

        <div className="jw-section">
          <h3 className="jw-section-title">Affiliation</h3>
          <div className="jw-affiliation-list">
            <p>School of Electrical and Computer Engineering</p>
            <p>Faculty of Engineering</p>
            <p>The University of Sydney</p>
          </div>
        </div>

        <div className="jw-section">
          <h3 className="jw-section-title">Research Summary</h3>
          <p className="jw-section-text">
            I am a PhD candidate at The University of Sydney, working on
            vulnerability detection, open-source software security, and
            trustworthy AI. My research focuses on improving the reliability and
            security of AI-assisted software systems.
          </p>
          <div className="jw-keyword-list" aria-label="Research keywords">
            {keywords.map((keyword) => (
              <span className="jw-keyword" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="jw-section">
          <div className="jw-section-heading-row">
            <h3 className="jw-section-title">Selected Publications</h3>
            <span className="jw-count">{publications.length} papers</span>
          </div>

          <div className="jw-publication-list">
            {publications.map((publication) => (
              <article className="jw-publication" key={publication.title}>
                <h4 className="jw-publication-title">{publication.title}</h4>
                <p className="jw-publication-authors">
                  {renderAuthors(publication.authors)}
                </p>
                <p className="jw-publication-venue">{publication.venue}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="jw-section">
          <h3 className="jw-section-title">Education</h3>
          <div className="jw-education-list">
            {education.map((item) => (
              <article className="jw-education-card" key={item.degree}>
                <div className="jw-education-heading">
                  <h4>{item.institution}</h4>
                  <span>{item.period}</span>
                </div>
                <p className="jw-degree">{item.degree}</p>
                <ul className="jw-education-details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="jw-section">
          <h3 className="jw-section-title">Links</h3>
          <p className="jw-link-row">
            <a
              href="https://scholar.google.com/citations?user=YwefeLcAAAAJ&hl=en"
              className="jw-profile-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar <span className="external-link-icon" aria-hidden="true">↗</span>
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/jiawen-wen-9389b11a9"
              className="jw-profile-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span className="external-link-icon" aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
