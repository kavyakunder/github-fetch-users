const PERSONINFO = {
  Name: "name",
  Bio: "bio",
  Username: "login",
  Company: "company",
  Location: "location",
};

export const PersonInfo = ({ userData }) => {
  return (
    <div className="personal-info">
      <h1 data-testid="personal-heading">Personal Info</h1>
      {Object.entries(PERSONINFO).map(([key, val]) => {
        return (
          <p data-testid={key} key={key}>
            {key} : {userData[val] ?? "-"}
          </p>
        );
      })}
    </div>
  );
};
