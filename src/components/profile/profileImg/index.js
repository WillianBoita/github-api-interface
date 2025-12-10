import React from "react";

export default function ProfileImg(props) {

    const { profilePhotoUrl } = props

    return (
        <img className="profile-img" src={profilePhotoUrl} alt="GitHub Profile"></img>
    )
}