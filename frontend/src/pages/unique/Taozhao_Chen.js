import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Qingwen_Zeng.css";
import "../../styles/Linghan_Huang.css";

export default function Taozhao_Chen() {
    const interests = [
        "Vision-Language-Action (VLA) Systems",
        "Trustworthy Embodied AI",
        "Machine Unlearning",
        "AI Safety and Reliability",
    ];

    const publications = [
        {
            title: (
                <>
                Feature-Selective Representation Misdirection for Machine Unlearning
                </>
            ),
            authors:
                "Taozhao Chen, Linghan Huang, Kim-Kwang Raymond Choo, Huaming Chen",
            venue:
                "IFIP TC11 SEC/WG11.8 WISE 2026 Conference",
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
                alt="Taozhao Chen"
                className="profile-avatar-lh"
                />
                <h1 className="qz-name">Taozhao Chen</h1>
                <p className="profile-role-lh">PhD Student & Student Researcher</p>
            </div>
            </header>

            <section className="qz-section">
            <h2 className="qz-section-title">Contact</h2>
            <p className="qz-section-text">tche8294@uni.sydney.edu.au</p>
            </section>
            <div className="profile-section-lh">
            <h3 className="profile-section-title-lh">Affiliation</h3>
            <p className="profile-section-text-lh">
                School of Electrical and Computer Engineering, The University of Sydney
            </p>
            </div>
            <section className="qz-section qz-interest-section">
            <div>
                <h2 className="qz-section-title">Research Interests</h2>
                <p className="qz-section-text">
                Taozhao's research focuses on trustworthy Vision-Language-Action (VLA)
                systems, embodied AI, and machine unlearning, with particular interests in
                reliability, evaluation, and safety in foundation model-based robotic systems.
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
        <div className="profile-section-lh">
          <h3 className="profile-section-title-lh">Education</h3>
          <p className="profile-section-text-lh">
            Bachelor of Software Engineering Honours, The University of Sydney.
            Currently pursuing a Doctor of Philosophy at The University of Sydney.
          </p>
        </div>



            {/* <section className="qz-section">
            <h2 className="qz-section-title">Links</h2>
            <a
                href="https://scholar.google.com/citations?user=zzlhX4UAAAAJ&hl=en"
                className="qz-scholar-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Google Scholar
            </a>
            </section> */}
        </main>
        </div>
    );
}
