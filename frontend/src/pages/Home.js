import React from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home-page">


      {/* 2. 展示栏（Hero） */}
      <div className="hero-section d-flex flex-column justify-content-center text-center">
        <div className="hero-content">
          <h1 className="hero-title mb-4">Forget About Bureaucracy, Just Accomplish The Mission</h1>
          <p className="hero-subtitle mb-5">
            Welcome to <strong>USYD Trustworthy AI and Data Science Team</strong>
          </p>
          <Link to="/research" className="btn hero-btn btn-lg px-5">
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* 3. 信息栏 */}
      <div className="info-section">
        {/* 3.1 团队介绍 */}
        <div className="team-intro mb-5 py-5 px-4 rounded-3">
          <div className="row gx-4 gy-4 align-items-center">
            <div className="col-lg-7">
              <h2 className="section-title mb-3">Our Team</h2>
              <p className="section-text mb-0">
                We are a multidisciplinary research group at the University of
                Sydney, focusing on safety evaluation, adversarial testing,
                vulnerability discovery, and interpretability of large-scale
                models. Our members come from top labs globally. Together, we
                strive to deploy trustworthy AI systems for real-world impact.
              </p>
            </div>
            <div className="col-lg-5 d-flex justify-content-end">
              <div className="small-box me-3"></div>
              <div className="small-box"></div>
            </div>
          </div>
        </div>

        {/* 3.2 最近新闻 */}
        <div className="recent-news px-4">
          <h3 className="section-title mb-4">Recent News</h3>
          <ul className="list-unstyled">
            <li className="news-item pb-3 mb-3 border-bottom">
              <span className="news-date">2025-06-01</span> — Our paper “Adversarial
              Safety Testing in Large LMs” was accepted at NeurIPS.
            </li>
            <li className="news-item pb-3 mb-3 border-bottom">
              <span className="news-date">2025-05-20</span> — Awarded USyd research
              grant for “Multimodal Adversarial Attack & Defense” project.
            </li>
            <li className="news-item pb-3">
              <span className="news-date">2025-04-15</span> — Presented at ICSE
              “Empirical Study of LLM-based Fuzzing on MOJO Dataset”.
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default Home;
