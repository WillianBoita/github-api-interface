import React from "react";
import ProfileImg from "./profileImg";
import ProfileInfo from "./profileInfo"
import useGithub from "../../hooks/github-hooks";
import './profile.css'

export default function Profile() {

    const { githubState } = useGithub();

    const userData = {
        name: githubState.user.name,
        username: githubState.user.login,
        usernameUrl: githubState.user.html_url,
        company: githubState.user.company,
        location: githubState.user.location,
        blog: githubState.user.blog,
        followers: githubState.user.followers,
        followings: githubState.user.following,
        gists: githubState.user.public_gists,
        repos: githubState.user.public_repos
      }
      

    return (
        <div className="profile-container">
            <ProfileImg profilePhotoUrl={githubState.user.avatar}/>
            <ProfileInfo {...userData}/>
        </div>
    )
}