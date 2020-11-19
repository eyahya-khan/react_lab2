import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Datafetchmedia from "./Datafetchmedia";
import Counter from "./Counter";

afterEach(cleanup);

test("renders the text", () => {
  render(<Datafetchmedia />);
  const linkElement = screen.getByText(/Change the number then click/i);
  expect(linkElement).toBeInTheDocument();
});

//test by elements
test("should equal to 4", () => {
  render(<Datafetchmedia />);
  const linkElement = screen.getByTestId("input");
  expect(linkElement).toHaveTextContent(4);
});

//test by events
it("Change number by click events", () => {
  const { getByTestId } = render(<Datafetchmedia />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("input")).toHaveTextContent("4");
});

//test from other components
test("renders the text", () => {
  render(<Counter />);
  const linkElement = screen.getByText(/Count Two/i);
  expect(linkElement).toBeInTheDocument();
});

//test by elements from other components
test("should equal to 0", () => {
  render(<Counter />);
  const linkElement = screen.getByTestId("ctnNumber");
  expect(linkElement).toHaveTextContent(0);
});
