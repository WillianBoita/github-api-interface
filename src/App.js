import React from "react";
import SearchProfile from "./components/search";
import Profile from "./components/profile";
import RepositoryContainer from "./components/repositories";
import NoSearch from "./components/no-search/index"
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub()

  return (
    <>
      <SearchProfile/>
      {githubState.hasUser ? (
        <>
        <Profile/>
        <RepositoryContainer/>
        </>
      ) : (
        <NoSearch/>
      )}
    </>
    
  );
};

export default App;
