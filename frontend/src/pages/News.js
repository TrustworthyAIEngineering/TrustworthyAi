import React from "react";
import "../styles/News.css"
import newsList from "./NewsList";
import test_news_pic from "../assets/general/haolin.jpg"
function News(){


    return(
        <>
            <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-5 min-vh-100 w-100">
                <div className="news-container">
                    <h1 className="news-title">News Posts</h1>
                    <p className="news-subtitle">Catch our latest updates from our team</p>
                    <div className="news-underline" />
                </div>
                <div id = "newslist" className={"d-flex flex-column justify-content-start align-items-start"}>
                    {newsList.map((item, index) => (
                                <div key={index} className="card mb-3" style={{ width: "60vw", background:"#fbe6d1" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={require(`../assets/newsRelated/${item.img}`)}
                                                className="card-img rounded-0"
                                                alt="..."
                                                height = "100%"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">
                                                    {item.description.length > 50
                                                        ? item.description.slice(0, 250) + "..."
                                                        : item.description}
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">{item.time}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </>
    )
}

export default News;