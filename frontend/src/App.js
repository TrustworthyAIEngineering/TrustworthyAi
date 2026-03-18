import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Huaming_Chen from "./pages/unique/Huaming_Chen";
import "./App.css";
import WorkshopFactory from "./pages/workshops/WorkshopFactory";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import usydlogowhite from "../src/assets/general/UoS-CMYK-standard-logo-mono-reversed (1).png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const el = document.getElementById("navigation-bar");
    if (!el) return;

    const threshold = el.getBoundingClientRect().height;
    const onScroll = () => {
      if (window.scrollY > threshold) el.classList.add("shrink");
      else el.classList.remove("shrink");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      <div id="navigation-bar" className={menuOpen ? "menu-open" : ""}>
        <div className="nav-inner">
          <div
            id="first-row"
            className="container w-100 my-4 d-flex justify-content-between align-items-end flex-row"
          >
            <img
              style={{ height: "auto" }}
              src={usydlogowhite}
              alt="The University of Sydney logo"
            />
            <p id="web-title">USYD Trustworthy AI and Data Science Team</p>
            <button
              type="button"
              className="nav-menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="second-row" className="container py-0 my-0 justify-content-start">
            <ul className="navbar-nav w-100 flex-row">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/publications">Publications</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/news">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/workshops/:_destination_id" element={<WorkshopFactory />} />
        <Route path="/news" element={<Blogs />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members/huaming-chen" element={<Huaming_Chen />} />
      </Routes>

      <footer className="text-center py-3 bg-dark mt-auto">
        <p className="mb-0" style={{ color: "white" }}>
          &copy; 2025 Trustworthy AI Team, The University of Sydney.
        </p>
      </footer>
    </>
  );
}

export default App;
