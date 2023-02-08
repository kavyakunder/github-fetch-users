const PersonInfo = ({ userData }) => {
  const { name, bio, login, company, location } = userData;
  const personInfo = {
    Name: name,
    Bio: bio,
    Login: login,
    Company: company,
    Location: location,
  };

  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      {Object.entries(personInfo).map(([key, val]) => {
        return (
          <p key={key}>
            {key} : {val}
          </p>
        );
      })}
    </div>
  );
};

export default PersonInfo;
