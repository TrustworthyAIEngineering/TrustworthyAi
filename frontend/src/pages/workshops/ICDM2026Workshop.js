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
  ["Workshop Date:", "Thursday, November 12, 2026"]
];

const organizers = [
  "Huaming Chen (University of Sydney)",
  "Na Zou (University of Houston)",
  "Ling Chen (University of Technology Sydney)"
];

const acceptedPapers = [
  { id: "S26218", authors: "Jie Li, Shenglin Cao, Hongshuo Liu, and Xiaoying Duan", title: "KBGANet: A Multi-Scale Temporal Intrusion Detection Model for the Medical Internet of Things" },
  { id: "S26217", authors: "Tharuka Kasthuri Arachchige, Veselka Boeva, and Shahrooz Abghari", title: "Hierarchical Knowledge Distillation for Fair Federated Learning" },
  { id: "S26215", authors: "Harsh Maheshwary, Adit Jain, Manoranjan Dash, and Aadit Shah", title: "Beyond Demographics: Evaluating and Mitigating Emotion-Based Bias in Deepfake Detection" },
  { id: "S26214", authors: "Maksim Panchuk, Viacheslav Shalamov, Sergey Muravyov, and Valeria Efimova", title: "Trustworthy Preference Mining from Conversational Data for LLM-Based Decision-Making" },
  { id: "S26213", authors: "Sandra Mitrovic and Manuel Striani", title: "Self-consistency and Cross-consistency metrics for LLM Robustness Assessment" },
  { id: "S26207", authors: "Nathan NOWAKOWSKI, Elöd Egyed-Zsigmond, Diana Nurbakova, and Sylvie Calabretto", title: "CALI: Failure Prediction via Cramer-Wold LatentInference and KDE" },
  { id: "S26205", authors: "Mikhail Babenko, Alexey Tselykh, Naira Akobyan, and Maria Lapina", title: "Towards Trustworthy CNN Classification: Rethinking Classifier Architectures for Out-of-Distribution Detection" },
  { id: "S26204", authors: "Sergei Kurashkin, Vadim Tynchenko, Aleksei Borodulin, and Vladimir Nelyub", title: "Reproducible Gains, Irreproducible Rankings: A 200-Run Audit of Bias-Mitigation Methods" },
  { id: "S26203", authors: "Sebastian Szelest, Marek Pawlicki, Rafal Kozik, and Michal Choras", title: "Evaluating the Impact of Model Depth on SHAP-Based Explainability" },
  { id: "S26202", authors: "Ivan Malashin, Vadim Tynchenko, Alexey Borodulin, Igor Masich, and Dmitry Martysyuk", title: "Image-Grounded Hardening for Diffusion Concept Unlearning" },
  { id: "DM451", authors: "Durande Kamga Nguifo, Jerry Lonlac, Anthony Fleury, and Engelbert Mephu Nguifo", title: "GraPEX: GRAdual Pattern EXplainer for multivariate time series classification" },
  { id: "DM449", authors: "Anna Chistyakova and Mikhail Pautov", title: "RandMark: On Random Watermarking of Visual Foundation Models" },
  { id: "DM399", authors: "Muntaser Syed, Ameerah Alsulami, and Marius Silaghi", title: "CryptEpi: Privacy-Preserving Epistasis Detection via GPU-Accelerated Homomorphic Encryption" },
  { id: "DM317", authors: "Liangyu Yang, Fu-lai Chung, and Shitong Wang", title: "Fast Triply-interpretable Mining of Fuzzy Association Rules by An Ensemble Classifier" },
  // Internal rendering keys for transferred papers whose submission IDs were not supplied.
  { id: "transfer-graph-reasoning", authors: "Erica Coppolillo", title: "Let Your Graph Do the Reasoning: Injecting Knowledge Graphs into Large Language Models" },
  { id: "transfer-alien", authors: "Artem Zabolotnyi, Roman Makarov, Mile Mitrovic, Polina Proskura, Oleg Travkin, Roman Alferov, and Alexey Zaytsev", title: "ALIEN: Aligned Entropy Head for Improving Uncertainty Estimation of LLMs" },
  { id: "transfer-finrisk-ope", authors: "Hongye Wu, Youcheng Lan, Guangyan Gan, Shaobin Shi, Jie Zou, Kwanting Leung, and Yuhan Cheng", title: "FinRisk-OPE: A Public Benchmark for Risk-Certified Financial Off-Policy Evaluation" },
  { id: "transfer-proxyfair", authors: "Vivian Wei Jiang, Gustavo Batista, and Michael Bain", title: "ProxyFair: Fairness-Aware Causal Discovery via Proxy-Excess Regularization" }
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
          <br />
          TML4DM (W04): November 12, 2026, 08:30–15:30 | Paris Room
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
          <span><strong>Date: </strong>Thursday, November 12, 2026<br /><br /></span>
          <span><strong>Venue: </strong>Paris Room, Shenyang, China<br /><br /></span>
          <span><strong>Time: </strong>08:30–15:30 (including coffee break and lunch)<br /><br /></span>
        </p>
        <div className="icdm2026-table-wrap">
          <table>
            <thead>
              <tr><th scope="col">Time</th><th scope="col">Activity</th><th scope="col">Venue</th></tr>
            </thead>
            <tbody>
              <tr><td>08:30–09:50</td><td>W04 | TML4DM</td><td>Paris Room</td></tr>
              <tr><td>09:50–10:10</td><td>Coffee Break</td><td>—</td></tr>
              <tr><td>10:10–12:00</td><td>W04 | TML4DM</td><td>Paris Room</td></tr>
              <tr><td>12:00–13:00</td><td>Lunch</td><td>Grand Ballroom 2</td></tr>
              <tr><td>13:00–15:30</td><td>W04 | TML4DM</td><td>Paris Room</td></tr>
            </tbody>
          </table>
        </div>

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
        <ol className="icdm2026-paper-list">
          {acceptedPapers.map((paper, index) => (
            <li key={paper.id} className="icdm2026-paper-card">
              <h3 className="icdm2026-paper-title">{index + 1}. {paper.title}</h3>
              <p className="icdm2026-paper-authors">{paper.authors}</p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
