import GlossaryEntry from "../models/GlossaryEntry";

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

const INVALID_ENTRY = "Invalid glossary entry: not added to glossary.";

export default class TermRepository {
  getAll(): GlossaryEntry[] {
    return data;
  }

  addEntry(requestBody: any) {
    if (
      typeof requestBody.term !== "string" ||
      typeof requestBody.definition !== "string" ||
      (typeof requestBody.source !== "string" &&
        typeof requestBody.source !== "undefined")
    ) {
      throw new Error(INVALID_ENTRY);
    }

    const term = requestBody.term as string;
    const definition = requestBody.definition as string;
    const source = requestBody.source as string | undefined;
    data.push({ term, definition, source });
    console.log(data);
  }
}
