import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Huaming_Chen.css";

const scholarUrl =
  "https://scholar.google.com.au/citations?hl=en&user=3-qRVLUAAAAJ&view_op=list_works&alert_preview_top_rm=2&sortby=pubdate";
const universityProfileUrl = "https://profiles.sydney.edu.au/huaming.chen";

const researchPillars = [
  {
    title: "Trustworthy Large Language Models",
    text: "Reliability, confidence estimation, cross-cultural fidelity, and failure analysis for LLM-based systems.",
  },
  {
    title: "AI for Software Engineering",
    text: "LLM-assisted code review, specification verification, fuzz testing, and practical tools for developer workflows.",
  },
  {
    title: "Robust and Secure Learning",
    text: "Backdoor defense, machine unlearning, federated learning, and resilience against adversarial behavior.",
  },
  {
    title: "AI for Decision-Making Systems",
    text: "Recommendation, forecasting, health AI, transport analytics, and trustworthy deployment in real-world settings.",
  },
];

const selectedPublications = [
  {
    title:
      "Trust in One Round: Confidence Estimation for Large Language Models via Structural Signals",
    venue: "WWW 2026",
    theme: "LLM trust and confidence",
  },
  {
    title:
      "Uncovering Systematic Failures of LLMs in Verifying Code Against Natural Language Specifications",
    venue: "ASE 2025",
    theme: "LLM reliability for software engineering",
  },
  {
    title:
      "DAMA: A Dual Alignment Framework for Enhanced LLM-Powered Recommendations",
    venue: "ICDM 2025",
    theme: "LLM-powered recommendation",
  },
  {
    title: "K&L: Penetrating Backdoor Defense with Key and Locks",
    venue: "WWW 2026",
    theme: "AI security",
  },
  {
    title:
      "LLMs are All You Need? Improving Fuzz Testing for MOJO with Large Language Models",
    venue: "APSEC 2025",
    theme: "AI-assisted testing",
  },
  {
    title: "FedSC: Federated Learning with Semantic-Aware Collaboration",
    venue: "KDD 2025",
    theme: "Collaborative learning",
  },
];

const teamDirections = [
  {
    title: "LLM Trustworthiness and Evaluation",
    focus:
      "Confidence estimation, reliability auditing, jailbreak analysis, interpretability, and cross-cultural evaluation.",
  },
  {
    title: "AI for Software Engineering",
    focus:
      "Code review, natural-language specification checking, fuzz testing, and developer-facing AI tools.",
  },
  {
    title: "Recommendation and Personalization",
    focus:
      "LLM-powered recommendation, preference alignment, user modeling, and trustworthy ranking systems.",
  },
  {
    title: "Forecasting and Decision Support",
    focus:
      "Adaptive forecasting agents, causal reasoning, and AI systems for complex real-world decisions.",
  },
  {
    title: "Security and Robust Learning",
    focus:
      "Backdoor defense, machine unlearning, federated learning, and resilience under adversarial settings.",
  },
  {
    title: "Applied Trustworthy AI",
    focus:
      "Health AI, robotics, multimodal systems, transport analytics, and deployment-aware model assessment.",
  },
];

export default function Huaming_Chen() {
  return (
    <main className="hmc-profile min-vh-100 w-100">
      <div className="container hmc-profile-stack">
        <Link to="/members" className="profile-back">
          Back to Members
        </Link>

        <section className="hmc-hero" aria-labelledby="huaming-profile-title">
          <div className="hmc-hero-copy">
            <p className="hmc-eyebrow">Team Leader | Trustworthy AI Systems</p>
            <h1 id="huaming-profile-title">Dr. Huaming Chen</h1>
            <p className="hmc-position">
              School of Electrical and Computer Engineering, The University of
              Sydney
            </p>
            <p className="hmc-lead">
              Huaming Chen leads a research group building trustworthy AI for
              software, web, security, recommendation, and real-world
              decision-making systems. The work connects rigorous failure
              analysis with practical tools that make advanced AI systems more
              reliable, auditable, and useful.
            </p>
            <div className="hmc-actions" aria-label="Huaming Chen links">
              <a
                href={scholarUrl}
                className="hmc-action hmc-action-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
                <span className="external-link-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
              <Link to="/publications" className="hmc-action">
                Publications
              </Link>
              <a
                href={universityProfileUrl}
                className="hmc-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                University Profile
                <span className="external-link-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a href="mailto:huaming.chen@sydney.edu.au" className="hmc-action">
                Contact
              </a>
            </div>
          </div>

          <aside className="hmc-identity" aria-label="Profile summary">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Huaming Chen"
              className="hmc-avatar"
            />
            <dl className="hmc-facts">
              <div>
                <dt>Email</dt>
                <dd>huaming.chen@sydney.edu.au</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Supervisor and Team Leader</dd>
              </div>
              <div>
                <dt>Research Base</dt>
                <dd>Trustworthy AI, Software Engineering, Security</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="hmc-section" aria-labelledby="vision-heading">
          <div className="hmc-section-heading">
            <p>Research Vision</p>
            <h2 id="vision-heading">Trustworthy AI needs both depth and range.</h2>
          </div>
          <p className="hmc-section-intro">
            The group studies how AI systems behave when they are asked to make
            judgements, write or verify code, recommend actions, resist attacks,
            and operate in human-facing environments. This profile foregrounds
            the core signal: a leader coordinating connected research threads
            into a coherent trustworthy AI agenda.
          </p>
        </section>

        <section className="hmc-section" aria-labelledby="pillars-heading">
          <div className="hmc-section-heading">
            <p>Research Pillars</p>
            <h2 id="pillars-heading">A focused agenda across AI systems.</h2>
          </div>
          <div className="hmc-pillar-grid">
            {researchPillars.map((pillar) => (
              <article className="hmc-pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hmc-section" aria-labelledby="publications-heading">
          <div className="hmc-section-heading">
            <p>Selected Recent Publications</p>
            <h2 id="publications-heading">
              Representative work from current research directions.
            </h2>
          </div>
          <div className="hmc-publication-grid">
            {selectedPublications.map((paper) => (
              <article className="hmc-publication" key={paper.title}>
                <span>{paper.venue}</span>
                <h3>{paper.title}</h3>
                <p>{paper.theme}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hmc-section" aria-labelledby="team-heading">
          <div className="hmc-section-heading">
            <p>Team Research Map</p>
            <h2 id="team-heading">
              Current projects form one connected research program.
            </h2>
          </div>
          <div className="hmc-team-grid">
            {teamDirections.map((item) => (
              <article className="hmc-team-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hmc-section hmc-service" aria-labelledby="service-heading">
          <div className="hmc-section-heading">
            <p>Academic Community</p>
            <h2 id="service-heading">Service across AI, web, and software venues.</h2>
          </div>
          <p>
            Huaming contributes to software engineering, security, web, data
            mining, and AI communities through reviewing and program committee
            work across major venues including ICSE, ISSTA, MSR, TheWeb, KDD,
            IJCAI, ACM CCS, ACM MM, ISSRE, IEEE ICWS, and ECML/PKDD.
          </p>
        </section>
      </div>
    </main>
  );
}
