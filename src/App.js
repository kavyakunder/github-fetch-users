import "./App.css";
import { useState } from "react";

const GITHUB_API = "https://api.github.com/users/";

function App() {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [emptyInput, setEmptyInput] = useState(false);

  const fetchUserName = async () => {
    setLoading(true);
    setErr(false);
    if (username === "") {
      setEmptyInput(true);
      setLoading(false);
    } else {
      const response = await fetch(GITHUB_API + username);
      if (response.status === 200) {
        const data = await response.json();
        setErr(false);
        setLoading(false);
        setUserData(data);
        setEmptyInput(false);
      } else {
        setErr(true);
        setEmptyInput(false);
        setLoading(false);
      }
    }
  };

  return (
    <div className="App">
      <input
        className="input-username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="btn-fetch" onClick={fetchUserName}>
        Fetch User
      </button>
      {emptyInput ? (
        <h1>Username cannot be empty</h1>
      ) : (
        <>
          {!err ? (
            <>
              {!loading ? (
                <div className="user-info">
                  <div className="personal-info">
                    <h1>Personal Info</h1>
                    <h2>Name: {userData.name}</h2>
                    <h2>Bio: {userData.bio}</h2>
                    <h2>Username: @{userData.login}</h2>
                    <h2>Company: {userData.company}</h2>
                    <h2>Location: {userData.location}</h2>
                  </div>
                  <div className="github-info">
                    <h1>Github Info</h1>
                    <h2>Public Repos : {userData.public_repos}</h2>
                    <h2>Followers: {userData.followers}</h2>
                    <h2>Following: {userData.following}</h2>
                  </div>
                </div>
              ) : (
                <h1>Loading</h1>
              )}
            </>
          ) : (
            <h1>User not found</h1>
          )}
        </>
      )}
    </div>
  );
}

export default App;
