import React from "react";
import "../../styles/ICDM2025Workshop.css";
import background from "../../assets/workshopRelated/ICDM_2025_trustworthy_machine_learning_12112025.png";

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
  ["Paper Submission:", "Aug 29, 2025 AoE"],
  ["Notification to Authors:", "Sep 18, 2025 AoE"],
  ["Camera-ready:", "Sep 25, 2025 AoE"],
  ["Workshop Date:", "Nov 12, 2025 AoE"]
];

const organizers = [
  "Huaming Chen (USYD)",
  "Na Zou (University of Houston)",
  "Yang Cao (Science Tokyo)",
  "Ling Chen (University of Technology Sydney)",
  "Mengnan Du (New Jersey Institute of Technology)"
];

const schedules = [
  <><strong>Date: </strong>Wednesday Nov.12, 2025</>,
  <><strong>Location: </strong>Capital Hilton, located at 1001 16th Street NW, Washington, DC 20036</>,
  <strong>8:30-8:45 - Opening and equipment check / Session introduction</strong>,
  "8:45-9:10 - Measuring and Mitigating Gender Entropy Bias in Large Language Models",
  "9:10-9:35 - Implet: A Post-hoc Subsequence Explainer for Time Series Models",
  "9:35-10:00 - DualEx: Dual-Space Clustering for Regional Explanations",
  "10:00-10:25 - SHAP Analyses in Feature-based and Principal Component-based Model",
  "10:25-10:50 - Explainable Profiling of Sleep Disorders to Support Trustworthy Clinical Interventions",
  "10:50-11:15 - LaFA: Latent Feature Attacks on Non-negative Matrix Factorization (Video present)",
  "11:15-11:40 - A Stochastic Diffusion Framework for Tabular Data Synthesis and Completion (Video present)",
  "11:40-12:05 - WHETSTONE: Honing Synthetic Data for Improved Downstream Fairness and Utility",
  "12:05-12:30 - Interpretable and Accurate Hybrid Decision Trees with Selective Case-Based Splits",
  <strong>12:30-13:30 - Lunch</strong>,
  "13:30-13:55 - Enhancing Counterfactual Explanations with Feasibility and Diversity",
  "13:55-14:20 - Synergizing Dynamic Symbolic Rules and Few-Shot Learning for Discrete Reasoning in Hybrid QA",
  "14:20-14:45 - Lightweight and Robust Federated Data Valuation",
  "14:45-15:10 - A Federated Meta-Learning Approach for Transactional Risk Behavior Identification (Video present)",
  "15:10-16:00 - Poster session & Networking",
  <strong>16:00-16:30 - Coffee Break</strong>,
  "16:30-17:30 - Poster session & Networking"
];

const papers = [
  "Fanyu Meng, Ziwen Kan, Shahbaz Rezaei, Zhaodan Kong, Xin Chen, and Xin Liu, Implet: A Post-hoc Subsequence Explainer for Time Series Models",
  "Sonal Prabhune, Balaji Padmanabhan, and Kaushik Dutta, Measuring and Mitigating Gender Entropy Bias in Large Language Models",
  "Pernille Matthews, Tommaso Amico, Arthur Zimek, and Ira Assent, DualEx: Dual-Space Clustering for Regional Explanations",
  "Sebastian Szelest, Marek Pawlicki, Ryszard Choras, Rafal Kozik, and Michal Choras, SHAP analyses in feature-based and principal component-based model",
  "SifEddine Sellami, Juba Agoun, Louenas Bounia, Lamia Yessad, and Auday Berro, Explainable Profiling of Sleep Disorders to Support Trustworthy Clinical Interventions",
  "Safayat Bin Hakim and Houbing Herbert Song, Synergizing Dynamic Symbolic Rules and Few-Shot Learning for Discrete Reasoning in Hybrid QA",
  "Zhaoyang Wang, Guangshun Li, Junhua Wu, and Xiaoshan Cui, A Federated Meta-Learning Approach for Transactional Risk Behavior Identification",
  "Ivan Malashin, Vadim Tynchenko, and Alexey Borodulin, A Stochastic Diffusion Framework for Tabular Data Synthesis and Completion",
  "Mary Grace Kozuch, Yan Zhou, and Murat Kantarcioglu, WHETSTONE: Honing Synthetic Data for Improved Downstream Fairness and Utility",
  "Minh Vu, Ben Nebgen, Erik Skau, Geigh Zollicoffer, Juan Castorena, Kim Rasmussen, Boian Alexandrov, and Manish Bhattarai, LaFA: Latent Feature Attacks on Non-negative Matrix Factorization",
  "Cristiano Landi, Alessio Cascione, and Riccardo Guidotti, Interpretable and Accurate Hybrid Decision Trees with Selective Case-Based Splits",
  "Xinyu Qin, Siyi Li, Yiyu Cai, and Lu Wang, Enhancing Counterfactual Explanations with Feasibility and Diversity",
  "Guojun Tang, Mohammad Mamun, Jiayu Zhou, and Steve Drew, Lightweight and Robust Federated Data Valuation"
];

