import React from "react";
import "../../styles/ICDM2026Workshop.css";
import background from "../../assets/workshopRelated/ICDM2026_shenyang_workshop_hero.png";

const toc = [
  { id: "schedules", label: "Schedules" },
  { id: "introduction", label: "Introduction" },
  { id: "submission", label: "Submission of papers" },
  { id: "important-dates", label: "Important dates" },
  { id: "organizers", label: "Organizers" },
  { id: "contact", label: "Contact Us" },
  { id: "paperlist", label: "Paper List" }
];

const submissionTopics = [
  "Theoretical foundations of trustworthy machine learning, including the role of fairness, interpretability, and transparency in data mining.",
  "Innovative techniques for trustworthy machine learning in data mining, such as trustworthy graph mining and trustworthy federated learning.",
  "Explainable and interpretable data mining to enhance decision traceability and transparency.",
  "Privacy-preserving data mining, exploring techniques such as differential privacy, federated learning, and secure multi-party computation.",
  "Adversarial robustness in data mining models to improve resilience against adversarial attacks.",
  "Applications of trustworthy machine learning in finance, healthcare, cybersecurity, and social sciences.",
  "Future challenges in trustworthy machine learning, including data quality, ethical considerations, compliance, and responsible data governance."
];

const importantDates = [
  ["Paper Submission:", "August 20, 2026 AoE"],
  ["Notification to Authors:", "September 18, 2026 AoE"],
  ["Camera-ready:", "October 5, 2026 AoE"],
  ["Workshop Date:", "TBA"]
];

const organizers = [
  "Huaming Chen (University of Sydney)",
  "Na Zou (University of Houston)",
  "Ling Chen (University of Technology Sydney)"
];

export default function ICDM2026Workshop() {
  return (
    <div className="icdm2026-workshop-page d-flex flex-column justify-content-start align-items-center">
      <section
        className="icdm2026-hero"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Workshop on Trustworthy Machine Learning for Fair, Private, Robust, and Explainable Decision-Making (TML4DM)</h1>
        <p>
          Co-located with 26th IEEE International Conference on Data Mining (ICDM 2026)
          <br />
          November 12-15, 2026, Shenyang, China
        </p>
      </section>

      <div className="icdm2026-call">
        <h3>Call for papers</h3>
      </div>

      <main className="container py-1 pb-5">
        <h2><strong>Table of Contents</strong></h2>
        <nav className="toc w-100 w-lg-75">
          <ul className="list-unstyled mb-0">
            {toc.map((item) => (
              <li key={item.id}>
                <a className="link-primary" href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 id="schedules"><strong>Schedules</strong></h2>
        <p>
          <span><strong>Date: </strong>TBA<br /><br /></span>
          <span><strong>Location: </strong>Shenyang, China<br /><br /></span>
          <span><strong>Duration: </strong>Full-day workshop<br /><br /></span>
        </p>

        <h2 id="introduction"><strong>Introduction</strong></h2>
        <p>
          The increasing reliance on data mining techniques in critical decision-making systems has brought remarkable benefits across various domains, including finance, healthcare, cybersecurity, e-commerce, social networks, and scientific discovery. Data mining enables organizations to extract valuable insights from vast amounts of structured and unstructured data, driving innovations and improving decision-making. However, as data mining technologies become more sophisticated and widespread, concerns regarding their security, fairness, interpretability, and robustness are rising. The lack of transparency, bias in decision-making, vulnerability to adversarial attacks, and privacy risks are major challenges that hinder the responsible deployment of data mining solutions in real-world applications. Trustworthy machine learning is emerging as a critical area of research aimed at ensuring that data mining models and algorithms adhere to principles of fairness, explainability, privacy preservation, robustness, and security. As organizations and individuals increasingly depend on automated data-driven decisions, the need for reliable and responsible data mining methodologies has become essential. This workshop seeks to bridge the gap between data mining advancements and trustworthy AI, bringing together researchers and practitioners to discuss the latest developments, theoretical foundations, and practical applications of trustworthy data science. This workshop will focus on exploring the core principles, methodologies, and real-world applications of trustworthy machine learning. Through technical discussions and knowledge exchange, we aim to advance responsible data mining practices that align with societal and ethical expectations.
        </p>

        <h2 id="submission"><strong>Submission of papers</strong></h2>
        <p>We invite submissions on covering but not limited to the following topics:</p>
        <p className="icdm2026-topic-list">
          {submissionTopics.map((topic) => <span key={topic}>• <strong>{topic}</strong><br /></span>)}
        </p>
        <p>
          We invite regular research paper submissions. ICDM 2026 workshop papers are expected to follow the IEEE ICDM workshop submission requirements. Accepted workshop papers will be published in the dedicated ICDMW proceedings by the IEEE Computer Society Press. More detailed information is available in the{" "}
          <a target="_blank" rel="noreferrer" href="https://icdm2026.neu.edu.cn/CallforWorkshops/list.htm">IEEE ICDM 2026 Workshop Guidelines</a>.
        </p>
        <p><u>Accepted workshop papers will be included in the ICDMW proceedings, and at least one author of each accepted paper is expected to register for and attend ICDM 2026 according to the conference requirements.</u></p>

        <h2 id="important-dates"><strong>Important dates</strong></h2>
        <div className="icdm2026-table-wrap">
          <table>
            <tbody>
              {importantDates.map(([label, value]) => (
                <tr key={label}><td>{label}</td><td>{value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="organizers"><strong>Organizers</strong></h2>
        <p>{organizers.map((organizer) => <span key={organizer}>- {organizer}<br /></span>)}</p>

        <h2 id="contact"><strong>Contact Us</strong></h2>
        <p>
          Huaming Chen, Senior Lecturer, School of Electrical and Computer Engineering, THE UNIVERSITY OF SYDNEY, Room 409A, J03 | The University of Sydney | NSW | 2006, Email:{" "}
          <a href="mailto:huaming.chen@sydney.edu.au">huaming.chen@sydney.edu.au</a>
        </p>

        <h2 id="paperlist"><strong>Paper List</strong></h2>
        <p>TBA</p>
      </main>
    </div>
  );
}
