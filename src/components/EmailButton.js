import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function EmailButton() {
    return (
        <button className="email-button">
            <a href="mailto:jobs@glyde.dev" className="email-button-text">
                <FontAwesomeIcon icon={solid('envelope')}/>&nbsp;&nbsp;Email
            </a>
        </button>
    )
}