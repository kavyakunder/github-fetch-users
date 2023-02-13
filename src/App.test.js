import { fireEvent, screen, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { App } from "./App";
import { fetchUserData } from "./hook/UseFetch";

jest.mock("./components/GithubInfo", () => ({
  GithubInfo: jest.fn().mockImplementation(() => <div>GithubInfo</div>),
}));

jest.mock("./components/PersonInfo", () => ({
  PersonInfo: jest.fn().mockImplementation(() => <div>PersonInfo</div>),
}));

jest.mock("./hook/UseFetch", () => ({
  fetchUserData: jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
    })
  ),
}));

describe("App component render", () => {
  it("renders learn react link", () => {
    render(<App />);
    const inputElement = screen.getByTestId(/input-text/i);
    const btnFetch = screen.getByTestId(/btn-fetch/i);

    expect(inputElement).toBeInTheDocument();
    expect(btnFetch).toBeInTheDocument();
  });

  it("should display user data", async () => {
    await render(<App />);
    const inputElement = screen.getByTestId(/input-text/i);
    const btnFetch = screen.getByTestId(/btn-fetch/i);
    const searchUser = screen.getByTestId("search-user");

    expect(inputElement).toBeInTheDocument();
    expect(btnFetch).toBeInTheDocument();
    expect(searchUser).toBeInTheDocument();
    expect(btnFetch).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: "abc" } });
    expect(screen.getByRole("button")).not.toBeDisabled();
    await act(() => {
      fireEvent.click(btnFetch);
    });
    expect(fetchUserData).toHaveBeenCalled();
  });

  it("should show error message", async () => {
    fetchUserData().mockRejectedValue(new Error("Not found!"));

    render(<App />);
    const inputElement = screen.getByTestId(/input-text/i);
    const btnFetch = screen.getByTestId(/btn-fetch/i);

    fireEvent.change(inputElement, { target: { value: "abc" } });
    await act(() => {
      fireEvent.click(btnFetch);
    });

    const errorMessage = screen.getByTestId("not-found");
    expect(errorMessage).toBeInTheDocument();
  });
});
