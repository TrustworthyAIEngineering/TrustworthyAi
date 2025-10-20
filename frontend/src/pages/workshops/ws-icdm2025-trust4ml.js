import React from "react";
import "../../styles/ws-icdm2025-trust4ml.css"
import background from "../../assets/workshopRelated/ICDM_2025_trustworthy_machine_learning_12112025.png"
function WsIcdm2025Trust4ml(){
    return(
        <>


            <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-0">
                <div id = "background">
                    <h1 style={{
                        WebkitTextStroke: "0.2px grey",
                    }}>Workshop on Trustworthy Machine Learning for Fair, Private, Robust, and Explainable Decision-Making</h1>
                    <p style={{
                        WebkitTextStroke: "0.3px whitesmoke",
                    }}>Co-located with 25th IEEE International Conference on Data Mining (ICDM 2025)<br></br> November 12, 2025, Washington DC, USA
                    </p>
                </div>
                <div id = "call">
                    <h3>Call for papers</h3>
                </div>
                <br></br>

                <div className="container py-1 pb-5">
                    {/*<div id = "background">*/}
                    {/*    <h1>Workshop on Trustworthy Machine Learning for Fair, Private, Robust, and Explainable Decision-Making</h1>*/}
                    {/*    <p>Co-located with 25th IEEE International Conference on Data Mining (ICDM 2025)<br></br> November 12, 2025, Washington DC, USA*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div id = "call">*/}
                    {/*    <h3>Call for papers</h3>*/}
                    {/*</div>*/}
                    {/*<br></br>*/}
                    <h2 ><strong>Table of Contents</strong></h2>
                    <nav className="toc w-100 w-lg-75">
                        <ul className="list-unstyled mb-0">
                            {[
                                { id: "introduction", label: "Introduction" },
                                { id: "submission", label: "Submission of papers" },
                                { id: "important-dates", label: "Important dates" },
                                { id: "organizers", label: "Organizers" },
                                { id: "contact", label: "Contact Us" },
                            ].map((item) => (
                                <li key={item.id}>
                                    <a
                                        className="link-primary"
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById(item.id);
                                            if (el) {
                                                window.scrollTo({
                                                    top: el.offsetTop - 100,
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <br></br>
                    <h2 id = "introduction"><strong>Introduction</strong></h2>
                    <p >The increasing reliance on data mining techniques in critical decision-making systems has brought remarkable
                        benefits across various domains, including finance, healthcare, cybersecurity, e-commerce, social networks,
                        and scientific discovery. Data mining enables organizations to extract valuable insights from vast amounts
                        of structured and unstructured data, driving innovations and improving decision-making.
                        However, as data mining technologies become more sophisticated and widespread, concerns regarding their security,
                        fairness, interpretability, and robustness are rising. The lack of transparency, bias in decision-making,
                        vulnerability to adversarial attacks, and privacy risks are major challenges that hinder the responsible
                        deployment of data mining solutions in real-world applications. Trustworthy machine learning is emerging
                        as a critical area of research aimed at ensuring that data mining models and algorithms adhere to principles
                        of fairness, explainability, privacy preservation, robustness, and security. As organizations and individuals
                        increasingly depend on automated data-driven decisions, the need for reliable and responsible data mining methodologies
                        has become essential. This workshop seeks to bridge the gap between data mining advancements and trustworthy AI, bringing
                        together researchers and practitioners to discuss the latest developments, theoretical foundations, and practical applications
                        of trustworthy data science. This workshop will focus on exploring the core principles, methodologies, and real-world applications
                        of trustworthy machine learning. Through technical discussions and knowledge exchange, we aim to advance responsible data
                        mining practices that align with societal and ethical expectations. </p>

                    {/*<h2><strong>Duration</strong></h2>*/}
                    {/*<p>Full-day</p>*/}

                    <h2 id = "submission"><strong>Submission of papers</strong></h2>
                    <p >
                        We invite submissions on covering but not limited to the following topics: <br></br>
                    </p>
                    <p style={{fontSize: "smaller"}}>
                        •	Theoretical foundations of trustworthy machine learning, including the role of fairness, interpretability, and transparency in data mining.<br></br>
                        •	Innovative techniques for trustworthy machine learning in data mining, such as trustworthy graph mining and trustworthy federated learning.<br></br>
                        •	Explainable and interpretable data mining to enhance decision traceability and transparency.<br></br>
                        •	Privacy-preserving data mining, exploring techniques such as differential privacy, federated learning, and secure multi-party computation.<br></br>
                        •	Adversarial robustness in data mining models to improve resilience against adversarial attacks.<br></br>
                        •	Applications of trustworthy machine learning in finance, healthcare, cybersecurity, and social sciences.<br></br>
                        •	Future challenges in trustworthy machine learning, including data quality, ethical considerations, compliance, and responsible data governance.<br></br>
                    </p>
                    <p>We invite regular research paper submissions of maximum <strong>10 pages</strong>, including all content and references. Submissions must be in PDF and formatted according to ICDM. Accepted papers will be included in ICDM proceedings. Selected best papers will be recommended for publication at international journal, after further extensions and revisions.
                        More detailed information is available in the <a target={"_blank"} href = "https://www3.cs.stonybrook.edu/~icdm2025/cfp.html">
                            IEEE ICDM 2025 Submission Guidelines</a>
                    </p>
                    <p><strong>ICDM Submission Site: </strong><a target={"_blank"} href = "https://wi-lab.com/cyberchair/2025/icdm25/scripts/submit.php?subarea=S06&undisplay_detail=1&wh=/cyberchair/2025/icdm25/scripts/ws_submit.php">
                        Trust4ML-ICDM Submission Portal</a></p>
                    <p> <u>Accepted papers will be included in the ICDM Workshop Proceedings (separate from ICDM Main Conference Proceedings), and each workshop paper requires a full registration. Meanwhile, duplicate submissions of the same paper to more than one ICDM workshop are forbidden.</u></p>

                    <h2 id = "important-dates"><strong>Important dates</strong></h2>
                    <div style={{textAlign:"center"}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Paper Submission:</td>
                                    <td>Aug 29, 2025 AoE</td>
                                </tr>
                                <tr>
                                    <td>Notification to Authors:</td>
                                    <td>Sep 18, 2025 AoE</td>
                                </tr>
                                <tr>
                                    <td>Camera-ready:</td>
                                    <td>Sep 25, 2025 AoE</td>
                                </tr>
                                <tr>
                                    <td>Workshop Date:</td>
                                    <td>Nov 12, 2025 AoE</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    {/*<p><strong>Bio of the organizers: </strong></p>*/}
                    {/*<p><strong>Dr. Huaming Chen </strong> is a senior lecturer in the School of Electrical and Computer Engineering at the University of Sydney, Sydney, Australia. He received the Ph.D from University of Wollongong, Australia. His current research interests include trustworthy machine learning, and applied machine learning. He actively serves as Organising Committee, Area Chairs, Senior PC, PC and reviewers for top international journals and conferences.</p>*/}
                    {/*<p><strong>Prof. Na Zou </strong> is an Assistant Professor in Industrial Engineering at University of Houston. Her research is to develop effective, efficient and trustworthy AI/ML algorithms for tackling data challenges arising from large-scale, dynamic and networked data from various real-world information systems. Specifically, Dr. Zou’s research focuses on shortcuts in machine learning, interpretable machine learning, transfer learning, and network modelling and inference. The research projects have resulted in publications at prestigious Journals such as Technometrics, IISE Transactions, ACM Transactions, and IEEE Transactions, also at top Machine Learning Conferences such as ICLR, ICML and NeurIPS.  In the publications, there includes Best Paper Finalists, Best Student Paper Finalists and Best Paper Awards at INFORMS, ICQSR, AMIA. Her work has been featured twice in ISE Magazine and received one student innovation award at AMIA. She is the recipient of IEEE Irv Kaufman Award, Texas A&M Institute of Data Science Career Initiation Fellow and NSF CAREER Award.</p>*/}
                    {/*<p><strong>Prof. Yang Cao </strong> is an Associate Professor at the Department of Computer Science, Institute of Science Tokyo (Science Tokyo, formerly Tokyo Tech), and directing the Trustworthy Data Science and AI (TDSAI) Lab. He is passionate about studying and teaching on algorithmic trustworthiness in data science and AI. Two of his papers on data privacy were selected as best paper finalists in top-tier conferences IEEE ICDE 2017 and ICME 2020. He was a recipient of the IEEE Computer Society Japan Chapter Young Author Award 2019, Database Society of Japan Kambayashi Young Researcher Award 2021. His research projects were/are supported by JSPS, JST, MSRA, KDDI, LINE, WeBank, etc.</p>*/}
                    {/*<p><strong>Prof. Ling Chen </strong> is a Professor in the School of Computer Science at the University of Technology Sydney (UTS), Australia. She obtained her PhD in Computer Engineering from Nanyang Technological University (NTU), Singapore, followed by postdoctoral training at Leibniz University Hannover (L3S Research Centre), Germany. Dr Chen’s research expertise encompasses fundamental machine learning tasks, particularly in representation learning and anomaly detection. Dr Chen has successfully secured multiple competitive research grants, including an ARC Future Fellowship (Level 3), reflecting the significance of her contributions to the field. Her research has garnered recognition and funding from leading industry partners, such as Facebook and TPG Telecom, and government bodies, including the NSW Department of Environment, Climate Change & Water. She is the Research Director of the Australian Artificial Intelligence Institute (AAII), the largest AI research institute in Australia. She currently holds the position of IEEE Task Chair for Data Science and Advanced Analytics.</p>*/}

                    {/*<p><strong>Tentative program committee: </strong></p>*/}
                    {/*<p>*/}
                    {/*    •	Prof. Qi Yu, Rochester Institute of Technology, US<br></br>*/}
                    {/*    •	Prof. Weishi Shi, University of North Texas, US<br></br>*/}
                    {/*    •	Prof. Athman Bouguettaya, Univeristy of Sydney, Australia<br></br>*/}
                    {/*    •	Prof. Richard Allmendinger, University of Manchester, UK<br></br>*/}
                    {/*    •	Dr. Grace Lewis, Carnegie Mellon University, US<br></br>*/}
                    {/*    •	Prof. Andrea Stocco, University of Munich, Germany<br></br>*/}
                    {/*    •	Dr. Adriana Simona Mihaita, The University of Technology Sydney, Australia<br></br>*/}
                    {/*    •	Dr. Xilu Wang, Bielefeld University, Germany<br></br>*/}
                    {/*    •	Prof. Rutger Willem Vervoort, The University of Sydney, Australia<br></br>*/}
                    {/*    •	Prof. Jia Zhang, Southern Methodist Unviersity, US<br></br>*/}
                    {/*    •	Prof. Incheon Paik, University of Aizu, Japan<br></br>*/}
                    {/*    •	Prof. Neil Yen, University of Aizu, Japan<br></br>*/}
                    {/*    •	Prof. Marinka Zitnik, Harvard University, US<br></br>*/}

                    {/*</p>*/}
                    <h2 id = "organizers"><strong>Organizers</strong></h2>
                    <p>•    Huaming Chen (USYD)<br></br>
                        •   Na Zou (University of Houston)<br></br>
                        •   Yang Cao (Science Tokyo)<br></br>
                        •   Ling Chen (University of Technology Sydney)
                    </p>

                    <h2 id = "contact"><strong>Contact Us</strong></h2>
                    <p>
                        Huaming Chen, Senior Lecturer, School of Electrical and Computer Engineering, THE UNIVERSITY OF
                        SYDNEY, Room 409A, J03 | The University of Sydney | NSW | 2006, Email: <a href="mailto:huaming.chen@sydney.edu.au">
                        huaming.chen@sydney.edu.au</a>
                    </p>
                </div>

            </div>
        </>
    )
}

export default WsIcdm2025Trust4ml;