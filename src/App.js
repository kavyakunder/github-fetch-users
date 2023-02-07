import "./App.css";
import { useState } from "react";
import PersonInfo from "./components/PersonInfo";
import GithubInfo from "./components/GithubInfo";

const GITHUB_API = "https://api.github.com/users/";

function App() {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUserName = async () => {
    setLoading(true);
    setErr(false);
    if (username.length === 0) {
      setLoading(false);
      setErr(true);
    } else {
      const response = await fetch(GITHUB_API + username);
      if (response.status === 200) {
        const data = await response.json();
        setErr(false);
        setLoading(false);
        setUserData(data);
      } else {
        setErr(true);
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
      <>
        {!err ? (
          <>
            {!loading ? (
              <div className="user-info">
                <PersonInfo userData={userData} />
                <GithubInfo userData={userData} />
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </>
        ) : (
          <h1>User not found</h1>
        )}
      </>
    </div>
  );
}

export default App;
