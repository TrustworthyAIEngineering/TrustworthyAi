// src/pages/HomePage.jsx
import React from "react";
import RenderBlock from "./RenderBlock";
import data from "./data.json";
import "../styles/Home.css"
function Home() {
  return (
      <>
        <div  id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-3 min-vh-100">
        {data.sections.map((section, idx) => (
            <div
                key={idx}
                className={section.prefixClass}
            >
              {section.children &&
                  section.children.map((child, i) => RenderBlock(child, i))}
            </div>
        ))}
        </div>
      </>
  );
}

export default Home;
