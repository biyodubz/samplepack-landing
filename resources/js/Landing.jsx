import React, { useState, useRef } from "react";
import logo from '../images/logo.png';
import alien1 from "../images/alien1.png";
import alien2 from "../images/alien2.png";
import decor_left from "../images/decor_left.png";
import decor_right from "../images/decor_right.png";

export default function Landing() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); //  <p>{message}</p>
    const [kickIndex, setKickIndex] = useState(0);
    const [clapIndex, setClapIndex] = useState(0);
    const [fxIndex, setFxIndex] = useState(0);
    const [cymbalIndex, setCymbalIndex] = useState(0);
    const audioRef = useRef(null);
    

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
            window.location.href = "/samplepack.zip";
        } else {
            setMessage("Invalid or already subscribed.");
        }
    };

    const playKick = () => {
        const kicks = [
            "/samples/kicks/KICK 1.wav",
            "/samples/kicks/KICK 2.wav",
            "/samples/kicks/KICK 3.wav"
        ];

        const nextIndex = (kickIndex + 1) % kicks.length;

        if (audioRef.current) {
            audioRef.current.pause();
        }

        const audio = new Audio(kicks[nextIndex]);
        audio.currentTime = 0;
        audio.play();

        audioRef.current = audio;
        setKickIndex(nextIndex);
    };

    const playClap = () => {
        const claps = [
            "/samples/claps/CLAP 1.wav",
            "/samples/claps/CLAP 3.wav",
            "/samples/claps/SNARE 1.wav",
            "/samples/claps/SNARE 3.wav"
        ];

        const nextIndex = (clapIndex + 1) % claps.length;

        if (audioRef.current) {
            audioRef.current.pause();
        }

        const audio = new Audio(claps[nextIndex]);
        audio.currentTime = 0;
        audio.play();

        audioRef.current = audio;
        setClapIndex(nextIndex);
    };

    const playFx = () => {
        const fxs = [
            "/samples/fxs/FX 4.wav",
            "/samples/fxs/FX 2.wav",
            "/samples/fxs/FX 8.wav"
        ];

        const nextIndex = (fxIndex + 1) % fxs.length;

        if (audioRef.current) {
            audioRef.current.pause();
        }

        const audio = new Audio(fxs[nextIndex]);
        audio.currentTime = 0;
        audio.play();

        audioRef.current = audio;
        setFxIndex(nextIndex);
    };

    const playCymbal = () => {
        const cymbals = [
            "/samples/cymbals/CYMBAL 1.wav",
            "/samples/cymbals/CYMBAL 2.wav",
            "/samples/cymbals/CYMBAL 4.wav",            
        ];

        const nextIndex = (cymbalIndex + 1) % cymbals.length;

        if (audioRef.current) {
            audioRef.current.pause();
        }

        const audio = new Audio(cymbals[nextIndex]);
        audio.currentTime = 0;
        audio.play();

        audioRef.current = audio;
        setCymbalIndex(nextIndex);
    };


    return (
        <div className="page-wrapper">
            <img src={alien1} className="side-banner left-banner" alt="Alien Left" />
            <img src={alien2} className="side-banner right-banner" alt="Alien Right" />
            <div className="offer-section">
                <div className="offer-card">  {/* New red wrapper */}
                    <div className="top-section">
                        <div className="top-grid">
                            <img src={decor_left} alt="Decor" className="decor-left"/>
                            <img src={logo} alt="Center Logo" className="logo-center" />
                            <img src={decor_right} alt="Decor" className="decor-right"/>
                        </div>
                    </div>
                    <h2>Free Sample Pack</h2>
                    <div className="offer-grid">
                        <div className="left-column">
                            <ul>
                                <li className="clickable" onClick={playKick}>5 KICKS</li>
                                <li className="clickable" onClick={playClap}>10 CLAPS & SNARES</li>
                                <li className="clickable" onClick={playCymbal}>5 CYMBALS</li>
                                <li className="clickable" onClick={playFx}>10 FXS</li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <form onSubmit={handleSubmit} className="form">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit">Download</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}