// src/pages/HomePage.jsx
import { useEffect, useRef, useState } from "react";
import React from "react";
import RenderBlock from "./RenderBlock";
import data from "./data.json";
import "../styles/Home.css"
import { API_BASE } from "./config";

function Home() {
  const [open, setOpen] = useState(false);
  const bufferRef = useRef("");
  const TARGET = "trust";
  
  useEffect(() => {
    const onKeyDown = async (e) => {
      // 回车触发匹配
      if (e.key === "Enter") {
        console.log(bufferRef.current)
        if (bufferRef.current.trim().includes(TARGET)) {
          await fetch(`${API_BASE}/api/openAdminLogin/${bufferRef.current}`, { method: "GET" })
            .then((response) => {
              if (response.ok) {
                console.log(bufferRef.current)
                alert(":)");
                bufferRef.current = "";
              } else {
                console.log("nope, ",bufferRef.current)
              }
            })
        }
        bufferRef.current = "";
        return;
      }

      // 允许字母与空格
      if (e.key.length === 1) {
        const ch = e.key.toLowerCase();
        // allow a-z, space and number in one line
        if (/[a-z 0-9]/.test(ch)) {
          bufferRef.current = (bufferRef.current + ch);
        }
        return;
      }

      // 可选：Backspace 回退
      if (e.key === "Backspace") {
        bufferRef.current = bufferRef.current.slice(0, -1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
