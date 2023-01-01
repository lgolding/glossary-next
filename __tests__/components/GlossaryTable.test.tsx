import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GlossaryTable from "../../components/GlossaryTable";
import testData from "../../data/GlossaryEntries";

describe("GlossaryTable", () => {
  beforeEach(() => {
    render(<GlossaryTable entries={testData} />);
  });

  it("contains a row for each entry, plus a header row", () => {
    const rows: HTMLElement[] = screen.getAllByRole("row");
    expect(rows.length).toBe(testData.length + 1);
  });

  it("displays the term, the definition, and an optional link", () => {
    const rows: HTMLElement[] = screen.getAllByRole("row");

    // A term with a link.
    var termInfo = rows[2].children;
    expect(termInfo[0].innerHTML).toEqual(
      '<a id="microservice"></a>microservice'
    );
    expect(termInfo[1].innerHTML.startsWith("One of a set")).toEqual(true);
    var linkCell = termInfo[2];
    var linkElement = linkCell.children[0];
    expect(linkElement.localName).toBe("a");
    expect(linkElement.innerHTML.startsWith("https:")).toEqual(true);

    // A term without a link.
    termInfo = rows[3].children;
    expect(termInfo[0].innerHTML).toEqual('<a id="patching"></a>patching');
    linkCell = termInfo[2];
    expect(linkCell.children.length).toBe(0);
  });
});
