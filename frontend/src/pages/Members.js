import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Members.css";
import huamingImg from "../assets/general/huaming.jpg";
import yitianImg from "../assets/general/yitian.jpg";
import haolinImg from "../assets/general/haolin.jpg";
import taozhaoImg from "../assets/general/taozhao.jpg";
import linghanImg from "../assets/general/linghan.jpg";

import jiawenImg from "../assets/general/jiawen.jpg";
import liningImg from "../assets/general/lining.jpg";
import zhaogeImg from "../assets/general/zhaoge.jpg";
import pengyueImg from "../assets/general/pengyue.jpg";
import qingwenImg from "../assets/general/qingwen.jpg";

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
  const people = [
    { avatar: huamingImg, name: "Huaming Chen", direction: "AI Safety & Trust" },
    { avatar: haolinImg, name: "Haolin Jin", direction: "AI Agent" },
    { avatar: jiawenImg, name: "Jiawen Wen", direction: "Vulnerability Detection" },
    { avatar: linghanImg, name: "Linghan Huang", direction: "Trustworthy AI" },
    { avatar: liningImg, name: "Lining Chen", direction: "The Application of Recommendation System" },
    { avatar: pengyueImg, name: "Pengyue Yang", direction: "Trustworthy AI" },
    { avatar: qingwenImg, name: "Qingwen Zeng", direction: "AI Algotithm & FInance" },
    { avatar: taozhaoImg, name: "Taozhao Chen", direction: "Trustworthy AI" },
    { avatar: yitianImg, name: "Yitian Yang", direction: "Trustworthy AI" },
    { avatar: zhaogeImg, name: "Zhaoge Bi", direction: "Forecasting AI" }
  ].reverse();

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
      <div className="members-page mt-lg-3 min-vh-100 w-100">
        <div className="members-container">
          <h1 className="members-title">USYD Trustworthy AI Team</h1>
          <p className="members-subtitle">Infinitely progressing</p>
          <div className="members-underline" />

          {/* 2x5 Grid: first row first leader, then 4 members, etc. */}
          <div className="members-grid">
            {people.map((p, idx) => (
                <Link
                    key={idx}
                    to={
                        p.name === "Huaming Chen" &&
                        `/members/${p.name.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="member-link"
                >
                  <MemberCard {...p} />
                </Link>
            ))}
          </div>

          {/* 名字列表：三列布局（Bootstrap 栅格） */}
          <div className="container mt-5">
            <h1 className="mb-4">Thesis students</h1>
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
