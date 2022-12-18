import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Glossary from "../../pages/terms";
import GlossaryEntry from "../../models/GlossaryEntry";
import { link } from "fs";

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
  beforeEach(() => {
    render(<Glossary entries={testData} />);
  });

  it("contains a row for each entry, plus a header row", () => {
    const rows: HTMLElement[] = screen.getAllByRole("row");
    expect(rows.length).toBe(testData.length + 1);
  });

  it("displays the term, the definition, and an optional link", () => {
    const rows: HTMLElement[] = screen.getAllByRole("row");

    // A term with a link.
    var termInfo = rows[2].children;
    expect(termInfo[0].innerHTML).toEqual("microservice");
    expect(termInfo[1].innerHTML.startsWith("One of a set")).toEqual(true);
    var linkCell = termInfo[2];
    var linkElement = linkCell.children[0];
    expect(linkElement.localName).toBe("a");
    expect(linkElement.innerHTML.startsWith("https:")).toEqual(true);

    // A term without a link.
    termInfo = rows[3].children;
    expect(termInfo[0].innerHTML).toEqual("patching");
    linkCell = termInfo[2];
    expect(linkCell.children.length).toBe(0);
  });
});
