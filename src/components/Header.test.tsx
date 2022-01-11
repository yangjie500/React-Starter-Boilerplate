import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

it("renders", () => {
  const { asFragment } = render(<Header text="Hello!" />)
  expect(asFragment()).toMatchSnapshot();
})