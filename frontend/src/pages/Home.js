// src/pages/HomePage.jsx
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import RenderBlock from "./RenderBlock";
import "../styles/Home.css";
import { API_BASE } from "./config";
import { MapMyVisitorsGlobe, MapMyVisitorsMap } from "./config";
import main_img from "../assets/general/test_main_img.png";
import hero_alt_1 from "../assets/general/ai-vs-human-feature.jpg";
import hero_alt_2 from "../assets/general/9.webp";
function Home() {
  const [open, setOpen] = useState(false);
  const bufferRef = useRef("");
  const TARGET = "trust";
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    {
      src: hero_alt_1,
      alt: "Human-centric AI safety research",

    },
    {
      src: hero_alt_2,
      alt: "Data science and AI systems",

    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);
  
  // useEffect(() => {
  //   const onKeyDown = async (e) => {
  //     // 回车触发匹配
  //     if (e.key === "Enter") {
  //       console.log(bufferRef.current)
  //       if (bufferRef.current.trim().includes(TARGET)) {
  //         await fetch(`${API_BASE}/api/openAdminLogin/${bufferRef.current}`, { method: "GET" })
  //           .then((response) => {
  //             if (response.ok) {
  //               console.log(bufferRef.current)
  //               alert(":)");
  //               bufferRef.current = "";
  //             } else {
  //               console.log("nope, ",bufferRef.current)
  //             }
  //           })
  //       }
  //       bufferRef.current = "";
  //       return;
  //     }
  //
  //     // 允许字母与空格
  //     if (e.key.length === 1) {
  //       const ch = e.key.toLowerCase();
  //       // allow a-z, space and number in one line
  //       if (/[a-z 0-9]/.test(ch)) {
  //         bufferRef.current = (bufferRef.current + ch);
  //       }
  //       return;
  //     }
  //
  //     // 可选：Backspace 回退
  //     if (e.key === "Backspace") {
  //       bufferRef.current = bufferRef.current.slice(0, -1);
  //     }
  //   };
  //
  //   window.addEventListener("keydown", onKeyDown);
  //   return () => window.removeEventListener("keydown", onKeyDown);
  // }, []);

  return (
    
      <>
        <div id="whole" className="home-page d-flex flex-column justify-content-start align-items-center min-vh-100">
          <section className="home-hero container">
            <div className="home-hero-text my-5">
              <p className="home-kicker">USYD Trustworthy AI and Data Science Team</p>
              <h1>Building AI that earns trust in the real world.</h1>
              <p className="home-subtitle">
                We are a multidisciplinary research group focused on safety evaluation, adversarial testing,
                vulnerability discovery, interpretability, and governance of large-scale AI systems.
              </p>
              <div className="home-cta">
                <Link className="btn btn-dark" to="/members">Meet the Team</Link>
                <Link className="btn btn-outline-dark" to="/publications">See Publications</Link>
              </div>
              {/* <div className="home-quicklinks">
                <Link to="/events">Events</Link>
                <Link to="/news">Blogs</Link>
                <Link to="/contact">Contact Us</Link>
              </div> */}
            </div>

            <div className="home-carousel">
              <div className="carousel-frame">
                <img
                  src={carouselImages[carouselIndex].src}
                  alt={carouselImages[carouselIndex].alt}
                  className="carousel-image"
                />
                <div className="carousel-controls">
                  <button
                    className="carousel-btn"
                    onClick={() =>
                      setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
                    }
                    aria-label="Previous image"
                  >
                    Prev
                  </button>
                  <div className="carousel-dots">
                    {carouselImages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`carousel-dot ${idx === carouselIndex ? "active" : ""}`}
                        onClick={() => setCarouselIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    className="carousel-btn"
                    onClick={() =>
                      setCarouselIndex((prev) => (prev + 1) % carouselImages.length)
                    }
                    aria-label="Next image"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="home-section container">
            <div className="section-grid">
              <div className="section-copy">
                <h2>Our Mission</h2>
                <p>
                  We aim to deliver trustworthy AI by combining rigorous evaluation with actionable safety and
                  interpretability methods. Our work bridges theory and deployment to ensure AI systems are reliable,
                  secure, and aligned with human values.
                </p>
                <p>
                  The team collaborates with academic and industry partners to translate research into tools,
                  benchmarks, and best practices for responsible AI adoption.
                </p>
              </div>
              <div className="section-cards">
                <div className="info-card">
                  <h3>Safety Evaluation</h3>
                  <p>Stress-testing models across adversarial, uncertainty, and out-of-distribution conditions.</p>
                  {/* <Link to="/publications">Recent Results</Link> */}
                </div>
                <div className="info-card">
                  <h3>Interpretability</h3>
                  <p>Understanding internal representations and decision pathways for transparent AI.</p>
                  {/* <Link to="/publications">View Papers</Link> */}
                </div>
                <div className="info-card">
                  <h3>Responsible Deployment</h3>
                  <p>Governance, auditing, and human oversight across the AI lifecycle.</p>
                  {/* <Link to="/events">Upcoming Talks</Link> */}
                </div>
              </div>
            </div>
          </section>

          <section className="home-section home-feature container">
            <div className="feature-row">
              <div className="feature-highlight">
                <h2>What is Trustworthy AI?</h2>
                <p>
                  Trustworthy AI is a framework that ensures AI systems are technically robust, ethically grounded,
                  and socially accountable. It emphasizes reliability, fairness, transparency, and privacy with clear
                  governance and human oversight from development to deployment.
                </p>
              </div>
              <div className="feature-links">
                <Link className="feature-link" to="/members">
                  <span>People</span>
                  <p>Meet the researchers and collaborators behind our work.</p>
                </Link>
                <Link className="feature-link" to="/publications">
                  <span>Publications</span>
                  <p>Explore our latest papers, preprints, and datasets.</p>
                </Link>
                <Link className="feature-link" to="/events">
                  <span>Events</span>
                  <p>Workshops, seminars, and upcoming presentations.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="home-section home-cta-band">
            <div className="container cta-band-inner">
        
              <h2>Collaborate with us</h2>
              <p>We welcome partnerships on trustworthy AI evaluation, policy, and deployment.</p>
         
              <Link className="btn btn-light" to="/contact">Start a Conversation</Link>
            </div>
          </section>


        </div>
      </>
  );
}

export default Home;
