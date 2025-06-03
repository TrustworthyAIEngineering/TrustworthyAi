import React from "react";
import "../styles/Home.css"

function Home() {
    return (
        <div className="container py-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Welcome to Our Research Group</h1>
                <p className="lead text-muted">
                    We explore the frontiers of artificial intelligence, data science, and applied machine learning to solve real-world problems.
                </p>
                <a href="/research" className="btn btn-primary btn-lg mt-3">Explore Our Work</a>
            </div>

            {/* About Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://source.unsplash.com/800x400/?technology,ai"
                        alt="Research"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">About Us</h2>
                    <p className="text-muted">
                        Our interdisciplinary team works across machine learning theory, intelligent systems, and real-world deployments. We collaborate with industry and academia to drive innovation and impact.
                    </p>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="row text-center">
                <div className="col-md-4">
                    <h4 className="fw-bold">10+ Publications</h4>
                    <p className="text-muted">Top conferences and journals in AI and ML.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Global Collaborations</h4>
                    <p className="text-muted">Partnerships with researchers worldwide.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Impact-driven Research</h4>
                    <p className="text-muted">Solutions for healthcare, energy, and society.</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <h4 className="fw-bold">10+ Publications</h4>
                    <p className="text-muted">Top conferences and journals in AI and ML.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Global Collaborations</h4>
                    <p className="text-muted">Partnerships with researchers worldwide.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Impact-driven Research</h4>
                    <p className="text-muted">Solutions for healthcare, energy, and society.</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <h4 className="fw-bold">10+ Publications</h4>
                    <p className="text-muted">Top conferences and journals in AI and ML.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Global Collaborations</h4>
                    <p className="text-muted">Partnerships with researchers worldwide.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Impact-driven Research</h4>
                    <p className="text-muted">Solutions for healthcare, energy, and society.</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <h4 className="fw-bold">10+ Publications</h4>
                    <p className="text-muted">Top conferences and journals in AI and ML.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Global Collaborations</h4>
                    <p className="text-muted">Partnerships with researchers worldwide.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="fw-bold">Impact-driven Research</h4>
                    <p className="text-muted">Solutions for healthcare, energy, and society.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
