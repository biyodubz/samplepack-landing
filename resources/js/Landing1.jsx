import React, { useState } from "react";
import logo from '../images/logo.png';
import alien1 from "../images/alien1.jpg";
import alien2 from "../images/alien2.jpg";


export default function Landing() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content"),
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setMessage("Check your email for the download link.");
            window.location.href = "/samplepack.zip"; // file in public/
        } else {
            setMessage("Invalid or already subscribed.");
        }
    };

    return (
    <div className="page-wrapper">
        <img src={alien1} className="side-banner left-banner" alt="Alien Left" />
        <img src={alien2} className="side-banner right-banner" alt="Alien Right" />
        <div className="section offer">
            <div className="top-section">
                <div className="top-grid">
                    <img src={logo} alt="Center Logo" className="logo-center" />
                </div>
            </div>
            <h2>Free Sample Pack</h2>
            <div className="offer-grid">

                {/* LEFT COLUMN */}
                <div className="left-column">
                    <ul>
                        <li>5 KICKS</li>
                        <li>10 CLAPS & SNARES</li>
                        <li>5 CYMBALS</li>
                        <li>10 FXS</li>
                    </ul>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">
                            Download
                        </button>
                    </form>

                    <p>{message}</p>
                </div>

            </div>
        </div>
    </div>
    );
}