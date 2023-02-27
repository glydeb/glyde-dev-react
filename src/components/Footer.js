import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {
    return (
        <footer> 
            <div className="footer-links">
                <a className="footer-icon" href="https://twitter.com/Glyde_B">
                    <FontAwesomeIcon icon={brands('twitter')} />&nbsp;
                </a>
                <a className="footer-icon" href="https://www.facebook.com/glydewell/">
                    <FontAwesomeIcon icon={brands('facebook')} />&nbsp;
                </a>
                <a className="footer-icon" href="https://www.instagram.com/__glyde__/">
                    <FontAwesomeIcon icon={brands('instagram')} />&nbsp;
                </a>
                <a className="footer-icon" href="https://github.com/glydeb">
                    <FontAwesomeIcon icon={brands('github')} />
                </a>
            </div>
        </footer>
    )
}