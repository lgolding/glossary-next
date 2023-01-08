class GlossaryEntry {
  term: string;
  definition: string;
  source?: string;

  constructor(term: string, definition: string, source?: string) {
    term = term.trim();
    if (term.length === 0) {
      throw new Error("addEntry: cannot add a blank term to the glossary");
    }
    definition = definition.trim();
    if (definition.length === 0) {
      throw new Error(
        "addEntry: cannot add a term with a blank definition to the glossary"
      );
    }

    this.term = term;
    this.definition = definition;
    this.source = source;
  }
}

export default GlossaryEntry;
