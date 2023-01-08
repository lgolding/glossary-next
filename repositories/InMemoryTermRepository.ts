import GlossaryEntry from "../models/GlossaryEntry";
import TermRepository from "./TermRepository";

const data: GlossaryEntry[] = [
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

export const NUM_TERMS = data.length;

const INVALID_ENTRY = "Invalid glossary entry: not added to glossary.";

export default class InMemoryTermRepository implements TermRepository {
  getAll(): GlossaryEntry[] {
    return data;
  }

  addEntry(term: string, definition: string, source?: string) {
    // TODO: The validation should happen for all repositories, not just in-memory.
    // Move it to the GlossaryEntry constructor.
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
    data.push({ term, definition, source });
  }
}
