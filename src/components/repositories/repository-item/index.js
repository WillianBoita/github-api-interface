import React from "react";
import "../repository.css"

export default function RepositoryItem(props) {

    const { title, url } = props

    return (
        <div className="repository-item border-gray">
            <strong>{title}</strong>
            <a className="link" target="_blank" rel="noreferrer" href={url}>{url}</a>
        </div>
    )
}