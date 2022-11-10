import React from "react";
import HogCard from "./HogCard";

function HogsContainer({ hog }) {

    const renderHogs = hog.map((hog, index) => 
        <HogCard key={index} hog={hog} />)

    return (
        <div className="ui grid container">{renderHogs}</div>
    )
}

export default HogsContainer;