import React from "react";
import { createRoot } from "react-dom/client";
import Landing from "./Landing";
import '../css/app.css';

// Detect real mobile devices
function isMobileDevice() {
    return (
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
    );
}

if (isMobileDevice()) {
    document.documentElement.classList.add("mobile-device");
}

createRoot(document.getElementById("root")).render(<Landing />);