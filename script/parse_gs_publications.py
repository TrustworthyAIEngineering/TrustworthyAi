from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any
from urllib.parse import urljoin

from bs4 import BeautifulSoup

BASE_URL = "https://scholar.google.com"
DEFAULT_INPUT = Path("script/Pastedtext.txt")
DEFAULT_OUTPUT = Path("script/Huaming_publications.json")


def clean_text(text: str | None) -> str:
    if not text:
        return ""
    return re.sub(r"\s+", " ", text).strip()


def extract_pub_id(gs_url: str) -> str:
    m = re.search(r"citation_for_view=([^&]+)", gs_url)
    return m.group(1) if m else ""


def parse_google_scholar_html(html: str) -> list[dict[str, Any]]:
    soup = BeautifulSoup(html, "html.parser")
    rows = soup.select("tr.gsc_a_tr")
    publications: list[dict[str, Any]] = []

    for idx, row in enumerate(rows, start=1):
        title_link = row.select_one("a.gsc_a_at")
        if not title_link:
            continue

        title = clean_text(title_link.get_text(" ", strip=True))
        relative_url = title_link.get("href", "")
        gs_url = urljoin(BASE_URL, relative_url) if relative_url else ""

        meta_lines = row.select("td.gsc_a_t .gs_gray")
        authors = clean_text(meta_lines[0].get_text(" ", strip=True)) if len(meta_lines) >= 1 else ""
        venue = clean_text(meta_lines[1].get_text(" ", strip=True)) if len(meta_lines) >= 2 else ""

        year_node = row.select_one("td.gsc_a_y .gsc_a_h") or row.select_one("td.gsc_a_y span")
        year_text = clean_text(year_node.get_text(" ", strip=True)) if year_node else ""
        year = int(year_text) if year_text.isdigit() else None

        cited_by_link = row.select_one("td.gsc_a_c a")
        cited_by_text = clean_text(cited_by_link.get_text(" ", strip=True)) if cited_by_link else ""
        cited_by_url = urljoin(BASE_URL, cited_by_link.get("href", "")) if cited_by_link and cited_by_link.get("href") else ""

        cited_by = None
        if cited_by_text.isdigit():
            cited_by = int(cited_by_text)
        elif cited_by_text.lower().startswith("cited by"):
            m = re.search(r"(\d+)", cited_by_text)
            cited_by = int(m.group(1)) if m else None

        publications.append(
            {
                "id": extract_pub_id(gs_url) or f"row_{idx}",
                "title": title,
                "authors": authors,
                "venue": venue,
                "year": year,
                "gs_url": gs_url,
                "cited_by": cited_by,
                "cited_by_url": cited_by_url,
            }
        )

    return publications


def write_json(data: list[dict[str, Any]], output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def main(input_path: Path = DEFAULT_INPUT, output_path: Path = DEFAULT_OUTPUT) -> None:
    html = input_path.read_text(encoding="utf-8", errors="ignore")
    publications = parse_google_scholar_html(html)
    write_json(publications, output_path)
    print(f"Parsed {len(publications)} publications")
    print(f"Saved JSON to: {output_path}")


if __name__ == "__main__":
    main()
