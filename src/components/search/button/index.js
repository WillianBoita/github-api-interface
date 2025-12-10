import React from "react";

export default function Button(props) {

    const { onClick } = props

    return (
        <button className="search-button" type="submit" onClick={onClick}>Buscar</button>
    )
}