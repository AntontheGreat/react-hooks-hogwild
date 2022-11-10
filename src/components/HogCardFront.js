import React from "react";

function HogCardFront({ hog }) {
    return (
        <div>
            <h3>{hog.name}</h3>
            <img className="minPigTile" src={hog.image} alt="HogImage" />
        </div>
    )
}

export default HogCardFront;