import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {

    const onSubmit = (e) => {
        e.preventDefault();

        alert("Still developing! >_<")
    };

    return (
        <>
            <div id="whole" className="d-flex flex-column justify-content-start align-items-center mt-lg-3 min-vh-100 w-100">
                <div className="events-container">
                    <h1 className="events-title">Contact Us</h1>
                    <p className="events-subtitle">Connect with our team</p>
                    <div className="events-underline" />
                </div>

                {/* Black & White form */}
                <div className="bw-card ">
                    <form className="bw-form" onSubmit={onSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="bw-label" htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" className="bw-input" required />
                            </div>
                            <div className="col-md-6">
                                <label className="bw-label" htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" className="bw-input" required />
                            </div>
                            <div className="col-12">
                                <label className="bw-label" htmlFor="subject">Subject</label>
                                <input id="subject" name="subject" type="text" className="bw-input" />
                            </div>
                            <div className="col-12">
                                <label className="bw-label" htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" className="bw-textarea" required />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                            <button type="submit" className="bw-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Toast */}

        </>
    );
}

export default Contact;
