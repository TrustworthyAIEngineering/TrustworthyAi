import React from "react";
import "../styles/News.css"
import newsList from "./NewsList";
import test_news_pic from "../assets/general/haolin.jpg"
import {Link} from "react-router-dom";
function News(){


    return(
        <>
            <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-3 min-vh-100 w-100">
                <div className="news-container">
                    <h1 className="news-title">News Posts</h1>
                    <p className="news-subtitle">Catch our latest updates from our team</p>
                    <div className="news-underline" />
                </div>
                <div id="newslist" className="news-grid">
                    {newsList.map((item, i) => (
                        <>
                        <article className="news-card" key={i}>
                            <div className="news-card__img">
                                <img
                                    src={require(`../assets/newsRelated/${item.img}`)}
                                    alt={item.title || "news image"}
                                />
                            </div>
                            <div className="news-card__body">
                                <h5 className="news-card__title">{item.title}</h5>
                                <p className="news-card__time">{item.time}</p>
                                <p className="news-card__desc">{item.description}</p>
                                <Link className="link link-dark small " to="/home">Read full-text</Link>
                            </div>

                        </article>

                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default News;