import React from "react";

function Filter(props) {
    return (
    <div>
        <select onChange={(e) => props.changeFilter(e.target.value)}>
            <option value="Show All">Show All</option>
            <option value="Greased">Greased up!</option>
            <option value="Not Greased">Not Greasy</option>
        </select>
    </div>
    )
}

export default Filter;