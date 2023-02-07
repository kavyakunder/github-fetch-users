const PersonInfo = ({ userData }) => {
  const { name, bio, login, company, location } = userData;
  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      <h2>Name: {name}</h2>
      <h2>Bio: {bio}</h2>
      <h2>Username: @{login}</h2>
      <h2>Company: {company}</h2>
      <h2>Location: {location}</h2>
    </div>
  );
};

export default PersonInfo;
