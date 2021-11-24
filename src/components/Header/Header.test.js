import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header.js";

test("shows the logo", () => {
  render(<Header></Header>);

  expect(screen.getByText("WIZE")).toBeInTheDocument();
  expect(screen.getByText("HOME")).toBeInTheDocument();
});
