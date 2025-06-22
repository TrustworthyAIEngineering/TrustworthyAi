import React from "react";
import "../styles/News.css"
function News(){
    return(
        <>
            <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-5 min-vh-100 w-100">
                <div className="news-container">
                    <h1 className="news-title">News Posts</h1>
                    <p className="news-subtitle">Catch our latest updates from our team</p>
                    <div className="news-underline" />
                    Coming soon

                </div>
            </div>
        </>
    )
}

export default News;