import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const githubapi="https://api.github.com/users/"

  const [username,setUserName]=useState("")
  const [userData,setUserData]=useState({})
  const [displayMsg,setDisplayMsg]=useState(true)

  const fetchUserName=async()=>{
  const response= await fetch(githubapi+username)
  const data=await response.json()
  setUserData(data)
  setDisplayMsg(false)
}

  return (
    <div className="App">
     <input className="input-username"onChange={(e)=>setUserName(e.target.value)}/>
     <button className="btn-fetch" onClick={fetchUserName}>Fetch User</button>
     {!displayMsg?
     <div className='user-info'>
      <div className='personal-info'>
      <h1>Personal Info</h1>
      <h2>Name: {userData.name}</h2>
      <h2>Bio: {userData.bio}</h2>
      <h2>Username: @{userData.login}</h2>
      <h2>Company: {userData.company}</h2>
      <h2>Location: {userData.location}</h2>
      </div>
      <div className='github-info'>
       <h1>Github Info</h1>
       <h2>Public Repos : {userData.public_repos}</h2>
       <h2>Followers: {userData.followers}</h2>
       <h2>Following: {userData.following}</h2>
      </div>
      </div>
      :<h1>Search for user</h1>
     }
    </div>
  );
}

export default App;
