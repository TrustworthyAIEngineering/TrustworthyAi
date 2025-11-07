// src/pages/workshop/WorkshopFactory.jsx
import React from "react";
import "../../../styles/Workshop_template_1.css";
import background from "../../../assets/workshopRelated/ICDM_2025_trustworthy_machine_learning_12112025.png";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
/** @param {{ data: {
 *   hero:{title:string,subtitle:string,datePlace:string},
 *   toc:{id:string,label:string}[],
 *   sections:{
 *     introduction:string,
 *     submissionIntro:string, submissionTopics:string[],
 *     submissionDetails:string, submissionLinks:{icdmGuidelines:string, portal:string},
 *     policyNote:string,
 *     importantDates:{label:string,value:string}[],
 *     organizers:string[],
 *     contact:{name:string,title:string,orgLine:string,address:string,email:string}
 *   }
 * }}} props */

export default function workshop_template_1({ data }) {
    const cfg = data;

    const S = (h) =>
        DOMPurify.sanitize(h ?? "", {
            ALLOWED_TAGS: ["strong", "em", "u", "br", "a", "span", "i", "b"],
            ALLOWED_ATTR: ["href", "target", "rel"]
        });

    const safe = {
        heroTitle: parse(S(cfg.hero?.title)),
        heroSubtitle: parse(S(cfg.hero?.subtitle)),
        heroDatePlace: parse(S(cfg.hero?.datePlace)),
        callTitle: parse(S((cfg.call && cfg.call.title) || "Call for papers")),
        intro: parse(S(cfg.sections?.introduction)),
        submissionIntro: parse(S(cfg.sections?.submissionIntro)),
        submissionDetails: parse(S(cfg.sections?.submissionDetails)),
        policyNote: parse(S(cfg.sections?.policyNote)),
        topics: (cfg.sections?.submissionTopics || []).map((t) => parse(S(t))),
        importantDates: (cfg.sections?.importantDates || []).map((d) => ({
            label: parse(S(d.label)),
            value: parse(S(d.value))
        })),
        organizers: (cfg.sections?.organizers || []).map((o) => parse(S(o))),
        contact: {
            name: parse(S(cfg.sections?.contact?.name)),
            title: parse(S(cfg.sections?.contact?.title)),
            orgLine: parse(S(cfg.sections?.contact?.orgLine)),
            address: parse(S(cfg.sections?.contact?.address)),
            email: cfg.sections?.contact?.email // 邮箱保持纯文本用于 mailto
        },
        paperlist:(cfg.sections?.paperlist || []).map((o) => parse(S(o))),
        schedules:(cfg.sections?.schedules || []).map((o) => parse(S(o)))
    };



    return (
        <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-0">
            <div
                id="background"
                style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <h1 style={{ WebkitTextStroke: "0.2px grey" }}>{safe.heroTitle}</h1>
                <p style={{ WebkitTextStroke: "0.3px whitesmoke" }}>
                    {safe.heroSubtitle}
                    <br />
                    {safe.heroDatePlace}
                </p>
            </div>

            <div id="call">
                <h3>{safe.callTitle}</h3>
            </div>

            <div className="container py-1 pb-5">
                <h2>
                    <strong>Table of Contents</strong>
                </h2>
                <nav className="toc w-100 w-lg-75">
                    <ul className="list-unstyled mb-0">
                        {cfg.toc.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="link-primary"
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const el = document.getElementById(item.id);
                                        if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <h2 id="introduction">
                    <strong>Introduction</strong>
                </h2>
                <p>{safe.intro}</p>

                <h2 id="submission">
                    <strong>Submission of papers</strong>
                </h2>
                <p>{safe.submissionIntro}</p>
                <p style={{ fontSize: "smaller" }}>
                    {safe.topics.map((node, i) => (
                        <span key={i}>
            • {node}
                            <br />
          </span>
                    ))}
                </p>
                <p>
                    {safe.submissionDetails}{" "}
                    More detailed information is available in the{" "}
                    <a target="_blank" rel="noreferrer" href={cfg.sections.submissionLinks.icdmGuidelines}>
                        IEEE ICDM 2025 Submission Guidelines
                    </a>
                    .
                </p>
                <p>
                    <strong>ICDM Submission Site: </strong>
                    <a target="_blank" rel="noreferrer" href={cfg.sections.submissionLinks.portal}>
                        Trust4ML-ICDM Submission Portal
                    </a>
                </p>
                <p>
                    <u>{safe.policyNote}</u>
                </p>

                <h2 id="important-dates">
                    <strong>Important dates</strong>
                </h2>
                <div style={{ textAlign: "center" }}>
                    <table>
                        <tbody>
                        {safe.importantDates.map((d, i) => (
                            <tr key={i}>
                                <td>{d.label}</td>
                                <td>{d.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <h2 id="organizers">
                    <strong>Organizers</strong>
                </h2>
                <p>
                    {safe.organizers.map((o, i) => (
                        <span key={i}>
                        • {o}
                                        <br />
                      </span>
                    ))}
                </p>

                <h2 id="contact">
                    <strong>Contact Us</strong>
                </h2>
                <p>
                    {safe.contact.name}, {safe.contact.title}, {safe.contact.orgLine}, {safe.contact.address}, Email:{" "}
                    <a href={`mailto:${safe.contact.email}`}>{safe.contact.email}</a>
                </p>

                <h2 id = "paperlist">
                    <strong>Paper List</strong>
                </h2>
                <p>
                    {safe.paperlist.map((o, i) => (
                        <span key={i}>
                    {i+1}. {o}
                            <br />
                  </span>
                    ))}
                </p>

                <h2 id = "schedules">
                    <strong>Schedules</strong>
                </h2>
                <p>
                    {safe.schedules.map((o, i) => (
                        <span key={i}>
                     {o}
                            <br />
                  </span>
                    ))}
                </p>

            </div>
        </div>
    );
}
