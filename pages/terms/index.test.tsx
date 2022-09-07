import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Glossary from ".";
import GlossaryEntry from "../models/GlossaryEntry";

const testData: GlossaryEntry[] = [
  {
    term: "Agile",
    definition:
      "A set of software development principles and practices designed to allow teams to respond quickly to changes in requirements and the business environment.",
  },
  {
    term: "microservice",
    definition:
      "One of a set of program components that are “highly maintainable and testable, loosely coupled, independently deployable, organized around business capabilities, [and] owned by a small team.”",
    source: "https://microservices.io/",
  },
  {
    term: "patching",
    definition:
      "The process of updating the operating system or applications installed on a computer to mitigate security vulnerabilities or to fix bugs.",
  },
];

describe("The Glossary page", () => {
  it("contains a row for each entry, plus a header row", () => {
    render(<Glossary entries={testData} />);
    const rows: HTMLElement[] = screen.getAllByRole("row");
    expect(rows.length).toBe(testData.length + 1);
  });
});
