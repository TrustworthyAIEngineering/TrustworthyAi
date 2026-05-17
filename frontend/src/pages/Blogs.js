import React, { useMemo, useState } from "react";
import "../styles/Blogs.css";
import "../styles/Pagination.css";
import { Link, useSearchParams } from "react-router-dom";
import blogsData from "../data/blogsData";
import Pagination, { getPaginationItems } from "./Pagination";

const BLOGS_PER_PAGE = 5;

function Blogs() {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const selectedId = searchParams.get("id");
  const selectedBlog = blogsData.find((b) => b.id === selectedId) || null;
  const totalPages = Math.max(1, Math.ceil(blogsData.length / BLOGS_PER_PAGE));

  const visibleBlogs = useMemo(() => {
    const start = (currentPage - 1) * BLOGS_PER_PAGE;
    return blogsData.slice(start, start + BLOGS_PER_PAGE);
  }, [currentPage]);

  const paginationItems = useMemo(() => {
    return getPaginationItems(currentPage, totalPages);
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    if (nextPage === currentPage) return;

    setCurrentPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedBlog) {
    return (
      <div id="whole" className="d-flex flex-column justify-content-start align-items-center min-vh-100 w-100">
        <div className="news-container">
          <h1 className="news-title">{selectedBlog.title}</h1>
          <p className="news-subtitle">
            {selectedBlog.date} - {selectedBlog.author}
          </p>
          <div className="news-underline" />
        </div>
        <div className="container w-100" style={{ maxWidth: 900 }}>
          {selectedBlog.image && (
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{ width: "100%", borderRadius: 16, marginBottom: 24 }}
            />
          )}
          {selectedBlog.content.map((para, idx) => (
            <p key={idx} style={{ lineHeight: 1.8, marginBottom: 16 }}>
              {para}
            </p>
          ))}
          <Link className="link link-dark small" to="/news">
            Back to list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="whole" className="d-flex flex-column justify-content-start align-items-center min-vh-100 w-100">
      <div className="news-container">
        <h1 className="news-title">Blog Posts</h1>
        <p className="news-subtitle">Catch our latest updates from our team</p>
        <div className="news-underline" />
      </div>
      <div id="newslist" className="news-grid">
        {blogsData.length === 0 ? (
          <p>Coming soon</p>
        ) : (
          <>
            {blogsData.length > BLOGS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginationItems={paginationItems}
                onPageChange={goToPage}
                label="Blog pagination"
              />
            )}

            {visibleBlogs.map((item) => (
              <article className="news-card" key={item.id}>
                {item.image && (
                  <div className="news-card__img">
                    <img src={item.image} alt={item.title || "blog image"} />
                  </div>
                )}
                <div className="news-card__body">
                  <h5 className="news-card__title">{item.title}</h5>
                  <p className="news-card__time">
                    {item.date} - {item.author}
                  </p>
                  <p className="news-card__desc">{item.summary}</p>
                  <Link className="link link-dark small" to={`/news?id=${item.id}`}>
                    Read full-text
                  </Link>
                </div>
              </article>
            ))}

            {blogsData.length > BLOGS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginationItems={paginationItems}
                onPageChange={goToPage}
                label="Blog pagination"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blogs;
