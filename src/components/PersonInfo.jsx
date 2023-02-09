const PERSONINFO = {
  Name: "name",
  Bio: "bio",
  Username: "login",
  Company: "company",
  Location: "location",
};

const PersonInfo = ({ userData }) => {
  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      {Object.entries(PERSONINFO).map(([key, val]) => {
        return (
          <p key={key}>
            {key} : {userData[val] ?? "-"}
          </p>
        );
      })}
    </div>
  );
};

export default PersonInfo;