export default function ICDM2025Workshop() {
  return (
    <div className="icdm2025-workshop-page d-flex flex-column justify-content-start align-items-center">
      <section
        className="icdm2025-hero"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Workshop on Trustworthy Machine Learning for Fair, Private, Robust, and Explainable Decision-Making</h1>
        <p>
          Co-located with 25th IEEE International Conference on Data Mining (ICDM 2025)
          <br />
          November 12, 2025, Washington DC, USA
        </p>
      </section>

      <div className="icdm2025-call">
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
        <p>{schedules.map((item, index) => <span key={index}>{item}<br /><br /></span>)}</p>

        <h2 id="introduction"><strong>Introduction</strong></h2>
        <p>
          The increasing reliance on data mining techniques in critical decision-making systems has brought remarkable benefits across various domains, including finance, healthcare, cybersecurity, e-commerce, social networks, and scientific discovery. Data mining enables organizations to extract valuable insights from vast amounts of structured and unstructured data, driving innovations and improving decision-making. However, as data mining technologies become more sophisticated and widespread, concerns regarding their security, fairness, interpretability, and robustness are rising. The lack of transparency, bias in decision-making, vulnerability to adversarial attacks, and privacy risks are major challenges that hinder the responsible deployment of data mining solutions in real-world applications. Trustworthy machine learning is emerging as a critical area of research aimed at ensuring that data mining models and algorithms adhere to principles of fairness, explainability, privacy preservation, robustness, and security. As organizations and individuals increasingly depend on automated data-driven decisions, the need for reliable and responsible data mining methodologies has become essential. This workshop seeks to bridge the gap between data mining advancements and trustworthy AI, bringing together researchers and practitioners to discuss the latest developments, theoretical foundations, and practical applications of trustworthy data science. This workshop will focus on exploring the core principles, methodologies, and real-world applications of trustworthy machine learning. Through technical discussions and knowledge exchange, we aim to advance responsible data mining practices that align with societal and ethical expectations.
        </p>

        <h2 id="submission"><strong>Submission of papers</strong></h2>
        <p>We invite submissions on covering but not limited to the following topics:</p>
        <p className="icdm2025-topic-list">
          {submissionTopics.map((topic) => <span key={topic}>- {topic}<br /></span>)}
        </p>
        <p>
          We invite regular research paper submissions of maximum <strong>10 pages</strong>, including all content and references. Submissions must be in PDF and formatted according to ICDM. Accepted papers will be included in ICDM proceedings. Selected best papers will be recommended for publication at international journal, after further extensions and revisions. More detailed information is available in the{" "}
          <a target="_blank" rel="noreferrer" href="https://www3.cs.stonybrook.edu/~icdm2025/cfp.html">IEEE ICDM 2025 Submission Guidelines</a>.
        </p>
        <p>
          <strong>ICDM Submission Site: </strong>
          <a target="_blank" rel="noreferrer" href="https://wi-lab.com/cyberchair/2025/icdm25/scripts/submit.php?subarea=S06&undisplay_detail=1&wh=/cyberchair/2025/icdm25/scripts/ws_submit.php">Trust4ML-ICDM Submission Portal</a>
        </p>
        <p><u>Accepted papers will be included in the ICDM Workshop Proceedings (separate from ICDM Main Conference Proceedings), and each workshop paper requires a full registration. Meanwhile, duplicate submissions of the same paper to more than one ICDM workshop are forbidden.</u></p>

        <h2 id="important-dates"><strong>Important dates</strong></h2>
        <div className="icdm2025-table-wrap">
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
        <p>{papers.map((paper, index) => <span key={paper}>{index + 1}. {paper}<br /></span>)}</p>
      </main>
    </div>
  );
}
