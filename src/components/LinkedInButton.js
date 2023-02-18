import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function LinkedInButton() {
    return (
        <div className="linkedin-button">
            <a href="https://www.linkedin.com/in/glydewell-burdick-a9260b114/">
                <button>
                    <FontAwesomeIcon icon={brands('linkedin')} /> LinkedIn
                </button>
            </a>
        </div>
    )
}