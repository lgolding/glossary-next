import GlossaryEntry from "./GlossaryEntry";
import { sanitize } from "../utilities/htmlUtilities";

// This class holds the data needed to display a row in the glossary table.
// Starting with a GlossaryEntry from the database, it sanitizes the HTML
// and provides a React list item key.
export default class GlossaryRowData implements GlossaryEntry {
  key: string;
  term: string;
  definition: string;
  sourceLink?: string;

  constructor(entry: GlossaryEntry) {
    const sanitizedTerm = sanitize(entry.term);
    this.key = sanitizedTerm;
    this.term = sanitizedTerm;
    this.definition = sanitize(entry.definition);
    this.sourceLink = entry.source && sanitize(entry.source);
  }
}
