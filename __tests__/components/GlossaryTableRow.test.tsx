import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GlossaryTableRow from "../../components/GlossaryTableRow";
import testData from "../../data/GlossaryEntries";
import GlossaryEntry from "../../models/GlossaryEntry";

describe("GlossaryTableRow", () => {
  const entry: GlossaryEntry = {
    term: "term",
    definition: "def",
    source: "https://www.example.com/term",
  };

  it("renders a single table row", () => {
    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={entry} />
        </tbody>
      </table>
    );

    const rows: HTMLElement[] = screen.getAllByRole("row");
    expect(rows.length).toBe(1);
  });

  it("displays the term with an anchor tag in the first cell", () => {
    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={entry} />
        </tbody>
      </table>
    );

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const termCell = row.children[0];
    expect(termCell.innerHTML).toEqual('<a id="term"></a>term');
  });

  it("sanitizes the term, definition, and link", () => {
    const unsanitaryEntry: GlossaryEntry = {
      term: "term<script src='evil.js'></script>",
      definition: "def<script src='evil.js'></script>",
      source: "<script src='evil.js'></script>https://www.example.com/term",
    };

    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={unsanitaryEntry} />
        </tbody>
      </table>
    );

    const row: HTMLElement = screen.getAllByRole("row")[0];

    const termCell = row.children[0];
    expect(termCell.innerHTML).toEqual('<a id="term"></a>term');

    const definitionCell = row.children[1];
    expect(definitionCell.innerHTML).toEqual("def");

    const linkCell = row.children[2];
    expect(linkCell.innerHTML).toEqual(
      '<a href="https://www.example.com/term">https://www.example.com/term</a>'
    );
  });

  it("displays the definition in the second cell", () => {
    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={entry} />
        </tbody>
      </table>
    );

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const definitionCell = row.children[1];
    expect(definitionCell.innerHTML).toEqual(entry.definition);
  });

  it("displays the source link in the third cell", () => {
    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={entry} />
        </tbody>
      </table>
    );

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const linkCell = row.children[2];
    expect(linkCell.innerHTML).toEqual(
      `<a href="${entry.source}">${entry.source}</a>`
    );
  });

  it("leaves the third cell blank if the link is absent", () => {
    const entryWithoutLink: GlossaryEntry = {
      term: "term",
      definition: "def",
    };

    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={entryWithoutLink} />
        </tbody>
      </table>
    );

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const linkCell = row.children[2];
    expect(linkCell.innerHTML).toEqual("");
  });
});
