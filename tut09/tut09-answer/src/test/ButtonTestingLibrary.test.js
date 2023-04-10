import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe("Button", () => {
  it("renders the button", () => {
    render(<App />);
    const linkElement = screen.getByText("Click Me!");
    expect(linkElement).toBeInTheDocument();
  });

  it("has a name on main button", () => {
    render(<App />);
    expect(screen.getByRole("button")).toHaveAttribute("name");
    expect(screen.getByRole("button")).toHaveAttribute("id");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("changes text when clicked", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: /click me!/i }));
    const linkElement = screen.getByRole("button", {
      name: /Do not click me!/i,
    });
    expect(linkElement).toBeInTheDocument();

    // screen.logTestingPlaygroundURL();
    const text = screen.getByText("Don't do it!");
    expect(text).toBeInTheDocument();
  });

  it("triggers onClick when clicked", () => {
    render(<App />);
    const onClick = jest.fn();
    render(<Button onClick={onClick} title="Button 2" />);
    userEvent.click(screen.getByRole("button", { name: /Button 2/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
