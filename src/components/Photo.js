import React from "react"
import logo from '../glydewell_burdick_headshot.jpg';

export default function Photo() {
    return (
        <header className="photo-container">
            <img src={logo} className="photo" alt="Glydewell Burdick" />
        </header>
    )
}