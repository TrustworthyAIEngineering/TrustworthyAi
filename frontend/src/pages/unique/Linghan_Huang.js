import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Linghan_Huang.css";

export default function Linghan_Huang() {
  const projects = [
    {
      title: "Large Language Models Based Fuzzing Techniques: A Survey",
      abstract:
        "This survey examines the intersection of fuzz testing and large language models. It reviews how LLMs generate, mutate, and optimize fuzzing inputs, categorizes existing frameworks, and analyzes recent research trends. Accepted by 2025 IEEE World Congress on Services and awarded Best Paper.",
    },
    {
      title: "LLMs are All You Need? Improving Fuzz Testing for MOJO with Large Language Models",
      abstract:
        "This work introduces MOJOFuzzer, the first zero-sample LLM-based fuzzer tailored to the MOJO programming language. It shows that LLM-guided fuzzing can uncover compilation and integration issues in a completely unseen programming environment. Accepted by APSEC 2025.",
    },
    {
      title: "Structure over Units: A Mechanistic Study of Hallucination and Performance Trade-offs in LLMs",
      abstract:
        "This project studies hallucination from a mechanistic interpretability perspective. It localizes hallucination-related units, maps them onto layer-wise structures, and proposes structure-level interventions such as Freeze, Swap, and Insert to mitigate hallucination while preserving model performance.",
    },
  ];

  return (
    <div className="profile-page-lh">
      <div className="profile-container-lh">
        <Link to="/members" className="profile-back-lh">
          Back to Members
        </Link>

        <div className="profile-header-lh">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Linghan Huang"
            className="profile-avatar-lh"
          />
          <h1 className="profile-name-lh">Linghan Huang</h1>
          <p className="profile-role-lh">PhD Student & Student Researcher</p>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Contact</h3>
          <p className="profile-section-text-lh">linghan.huang@sydney.edu.au</p>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Affiliation</h3>
          <p className="profile-section-text-lh">
            School of Electrical and Computer Engineering, The University of Sydney
          </p>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Research Summary</h3>
          <p className="profile-section-text-lh">
            My research focuses on mechanistic interpretability, jailbreak attacks,
            LLM safety, trustworthy AI, and software engineering for large language models.
          </p>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Research Experience</h3>
          <p className="profile-section-text-lh">
            I work on understanding and improving the safety of large language models,
            with a focus on internal model mechanisms, hallucination analysis,
            jailbreak robustness, and LLM-based software testing.
          </p>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Selected Projects</h3>

          <div className="project-grid-lh">
            {projects.map((project, index) => (
              <div className="project-card-lh" key={index}>
                <h4 className="project-title-lh">{project.title}</h4>
                <p className="project-abstract-lh">{project.abstract}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Education</h3>
          <p className="profile-section-text-lh">
            Bachelor of Software Engineering Honours, The University of Sydney.
            Currently pursuing a Doctor of Philosophy at The University of Sydney.
          </p>
        </div>

        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Links</h3>
          <a
            href="https://scholar.google.com/citations?hl=en&user=9b_rfZUAAAAJ"
            className="profile-link-lh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar <span className="external-link-icon" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
