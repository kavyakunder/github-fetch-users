import "./App.css";
import { useState } from "react";
import PersonInfo from "./components/PersonInfo";
import GithubInfo from "./components/GithubInfo";

const GITHUB_API = "https://api.github.com/users/";

function App() {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState({});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUserName = async () => {
    setErr(false);
    setLoading(true);

    const response = await fetch(GITHUB_API + username);

    if (response.status === 200) {
      const data = await response.json();
      console.log("data", data);
      setErr(false);
      setUserData(data);
    } else {
      setErr(true);
      setUserData({});
    }
    setLoading(false);
  };

  console.log("userdata", userData.length);
  return (
    <div className="App">
      <input
        className="input-username"
        onChange={(e) => setUserName(e.target.value.trim())}
        placeholder="Enter a username"
      />
      <button
        disabled={!username}
        className="btn-fetch"
        onClick={fetchUserName}
      >
        Fetch User
      </button>

      {!loading ? (
        <>
          {!err ? (
            <>
              {Object.keys(userData).length ? (
                <>
                  <div className="user-info">
                    <PersonInfo userData={userData} />
                    <GithubInfo userData={userData} />
                  </div>
                </>
              ) : (
                <h1>Search for user...</h1>
              )}
            </>
          ) : (
            <h1>User not found</h1>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
