const GITHUB_API = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  const response = await fetch(`${GITHUB_API}/${username}`);
  return response;
};
