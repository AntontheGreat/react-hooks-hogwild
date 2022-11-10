import React, { useState } from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import hogs from "../porkers_data";
import Filter from "./Filter";
import Sort from "./Sort";

function App() {

	const [filter, setFilter] = useState("Show All");
	const [sort, setSort] = useState("None");

	function changeFilter(newFilter) {
		setFilter(newFilter)
	}

	function changeSortBy(newSortBy) {
		setSort(newSortBy)
	}

	function filterHogs() {
		if (filter === "Greased")
			return hogs.filter(hog => hog.greased)
		else if (filter === "Not Greased")
			return hogs.filter(hog => !hog.greased)
		else return [...hogs]
	}

	function sortHogs() {
		let sortedHogs = filterHogs()

		if (sort === "Weight")
			return sortedHogs.sort((hog1, hog2) => hog2.weight - hog1.weight)
		else if (sort === "Name")
			return sortedHogs.sort((hog1, hog2) => hog2.name.toLowerCase().localeCompare(hog1.name.toLowerCase()))
		else return sortedHogs
	}

	return (
		<div className="App">
			<Nav />
			<Sort changeSortBy={changeSortBy} />
			<Filter changeFilter={changeFilter} />
			<br />
			<hr />
			<HogsContainer hog={sortHogs()} />
		</div>
	);
}

export default App;
