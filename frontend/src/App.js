import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Huaming_Chen from "./pages/unique/Huaming_Chen";
import "./App.css"
import Workshops from "./pages/Workshops";
import News from "./pages/News";
function App() {
  return (
      <>
          <Router>

              {/*Navigation bar that applied to every page*/}
              <div className="container-fluid py-3" id = "navbar-div">
                  <nav className="navbar navbar-expand-lg px-5">
                      {/* Toggle Button for Mobile */}
                      <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNav"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      {/* Collapsible Navigation Menu */}
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav ms-auto d-flex align-items-center">

                              <li className="nav-item">
                                  <Link className="nav-link fs-3 glow-text" to="/workshops">
                                      ICDM 2025 Workshop: Trust4ML
                                  </Link>
                              </li>


                              <li className="nav-item border-start border-black mx-2" style={{ height: '50px' }}></li>
                              <li className="nav-item"><Link className="nav-link" to="/home">USYD Trustworthy AI Team</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/research">Research</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/publications">Publications</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                          </ul>
                      </div>
                  </nav>
              </div>



              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/members" element={<Members />} />

                <Route path={"/"} element={<Workshops />} />
                <Route path={"/workshops"} element={<Workshops />} />

                <Route path="/news" element={<News />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/members/huaming-chen" element={<Huaming_Chen />} />
              </Routes>
          </Router>

          <footer className="text-center py-3 bg-dark mt-auto">
              <p className="mb-0" style={{color: "white"}}>&copy; 2025 Trustworthy AI Team, The University of Sydney.</p>
          </footer>
      </>
  );
}

export default App;
