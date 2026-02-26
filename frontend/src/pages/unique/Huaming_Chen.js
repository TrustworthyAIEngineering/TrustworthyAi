import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Huaming_Chen.css";

export default function Huaming_Chen() {
  return (
    <div className="profile-page mt-lg-5 mt-lg-5 min-vh-100 w-100">
      <div className="container profile-stack">
        <Link to="/members" className="btn btn-link mb-4">�� Back to Members</Link>

        <div className="profile-header">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Huaming Chen"
            className="profile-avatar"
          />
          <h1 className="profile-title mb-1">Dr. Huaming Chen</h1>
          <p className="profile-position">Supervisor & Team Leader</p>
        </div>

        <div className="profile-list">
          <div className="profile-item">
            <h3 className="profile-item-title">Contact</h3>
            <p className="profile-item-desc">huaming.chen@sydney.edu.au</p>
          </div>
          <div className="profile-item">
            <h3 className="profile-item-title">Affiliation</h3>
            <p className="profile-item-desc">School of Electrical and Computer Engineering, The University of Sydney</p>
          </div>
          <div className="profile-item">
            <h3 className="profile-item-title">Research Summary</h3>
            <p className="profile-item-desc">
              Focused on AI safety, adversarial robustness, and trustworthy machine learning deployments in
              high-stakes domains.
            </p>
          </div>
          <div className="profile-item">
            <h3 className="profile-item-title">Research Experience</h3>
            <p className="profile-item-desc">
              Leads projects on evaluation and red-team testing for large-scale models, with publications in
              top-tier venues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
