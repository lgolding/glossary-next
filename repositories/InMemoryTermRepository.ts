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
    data.push(new GlossaryEntry(term, definition, source));
  }
}
