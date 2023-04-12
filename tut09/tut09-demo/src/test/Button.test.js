import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import Button from "../components/Button";


// Button renders on the screen
// Button text is correct
// Button text changes when i click on it and the other stuff appears
// onCLick fn has been triggered.
describe("Button Functionality Test", () => {
  it("renders the button on the screen", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })
  
  it("renders the correct text on the button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id");
    expect(button).toBeInTheDocument();
  })
  
  it("calls onClick 1 when I click on it", () => {
    render(<App />);
    const onClick = jest.fn();
    render(<Button onClick={onClick} role="button2" title="Button 2" id="button2" />)
    // screen.logTestingPlaygroundURL();
    userEvent.click(screen.getByRole('button', { name: /Button 2/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  })
  
  it("changes button text", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"))

    const updatedButton = screen.getByRole("button", {
      name: /Do not click me/i
    }) 
    expect(updatedButton).toBeInTheDocument();
  })

})
