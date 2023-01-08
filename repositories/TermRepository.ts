import GlossaryEntry from "../models/GlossaryEntry";

export default interface TermRepository {
  getAll(): GlossaryEntry[];
  addEntry(term: string, definition: string, source?: string): void;
}
