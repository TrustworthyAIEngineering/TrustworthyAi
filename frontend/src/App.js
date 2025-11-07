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
function App() {
    function showDevtoolsBanner() {
        const title = 'USYD Trustworthy AI Team';
        const s1 = 'font-size:20px;font-weight:700;color:#fff;background:#000;padding:8px 12px;';
        console.log('%c' + title, s1);
        console.log('https://trustworthy-ai.com.au');
    }
    // 1) 页面加载就打印
    showDevtoolsBanner();
  return (
      <>
          {/*<Router >*/}

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

                              {/* Hover dropdown */}
                              <li className="nav-item dropdown position-relative">
                                  {/* 主链接：始终能点击导航 */}
                                  <Link className="nav-link dropdown-anchor" to="/home">
                                      USYD Trustworthy AI Team
                                  </Link>

                                  {/* 下拉菜单 */}
                                  <ul className="dropdown-menu">
                                      <li><Link className="dropdown-item" to="/home"><strong>Home</strong></Link></li>
                                      <li><Link className="dropdown-item" to="/members"><strong>Members</strong></Link></li>
                                      <li><Link className="dropdown-item" to="/publications"><strong>Publications</strong></Link></li>
                                      {/*<li><Link className="dropdown-item" to="/research"><strong>Research</strong></Link></li>*/}
                                  </ul>
                              </li>

                              {/*<li className="nav-item dropdown position-relative">*/}
                              {/*    /!* 主链接：始终能点击导航 *!/*/}
                              {/*    <Link className="nav-link dropdown-anchor" >*/}
                              {/*        Posts*/}
                              {/*    </Link>*/}

                              {/*    /!* 下拉菜单 *!/*/}
                              {/*    <ul className="dropdown-menu">*/}
                              {/*        <li><Link className="dropdown-item" to="/events"><strong>Events</strong></Link></li>*/}
                              {/*        <li><Link className="dropdown-item" to="/news"><strong>Blogs</strong></Link></li>*/}

                              {/*    </ul>*/}
                              {/*</li>*/}



                              <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/news">Blogs</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                          </ul>
                      </div>
                  </nav>
              </div>



              <Routes>
                
                  <Route path={"/"} element={<WorkshopFactory _predefinedDestinationId={"68f9966fbf19cc8467eb37b7"} />} />


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
