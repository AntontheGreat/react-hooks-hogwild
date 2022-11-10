import React from "react";

function HogCardBack({ hog }) {

    const renderHogDetails=[]

    for (let key in hog) {
        // console.log(key, hog[key])
        if (key !== 'name' && key !== 'image')
        renderHogDetails.push(<p>{`${key}: ${hog[key]}`}</p>)
    }

    return (
        <div>{renderHogDetails}</div>
    )
}

export default HogCardBack;