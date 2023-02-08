const githubInfo = {
  "Public Repos": "public_repos",
  "Public Gists": "public_gists",
  Followers: "followers",
  Following: "following",
  Type: "type",
};
const GithubInfo = ({ userData }) => {
  return (
    <div className="github-info">
      <h1>Github Info</h1>
      {Object.entries(githubInfo).map(([key, val]) => {
        return (
          <p key={key}>
            {key} : {userData[val] ?? "-"}
          </p>
        );
      })}
    </div>
  );
};

export default GithubInfo;
