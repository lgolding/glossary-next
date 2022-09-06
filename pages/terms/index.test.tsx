import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Glossary from ".";

describe("The Glossary page", () => {
  it("contains a row for each entry, plus a header row", () => {
    render(<Glossary />);
    const rows: HTMLElement[] = screen.getAllByRole("row");
    expect(rows.length).toBe(4);
  });
});
