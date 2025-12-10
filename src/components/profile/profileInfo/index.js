import React from "react";

export default function ProfileInfo(props) {

    const { name, username, usernameUrl, company, location, blog, followers, followings, gists, repos } = props

    return (
        <div className="profile-info-container">
            <h2 className="name">{name}</h2>
            <a target="_blank" rel="noreferrer" className="link" href={usernameUrl}><strong>Username:</strong>{username}</a>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Location:</strong> {location}</p>
            <p className="link"><strong>Blog:</strong> {blog}</p>
            <div className="sub-info-container">
                <div>
                    <p><strong>Followers</strong></p>
                    <p className="info-content">{followers}</p>
                </div>
                <div>
                    <p><strong>Followings</strong></p>
                    <p className="info-content">{followings}</p>
                </div>
                <div>
                    <p><strong>Gists</strong></p>
                    <p className="info-content">{gists}</p>
                </div>
                <div>
                    <p><strong>Repos</strong></p>
                    <p className="info-content">{repos}</p>
                </div>
                
            </div>
            
        </div>
    )
}