import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Huaming_Chen from "./pages/Huaming_Chen";
import "./App.css"
function App() {
  return (
      <>
          <Router>
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
                          <ul className="navbar-nav ms-auto">
                              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/research">Research</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/publications">Publications</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                          </ul>
                      </div>
                  </nav>
              </div>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/members" element={<Members />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/members/huaming-chen" element={<Huaming_Chen />} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
