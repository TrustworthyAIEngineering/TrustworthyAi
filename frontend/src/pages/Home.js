import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogsData";
import { acknowledgements, researchThemes } from "../data/researchData";
import "../styles/Home.css";

const featuredNews = [...blogsData]
  .filter((item) => item.image)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

export default function Home() {
  const [newsIndex, setNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [isInteracting, setIsInteracting] = useState(false);
  const activeNews = featuredNews[newsIndex];

  useEffect(() => {
    if (isPaused || isInteracting || featuredNews.length < 2) return undefined;
    const timer = setInterval(() => {
      setNewsIndex((index) => (index + 1) % featuredNews.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, isInteracting]);

  return (
    <main className="home-page">
      <section className="home-hero home-wrap" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="home-eyebrow">USYD Trustworthy AI and Data Science Team</p>
          <h1 id="home-title">Understanding, <br />Securing and Engineering <br /><span>Trustworthy AI</span></h1>
          <div className="home-heading-rule" aria-hidden="true" />
          <p className="home-lead">
            We study how AI works, how to make it dependable, and how to build systems that serve people.
            From the internals of a model to its actions in the world, we connect understanding with practice.
          </p>
          <div className="home-actions">
            <Link className="home-button" to="/home#research">Our research</Link>
            <Link className="home-text-link" to="/members">Meet the team <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        {activeNews && (
          <aside className="home-news" aria-label="Latest news"
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onFocus={() => setIsInteracting(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
            }}>
            <div className="home-news-topline"><p className="home-eyebrow">From the team</p><span>{String(newsIndex + 1).padStart(2, "0")} / {String(featuredNews.length).padStart(2, "0")}</span></div>
            <Link className="home-news-story" to={`/news?id=${activeNews.id}`}>
              <img src={activeNews.image} alt={activeNews.imageAlt || activeNews.title} width="1600" height="900" />
              <div className="home-news-copy">
                <time dateTime={activeNews.date}>{activeNews.date}</time>
                <h2>{activeNews.title}</h2>
                <span className="home-news-read">Read the story <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
            {featuredNews.length > 1 && (
              <div className="home-news-controls">
                <div className="home-news-dots">
                  {featuredNews.map((item, index) => (
                    <button key={item.id} type="button" className={index === newsIndex ? "is-active" : ""}
                      onClick={() => setNewsIndex(index)} aria-label={`Show story ${index + 1}: ${item.title}`}
                      aria-pressed={index === newsIndex} />
                  ))}
                </div>
                <button type="button" className="home-news-pause" onClick={() => setIsPaused((paused) => !paused)}
                  aria-label={isPaused ? "Resume news slideshow" : "Pause news slideshow"}>
                  {isPaused ? "Play" : "Pause"}
                </button>
                <button type="button" className="home-news-arrow" aria-label="Previous story"
                  onClick={() => setNewsIndex((index) => (index - 1 + featuredNews.length) % featuredNews.length)}>←</button>
                <button type="button" className="home-news-arrow" aria-label="Next story"
                  onClick={() => setNewsIndex((index) => (index + 1) % featuredNews.length)}>→</button>
              </div>
            )}
          </aside>
        )}
      </section>

      <section id="research" className="home-research home-wrap" aria-labelledby="home-research-title">
        <header className="home-section-heading">
          <p className="home-eyebrow">Our research</p>
          <h2 id="home-research-title">Three themes.<br />One shared purpose.</h2>
          <div className="home-heading-rule" aria-hidden="true" />
          <p>Understanding models. Building dependable systems. Supporting better decisions.</p>
        </header>
        <div className="home-theme-list">
          {researchThemes.map((theme, index) => (
            <article id={theme.id} className="home-theme" key={theme.id} aria-labelledby={`home-${theme.id}`}>
              <span className="home-theme-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="home-theme-heading">
                <h3 id={`home-${theme.id}`}>{theme.title}</h3>
                <p className="home-theme-question">{theme.question}</p>
              </div>
              <div className="home-theme-body">
                <p>{theme.description}</p>
                <ul>{theme.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-practice" aria-labelledby="home-practice-title">
        <div className="home-wrap home-practice-grid">
          <div>
            <p className="home-eyebrow">A connected approach</p>
            <h2 id="home-practice-title">From understanding<br />to practice.</h2>
            <div className="home-heading-rule" aria-hidden="true" />
          </div>
          <div>
            <p>Interpretability helps us investigate agent failures. Security and evaluation help us build
              dependable systems. Applications reveal the questions that matter to the people using them.</p>
            <p>Our three themes inform one another, bringing fundamental research and engineering closer together.</p>
            <Link className="home-text-link" to="/publications">Our publications <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section id="acknowledgements" className="home-acknowledgements home-wrap" aria-labelledby="home-ack-title">
        <header className="home-section-heading">
          <p className="home-eyebrow">Acknowledgements</p>
          <h2 id="home-ack-title">The people behind<br />the progress.</h2>
          <div className="home-heading-rule" aria-hidden="true" />
          <p>Research is a shared effort. We are grateful to everyone who helps make ours possible.</p>
        </header>
        <div className="home-ack-grid">
          {acknowledgements.map((group) => (
            <section key={group.id} aria-labelledby={`home-ack-${group.id}`}>
              <h3 id={`home-ack-${group.id}`}>{group.title}</h3>
              <p>{group.description}</p>
              {group.entries.length > 0 && <ul>{group.entries.map((entry) => <li key={entry}>{entry}</li>)}</ul>}
            </section>
          ))}
        </div>
      </section>

      <section className="home-contact-band" aria-labelledby="home-contact-title">
        <div className="home-wrap home-contact-inner">
          <div>
            <p className="home-eyebrow">Work with us</p>
            <h2 id="home-contact-title">Good research starts<br />with a conversation.</h2>
            <p>We welcome shared questions, new perspectives, and collaborations across our research themes.</p>
          </div>
          <Link className="home-button" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
