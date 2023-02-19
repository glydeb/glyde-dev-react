import React from "react";
import EmailButton from "./EmailButton";
import LinkedInButton from "./LinkedInButton";

export default function Information() {
    return (
        <div className="information">
            <h1 className="dev-name">Glydewell Burdick</h1>
            <h5 className="dev-title">Full Stack Web Developer</h5>
            <p className="dev-site"><a className="dev-link" href="https://www.glyde.dev">www.glyde.dev</a></p>
            <div className="button-container">
                <EmailButton />
                <LinkedInButton />
            </div>
            <div className="dev-info">
                <h3 className="dev-info-heading">About</h3>
                <p className="dev-info-text">
                    Looking to make a difference in the world using Rails, Python or Node.js.
                    Also SQL or MongoDB. On AWS, Heroku, or Google Cloud.  Ok, Azure too.
                    Would rather write tests than create landmines for myself and successors.
                </p>
                <h3 className="dev-info-heading">Interests</h3>
                <p className="dev-info-text">
                    Politics, home automation, 3d printing, AI/ML, grilling, dancing,
                    and strategy games.
                </p>
            </div>
        </div>
    )
}