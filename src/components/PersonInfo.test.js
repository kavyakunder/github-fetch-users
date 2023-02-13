import { render, screen } from "@testing-library/react";
import { PersonInfo } from "./PersonInfo";

const userData = {
  Name: "name",
  Bio: "bio",
  Username: "login",
  Company: "company",
  Location: "location",
};

describe("Person component render", () => {
  it("renders person info", () => {
    render(<PersonInfo userData={userData} />);
    const personalHeading = screen.getByTestId(/personal-heading/i);
    const name = screen.getByTestId("Name");
    const bio = screen.getByTestId("Bio");
    const username = screen.getByTestId("Username");
    const company = screen.getByTestId("Company");
    const location = screen.getByTestId("Location");
    expect(personalHeading).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
