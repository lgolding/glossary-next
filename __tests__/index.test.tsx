import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";

describe("The home page", () => {
  it("contains a link to the glossary", () => {
    render(<Home />);
    const glossaryLink: HTMLElement = screen.getByRole("link", {
      name: /list of terms/,
    });
    expect(glossaryLink).toBeInTheDocument();
  });
});
