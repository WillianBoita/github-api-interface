import React, { useState } from "react";
import Button from "./button";
import SearchInput from "./input";
import useGithub from "../../hooks/github-hooks"
import './search.css';

export default function SearchProfile() {

    const { getUser } = useGithub();
    const [username, setUsername] = useState()

    const submitGetUser = () => {
        if(!username) {
            return;
        }

        return getUser(username)
    }

    return (
        <div className="search-container">
            <SearchInput setUsername={setUsername}/>
            <Button onClick={submitGetUser}/>
        </div>
    )
}