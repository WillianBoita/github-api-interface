import React from "react";

export default function SearchInput(props) {

    const { setUsername } = props


    return (
        <input className="search-input" type="text" onChange={(e) => setUsername(e.target.value)}></input>
    )
}