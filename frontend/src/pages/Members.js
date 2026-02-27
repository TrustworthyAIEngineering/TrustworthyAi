import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Members.css";
import people from "../data/membersData";

// 通过 import.meta.url 获取打包后的 CSV 资源 URL（Vite/CRA 均可用）
const membersCsvUrl = new URL(
    "../assets/data/slack-usydeiesoftware-members.csv",
    import.meta.url
).toString();

function MemberCard({ avatar, name, direction }) {
  return (
      <div className="member-card">
        <img src={avatar} alt={name} className="member-avatar" />
        <div className="member-info">
          <h4 className="member-name">{name}</h4>
          <p className="member-dir">{direction}</p>
        </div>
      </div>
  );
}

export default function Members() {
  // Leader plus 9 members sorted alphabetically by given names

  // 从 CSV 加载名字列表
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    async function loadCsv() {
      try {
        const res = await fetch(membersCsvUrl);
        const text = await res.text();

        // 简单 CSV 解析器：假设两列，无内嵌逗号；列名为 fullname, displayname
        const lines = text
            .split(/\r?\n/)
            .filter((l) => l.trim().length > 0);

        if (lines.length === 0) {
          setNameList([]);
          return;
        }

        const header = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
        const idxFull = header.findIndex((h) => h.toLowerCase() === "fullname");
        const idxDisp = header.findIndex((h) => h.toLowerCase() === "displayname");

        const rows = lines.slice(1).map((line) => {
          const cols = line.split(",").map((c) => c.trim().replace(/^"|"$/g, ""));
          const fullname = idxFull >= 0 ? cols[idxFull] ?? "" : "";
          const displayname = idxDisp >= 0 ? cols[idxDisp] ?? "" : "";
          return { fullname, displayname };
        });

        setNameList(rows);
      } catch (e) {
        console.error("Failed to load CSV:", e);
        setNameList([]);
      }
    }
    loadCsv();
  }, []);

  return (
      <div className="members-page min-vh-100 w-100">
        <div className="members-container">
          <h1 className="members-title">Our Team</h1>
          <p className="members-subtitle">Infinitely progressing</p>
          <div className="members-underline" />
          <h2>Supervisor</h2>
          <br></br>
          <div className="members-grid-leader">
            
            {people
              .filter((p) => p.name === "Huaming Chen")
              .map((p, idx) => (
                <Link
                  key={`leader-${idx}`}
                  to={`/members/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="member-link"
                >
                  <MemberCard {...p} />
                </Link>
              ))}
          </div>
          <h2>Master/PHD Students</h2>
          <br></br>
          <div className="members-grid">
            {people
              .filter((p) => p.name !== "Huaming Chen")
              .map((p, idx) => (
                <Link key={`student-${idx}`} to="" className="member-link">
                  <MemberCard {...p} />
                </Link>
              ))}
          </div>

          {/* 名字列表：三列布局（Bootstrap 栅格） */}
          <div className="container mt-5">
            <h2>Alumni</h2>
            <br></br>
            <div className="row">
              {nameList.map((m, i) => {
                const label =
                    m.fullname && m.fullname.trim().length > 0
                        ? m.fullname
                        : m.displayname;
                return (
                    <div className="col-12 col-md-3 mb-2" key={`${label}-${i}`}>
                      {label}
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}
