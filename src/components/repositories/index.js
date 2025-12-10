import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "./repository-item";
import "./repository.css";

export default function RepositoryContainer() {

    const { githubState, getUserRepos, getUserStarred} = useGithub()
    const [userSearchRepos, setUserSearchRepos] = useState(false)

    useEffect(() => {
        if(githubState.user.login) {
            getUserRepos(githubState.user.login)
            getUserStarred(githubState.user.login)
        }

        setUserSearchRepos(githubState.repositories)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login])


    return (
        <>
            {userSearchRepos ? (
                <>
                    <div>
                        <button className="border-gray">Repositories</button>
                        <button className="border-gray">Starred</button>
                    </div>

                    <div className="repository-container">
                        {githubState.repositories.map((repo) => (
                            <RepositoryItem
                            key={repo.id}
                            title={repo.name}
                            fullName={repo.full_name}
                            url={repo.full_name}
                            />
                        ))}
                    </div>
                </>
                
            ) : (
                <>
                    <h1 className="title">Nenhum usuário encontrado.</h1>
                </>
            )}
        </>
        
    )
}