import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function EmailButton() {
    return (
        <div className="email-button">
            <a href="mailto:jobs@glyde.dev">
                <button>
                    <FontAwesomeIcon icon={solid('envelope')}/> Email
                </button>
            </a>
        </div>
    )
}