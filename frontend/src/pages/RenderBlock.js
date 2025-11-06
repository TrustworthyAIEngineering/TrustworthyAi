// src/components/RenderBlock.jsx
import React from "react";
import { Link } from "react-router-dom";

const FIXED_CLASS_MAP = {
    rowLayout: "gx-4 gy-4 align-items-center",
    teamIntroBox: "mb-5 py-5 px-4 rounded-3",
    heroSection: "d-flex flex-column justify-content-center text-center",
    sectionText: "section-text mb-0",
    sectionTitle: "section-title mb-3 mt-lg-5",
};

function buildClassName(prefixClass, role) {
    const fixed = role && FIXED_CLASS_MAP[role] ? FIXED_CLASS_MAP[role] : "";
    return [prefixClass, fixed].filter(Boolean).join(" ").trim();
}

function RenderBlock(node, idx) {
    if (!node) return null;

    const {
        tag = "div",
        prefixClass,
        role,
        to,
        text,
        html,
        children
    } = node;

    const className = buildClassName(prefixClass, role) || undefined;

    switch (tag) {
        case "Link":
            return (
                <Link key={idx} className={className} to={to || "#"}>
                    {text || null}
                    {children && children.map((child, i) => RenderBlock(child, i))}
                </Link>
            );

        default: {
            const Tag = tag;

            if (html) {
                return (
                    <Tag
                        key={idx}
                        className={className}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                );
            }

            if (text) {
                return (
                    <Tag key={idx} className={className}>
                        {text}
                    </Tag>
                );
            }

            return (
                <Tag key={idx} className={className}>
                    {children && children.map((child, i) => RenderBlock(child, i))}
                </Tag>
            );
        }
    }
}

export default RenderBlock;
