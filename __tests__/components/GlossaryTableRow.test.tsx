import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GlossaryTableRow from "../../components/GlossaryTableRow";
import GlossaryEntry from "../../models/GlossaryEntry";

describe("GlossaryTableRow", () => {
  // A glossary entry used in most but not all of these tests.
  const entry: GlossaryEntry = {
    term: "term",
    definition: "def",
    source: "https://www.example.com/term",
  };

  // Indices for each column in the GlossaryTableRow.
  const TERM_COLUMN = 0;
  const DEFINITION_COLUMN = 1;
  const LINK_COLUMN = 2;

  // A function that DRYs out the requirement that each test render the
  // GlossaryTableRow component within a table body. This is necessary
  // because GlossaryTableRow actually renders a <tr> element, which can
  // only occur in a <tbody>, which in turn can only occur in a <table>.
  function renderRow(entry: GlossaryEntry) {
    render(
      <table>
        <tbody>
          <GlossaryTableRow entry={entry} />
        </tbody>
      </table>
    );
  }

  it("renders a single table row", () => {
    renderRow(entry);

    const rows: HTMLElement[] = screen.getAllByRole("row");
    expect(rows.length).toBe(1);
  });

  it("displays the term with an anchor tag in the first cell", () => {
    renderRow(entry);

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const termCell = row.children[TERM_COLUMN];
    expect(termCell.innerHTML).toEqual('<a id="term"></a>term');
  });

  it("displays the definition in the second cell", () => {
    renderRow(entry);

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const definitionCell = row.children[DEFINITION_COLUMN];
    expect(definitionCell.innerHTML).toEqual(entry.definition);
  });

  it("displays the source link in the third cell", () => {
    renderRow(entry);

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const linkCell = row.children[LINK_COLUMN];
    expect(linkCell.innerHTML).toEqual(
      `<a href="${entry.source}">${entry.source}</a>`
    );
  });

  it("leaves the third cell blank if the link is absent", () => {
    const entryWithoutLink: GlossaryEntry = {
      term: "term",
      definition: "def",
    };

    renderRow(entryWithoutLink);

    const row: HTMLElement = screen.getAllByRole("row")[0];
    const linkCell = row.children[LINK_COLUMN];
    expect(linkCell.innerHTML).toEqual("");
  });

  it("sanitizes the term, definition, and link", () => {
    const unsanitaryEntry: GlossaryEntry = {
      term: "term<script src='evil.js'></script>",
      definition: "def<script src='evil.js'></script>",
      source: "<script src='evil.js'></script>https://www.example.com/term",
    };

    renderRow(unsanitaryEntry);

    const row: HTMLElement = screen.getAllByRole("row")[0];

    const termCell = row.children[TERM_COLUMN];
    expect(termCell.innerHTML).toEqual('<a id="term"></a>term');

    const definitionCell = row.children[DEFINITION_COLUMN];
    expect(definitionCell.innerHTML).toEqual("def");

    const linkCell = row.children[LINK_COLUMN];
    expect(linkCell.innerHTML).toEqual(
      '<a href="https://www.example.com/term">https://www.example.com/term</a>'
    );
  });
});
