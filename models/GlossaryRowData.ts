import GlossaryEntry from "./GlossaryEntry";
import { sanitize } from "../utilities/htmlUtilities";

// This class holds the data needed to display a row in the glossary table.
// It sanitizes the HTML in the GlossaryEntry read from the database.
export default class GlossaryRowData implements GlossaryEntry {
  term: string;
  definition: string;
  sourceLink?: string;

  constructor(entry: GlossaryEntry) {
    this.term = sanitize(entry.term);
    this.definition = sanitize(entry.definition);
    this.sourceLink = entry.source && sanitize(entry.source);
  }
}
