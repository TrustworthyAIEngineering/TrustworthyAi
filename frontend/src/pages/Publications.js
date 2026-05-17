import React, { useEffect, useMemo, useState } from "react";
import "../styles/Publication.css";

const PUBLICATIONS_PER_PAGE = 10;

function getPaginationItems(currentPage, totalPages) {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = new Set([1, totalPages, currentPage]);

    if (currentPage > 1) pages.add(currentPage - 1);
    if (currentPage < totalPages) pages.add(currentPage + 1);
    if (currentPage <= 3) {
        pages.add(2);
        pages.add(3);
        pages.add(4);
    }
    if (currentPage >= totalPages - 2) {
        pages.add(totalPages - 1);
        pages.add(totalPages - 2);
        pages.add(totalPages - 3);
    }

    return [...pages]
        .filter((page) => page >= 1 && page <= totalPages)
        .sort((a, b) => a - b)
        .reduce((items, page) => {
            const previous = items[items.length - 1];
            if (typeof previous === "number" && page - previous > 1) {
                items.push(`ellipsis-${previous}-${page}`);
            }
            items.push(page);
            return items;
        }, []);
}

function PublicationItem({ publication, index }) {
    return (
        <li className="publication-item">
            <div className="publication-index">{index}.</div>
            <div className="publication-content">
                <a
                    className="publication-title-link"
                    href={publication.gs_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {publication.title}
                </a>
                <div className="publication-authors">{publication.authors}</div>
                <div className="publication-meta">
                    {publication.venue || "Publication"}
                    {publication.year ? ` (${publication.year})` : ""}
                </div>
            </div>
        </li>
    );
}

function PublicationPagination({
    currentPage,
    totalPages,
    paginationItems,
    onPageChange,
}) {
    return (
        <nav className="publication-pagination" aria-label="Publication pagination">
            <button
                type="button"
                className="pagination-button pagination-control"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <div className="pagination-pages">
                {paginationItems.map((item) =>
                    typeof item === "number" ? (
                        <button
                            type="button"
                            key={item}
                            className={`pagination-button pagination-page ${
                                item === currentPage ? "active" : ""
                            }`}
                            onClick={() => onPageChange(item)}
                            aria-current={item === currentPage ? "page" : undefined}
                        >
                            {item}
                        </button>
                    ) : (
                        <span
                            key={item}
                            className="pagination-ellipsis"
                            aria-hidden="true"
                        >
                            ...
                        </span>
                    )
                )}
            </div>

            <button
                type="button"
                className="pagination-button pagination-control"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </nav>
    );
}

function Publications() {
    const [publications, setPublications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let alive = true;

        (async () => {
            try {
                const res = await fetch("/Huaming_publications.json");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data = await res.json();

                if (alive) {
                    setPublications(Array.isArray(data) ? data : []);
                    setCurrentPage(1);
                }
            } catch (e) {
                console.log(e);
                if (alive) {
                    setPublications([]);
                    setCurrentPage(1);
                }
            }
        })();

        return () => {
            alive = false;
        };
    }, []);

    const totalPages = Math.max(
        1,
        Math.ceil(publications.length / PUBLICATIONS_PER_PAGE)
    );

    const visiblePublications = useMemo(() => {
        const start = (currentPage - 1) * PUBLICATIONS_PER_PAGE;
        return publications.slice(start, start + PUBLICATIONS_PER_PAGE);
    }, [currentPage, publications]);

    const paginationItems = useMemo(() => {
        return getPaginationItems(currentPage, totalPages);
    }, [currentPage, totalPages]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const goToPage = (page) => {
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        if (nextPage === currentPage) return;

        setCurrentPage(nextPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            id="whole"
            className="publications-page d-flex flex-column justify-content-start align-items-center min-vh-100 w-100"
        >
            <section className="publications-header-container">
                <h1 className="publications-title">Publications</h1>
                <p className="publications-subtitle">
                    Explore the our publications.
                </p>
                <div className="publications-underline" />
            </section>

            <div className="publications-list container">
                <div className="publications-summary">
                    {publications.length} publications
                </div>

                {publications.length > PUBLICATIONS_PER_PAGE && (
                    <PublicationPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        paginationItems={paginationItems}
                        onPageChange={goToPage}
                    />
                )}

                <ol className="publication-results">
                    {visiblePublications.map((publication, idx) => (
                        <PublicationItem
                            key={publication.id || `${publication.title}-${idx}`}
                            publication={publication}
                            index={
                                (currentPage - 1) * PUBLICATIONS_PER_PAGE + idx + 1
                            }
                        />
                    ))}
                </ol>

                {publications.length > PUBLICATIONS_PER_PAGE && (
                    <PublicationPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        paginationItems={paginationItems}
                        onPageChange={goToPage}
                    />
                )}
            </div>
        </div>
    );
}

export default Publications;
