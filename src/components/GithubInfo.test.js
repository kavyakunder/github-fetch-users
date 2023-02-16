import { render, screen } from "@testing-library/react";
import { GithubInfo } from "./GithubInfo";

const userData = {
  "Public Repos": 2,
  "Public Gists": 3,
  Followers: 4,
  Following: 5,
  Type: 2,
};

describe("Github component render", () => {
  it("renders github info", () => {
    render(<GithubInfo userData={userData} />);
    const githubHeading = screen.getByTestId(/github-heading/i);
    const publicRepos = screen.getByTestId("Public Repos");
    const publicGists = screen.getByTestId("Public Gists");
    const followers = screen.getByTestId("Followers");
    const following = screen.getByTestId("Following");
    const type = screen.getByTestId("Type");
    expect(githubHeading).toBeInTheDocument();
    expect(publicRepos).toBeInTheDocument();
    expect(publicGists).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });
});
