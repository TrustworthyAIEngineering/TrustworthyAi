import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Huaming_Chen from "./pages/unique/Huaming_Chen";
import "./App.css"
import WorkshopFactory from "./pages/workshops/WorkshopFactory";
import Workshop_template_1 from "./pages/workshops/templates/Workshop_template_1";
import Blogs from "./pages/Blogs";
import ICDM2025 from "../src/assets/workshopRelated/icdm2025logosmall.png"
import Events from "./pages/Events";
import usydlogo from "../src/assets/general/Sydney-e1659665140158-300x188.png"
import usydlogowhite from "../src/assets/general/UoS-CMYK-standard-logo-mono-reversed (1).png"
import { useEffect } from "react";

function App() {

    useEffect(() => {
        const el = document.getElementById("navigation-bar");
        if (!el) return;

        const THRESHOLD = el.getBoundingClientRect().height; // 滚动超过多少 px 开始缩
        console.log("threshold: ",THRESHOLD, " scrollY: ",window.scrollY)
        const onScroll = () => {
            if (window.scrollY > THRESHOLD) el.classList.add("shrink");
            else el.classList.remove("shrink");
            console.log("threshold: ",THRESHOLD, " scrollY: ",window.scrollY)
        };

        onScroll(); // 首次执行
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
          {/*<Router >*/}
              {/*Navigation bar that applied to every page*/}
              <div id="navigation-bar">
                  <div className="nav-inner">
                      <div id={"first-row"} className="container w-100 my-4 d-flex justify-content-between align-items-end flex-row">
                          <img style={{height:"auto"}} src={usydlogowhite} />
                          <p id="web-title">USYD Trustworthy AI and Data Science Team</p>
                      </div>
                      <div id={"second-row"} className="container py-0 my-0 justify-content-start">
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
                  <Route path={"/events"} element={<Events />} />
                  <Route path="/events/workshops/:_destination_id" element={<WorkshopFactory />} />

                  {/*<Route path={"/workshops"} element={<WorkshopFactory />} />*/}
                  <Route path="/news" element={<Blogs />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/publications" element={<Publications />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/members/huaming-chen" element={<Huaming_Chen />} />

              </Routes>
          {/*</Router>*/}

          <footer className="text-center py-3 bg-dark mt-auto">
              <p className="mb-0" style={{color: "white"}}>&copy; 2025 Trustworthy AI Team, The University of Sydney.</p>
          </footer>
      </>
    );
}

export default App;
