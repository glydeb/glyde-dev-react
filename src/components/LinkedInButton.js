import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LinkedInButton() {
    return (
        <div className="linkedin-button">
            <button>
                <a href="https://www.linkedin.com/in/glydewell-burdick-a9260b114/">
                    LinkedIn <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </button>
        </div>
    )
}