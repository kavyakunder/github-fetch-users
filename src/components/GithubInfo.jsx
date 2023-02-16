const GITHUBINFO = {
  "Public Repos": "public_repos",
  "Public Gists": "public_gists",
  Followers: "followers",
  Following: "following",
  Type: "type",
};
export const GithubInfo = ({ userData }) => {
  return (
    <div className="github-info">
      <h1 data-testid="github-heading">Github Info</h1>
      {Object.entries(GITHUBINFO).map(([key, val]) => {
        return (
          <p key={key} data-testid={key}>
            {key} : {userData[val] ?? "-"}
          </p>
        );
      })}
    </div>
  );
};
