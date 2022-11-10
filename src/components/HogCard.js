import React, { useState } from "react";
import HogCardBack from "./HogCardBack";
import HogCardFront from "./HogCardFront";

function HogCard({ hog }) {

    const [showDetails, setShowDetails] = useState(false);

    function toggleHogDetails() {
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui eight wide column" onClick={toggleHogDetails}>
            <div className="pigTile">
                {showDetails ? <HogCardBack hog={hog} /> : <HogCardFront hog={hog} />}
            </div>
        </div>
    )
}

export default HogCard;