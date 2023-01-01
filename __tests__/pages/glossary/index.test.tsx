import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Glossary from "../../../pages/glossary/index";
import testData from "../../../data/GlossaryEntries";

describe("The Glossary page", () => {
  beforeEach(() => {
    render(<Glossary entries={testData} />);
  });

  it("renders a GlossaryTable", () => {
    const tables: HTMLElement[] = screen.getAllByRole("table");
    expect(tables.length).toBe(1);
  });
});
