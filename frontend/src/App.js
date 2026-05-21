import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Huaming_Chen from "./pages/unique/Huaming_Chen";
import Linghan_Huang from "./pages/unique/Linghan_Huang";
import Qingwen_Zeng from "./pages/unique/Qingwen_Zeng";
import Haolin_Jin from "./pages/unique/Haolin_Jin";
import Taozhao_Chen from "./pages/unique/Taozhao_Chen";
import Zhaoge_Bi from "./pages/unique/Zhaoge_Bi";
import Lining_Chen from "./pages/unique/Lining_Chen";
import Jiawen_Wen from "./pages/unique/Jiawen_Wen";
import Yitian_Yang from "./pages/unique/Yitian_Yang";
import Pengyue_Yang from "./pages/unique/Pengyue_Yang";
import "./App.css";
import ICDM2025Workshop from "./pages/workshops/ICDM2025Workshop";
import ICDM2026Workshop from "./pages/workshops/ICDM2026Workshop";
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

  useLayoutEffect(() => {
    if (location.pathname.startsWith("/members/")) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
        <Route path="/events/workshops/icdm-workshop-2026" element={<ICDM2026Workshop />} />
        <Route path="/events/workshops/icdm-workshop-2025" element={<ICDM2025Workshop />} />
        <Route path="/news" element={<Blogs />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members/huaming-chen" element={<Huaming_Chen />} />
        <Route path="/members/linghan-huang" element={<Linghan_Huang />} />
        <Route path="/members/qingwen-zeng" element={<Qingwen_Zeng />} />
        <Route path="/members/haolin-jin" element={<Haolin_Jin />} />
        <Route path="/members/taozhao-chen" element={<Taozhao_Chen />} />
        <Route path="/members/zhaoge-bi" element={<Zhaoge_Bi />} />
        <Route path="/members/lining-chen" element={<Lining_Chen />} />
        <Route path="/members/jiawen-wen" element={<Jiawen_Wen />} />
        <Route path="/members/yitian-yang" element={<Yitian_Yang />} />
        <Route path="/members/pengyue-yang" element={<Pengyue_Yang />} />
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
