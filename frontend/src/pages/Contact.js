import React from "react";
import "../styles/Contact.css";

function Contact() {
    return (
        <>
            <div id="whole" className="d-flex flex-column justify-content-start align-items-center min-vh-100 w-100">
                <div className="events-container">
                    <h1 className="events-title">Contact Us</h1>
                    <p className="events-subtitle">Connect with our team</p>
                    <div className="events-underline" />
                </div>

                <div className="contact-list">
                    <div className="contact-item">
                        <h3 className="contact-title">Supervisor</h3>
                        <a className="contact-email" href="mailto:huaming.chen@sydney.edu.au">
                            huaming.chen@sydney.edu.au
                        </a>
                    </div>
                    <div className="contact-item">
                        <h3 className="contact-title">Team Email</h3>
                        <a className="contact-email" href="mailto:trustworthy-ai@groups.sydney.edu.au">
                            trustworthy-ai@groups.sydney.edu.au
                        </a>
                    </div>
                </div>
            </div>

            {/* Toast */}

        </>
    );
}

export default Contact;
