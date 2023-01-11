import React from "react";
import EmailButton from "./EmailButton";
import LinkedInButton from "./LinkedInButton";

export default function Information() {
    return (
        <div className="information">
            <h1 className="dev-name">Glydewell Burdick</h1>
            <h5 className="dev-title">Full Stack Web Developer</h5>
            <p className="dev-site"><a href="https://www.glyde.dev">glyde.dev</a></p>
            <EmailButton />
            <LinkedInButton />
            <h3>About</h3>
            <p></p>
            <h3>Interests</h3>
            <p></p>
        </div>
    )
}