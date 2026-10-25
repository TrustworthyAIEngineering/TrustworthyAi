import conferenceLogos from "../assets/blogs/neurips-icdm-logos.png";

const blogsData = [

  {
    id: "blog-5",
    title: "Four Papers, Two Conferences: Celebrating NeurIPS and ICDM 2026",
    date: "2026-10-25",
    author: "USYD Trustworthy AI Team",
    summary:
      "Two NeurIPS papers for Qingwen, an ICDM paper for Linghan, and a joint ICDM paper for Zhaoge and Yitian — plenty to celebrate with the team.",
    image: conferenceLogos,
    imageAlt: "NeurIPS logo on the left and ICDM 2026 Shenyang, China logo on the right",
    paperGroups: [
      {
        teamMembers: "Qingwen Zeng",
        venue: "NeurIPS 2026 · Main Conference",
        titles: [
          "ScopeSAE: Model-Scope Feature Discovery with Interpretable Layer Selection",
          "Latent Action Reparameterization for Efficient Agent Inference"
        ]
      },
      {
        teamMembers: "Linghan Huang",
        venue: "ICDM 2026 · Main Conference",
        titles: ["From Prompt to Perturbation: An Adaptive Framework for Voice-Based Jailbreaks on Audio LLMs"]
      },
      {
        teamMembers: "Zhaoge Bi & Yitian Yang",
        venue: "ICDM 2026 · Main Conference",
        titles: ["FraudBench: Protocol-Sensitive Benchmarking of Adversarial Robustness for Financial Risk Assessment"]
      }
    ],
    content: [
      "Some good news to share from the team: four papers have been accepted to the NeurIPS and ICDM 2026 main conferences!",
      "Qingwen Zeng has two papers accepted to NeurIPS 2026. At ICDM 2026, Linghan Huang has one accepted paper, and Zhaoge Bi and Yitian Yang have a joint paper accepted. A big congratulations to Qingwen, Linghan, Zhaoge, Yitian, and their co-authors!",
      "An acceptance is a lovely moment to pause and appreciate the work that came before it: the ideas that needed rethinking, the experiments that raised new questions, and the drafts made better by a colleague's feedback. We're grateful to everyone who helped these papers take shape.",
      "For now, it's time to celebrate. Next comes the chance to share the work, hear fresh perspectives, and catch up with the wider research community at NeurIPS and ICDM. We're looking forward to it."
    ]
  },
  {
    id: "blog-4",
    title:
      "Bootstrapped Exploration with Causal Reasoning Accepted to ICML 2026",
    date: "2026-05-01",
    author: "USYD Trustworthy AI Team",
    summary:
      "Qingwen, Zhaoge, Lining, and Yitian's work on adaptive forecasting agents has been accepted to ICML 2026.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    content: [
      "We are delighted to share that “Bootstrapped Exploration with Causal Reasoning: A Training Paradigm for Adaptive Forecasting Agent” has been accepted to ICML 2026.",
      "Authored by Qingwen Zeng, Zhaoge Bi, Lining Chen, and Yitian Yang, this work studies how causal reasoning can support more adaptive forecasting agents. The paper proposes a training paradigm that encourages agents to explore, reason, and improve forecasting decisions under changing conditions.",
      "Congratulations to Qingwen, Zhaoge, Lining, and Yitian on this exciting milestone. We look forward to seeing the work presented to the machine learning community at ICML."
    ]
  },
  {
    id: "blog-3",
    title:
      "Full-Stack Development Education Paper Accepted to FSE Education Track",
    date: "2026-03-18",
    author: "USYD Trustworthy AI Team",
    summary:
      "Haolin, Jiawen, Zhaoge, and Linghan's paper on continuous interactive learning in the AI era has been accepted to the FSE Education Track.",
    image:
      "https://conf.researchr.org/getImage/fse-2026/carousel/concordiaSGWBuilding.jpg?1744943236000",
    content: [
      "We are pleased to announce that “Deliverables Are Not Understanding in the AI Era: Reforming Full-Stack Development Education with Continuous Interactive Learning” has been accepted to the FSE Education Track.",
      "The paper, authored by Haolin Jin, Jiawen Wen, Zhaoge Bi, and Linghan Huang, reflects on how software engineering education should evolve as AI tools become part of everyday development workflows. It argues for learning processes that emphasize continuous interaction, feedback, and genuine understanding rather than deliverables alone.",
      "Congratulations to Haolin, Jiawen, Zhaoge, and Linghan on this achievement. Their work contributes to an important conversation about how we teach and assess full-stack development in the AI era."
    ]
  },
  {
    id: "blog-2",
    title:
      "Research Excellence: Taozhao and Linghan's Work Accepted to IFIP SEC 2026",
    date: "2026-02-28",
    author: "USYD Trustworthy AI Team",
    summary:
      "We are proud to announce that Taozhao and Linghan's research has been selected for the prestigious 41st IFIP SEC International Conference.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    content: [
      "The USYD Trustworthy AI Team is thrilled to share some exciting news: Taozhao and Linghan's latest research paper has been officially accepted to the 41st IFIP SEC International Information Security and Privacy Conference (SEC 2026).",
      "As one of the world's leading forums for cybersecurity and privacy, IFIP SEC is highly competitive. This acceptance underscores the technical rigor and innovative approach our team brings to solving critical security challenges.",
      "Congratulations to Taozhao and Linghan on this significant milestone. We look forward to their presentation and to continuing our contributions to the global trustworthy AI and security community."
    ]
  },
  {
    id: "blog-1",
    title: "Celebrating Chinese New Year",
    date: "2026-02-17",
    author: "USYD Trustworthy AI Team",
    summary:
      "Wishing everyone a joyful Chinese New Year filled with health, happiness, and meaningful moments.",
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Happy Chinese New Year from the USYD Trustworthy AI Team.",
      "We are grateful for the support from our colleagues, students, and collaborators. May the new year bring peace, prosperity, and new research breakthroughs.",
      "We look forward to welcoming the year with renewed energy and exciting progress in trustworthy AI."
    ]
  },
  {
    id: "blog-0-1",
    title: "Long Paper by Pengyue, Jiawen, and Linghan Accepted to WWW 2026",
    date: "2026-01-14",
    author: "USYD Trustworthy AI Team",
    summary:
      "We are thrilled to announce that our team's long paper has been accepted to The Web Conference (WWW 2026), marking a significant contribution to the field.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    content: [
      "The USYD Trustworthy AI Team is proud to share that a long research paper authored by Pengyue, Jiawen, and Linghan has been officially accepted to The Web Conference 2026 (WWW 2026).",
      "As a premier international forum for web technology and intelligence, WWW is known for its rigorous selection process. The acceptance of this long paper highlights the depth, innovation, and potential impact of our team's research on the global stage.",
      "Congratulations to Pengyue, Jiawen, and Linghan on this outstanding achievement. We look forward to presenting our findings and engaging with the global research community in the upcoming conference."
    ]
  }
];

export default blogsData;
