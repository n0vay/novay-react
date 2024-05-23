import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//grouping test cases
describe("contact us test cases", () => {
  test("Should load contact us componenet", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact componenet", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should find submit text inside contact componenet", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    //Assertion
    expect(text).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should load two input boxes", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
