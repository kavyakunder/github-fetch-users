const GithubInfo = ({ userData }) => {
  const { public_repos, followers, following } = userData;
  return (
    <div className="github-info">
      <h1>Github Info</h1>
      <h2>Public Repos : {public_repos}</h2>
      <h2>Followers: {followers}</h2>
      <h2>Following: {following}</h2>
    </div>
  );
};

export default GithubInfo;
