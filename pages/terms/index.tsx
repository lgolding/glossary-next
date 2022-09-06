import { useEffect, useState } from "react";
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

function Glossary() {
  const [terms, setTerms] = useState<GlossaryEntry[]>([]);
  useEffect(() => setTerms(data), []);

  return (
    <table>
      <thead>
        <tr>
          <th>Term</th>
          <th>Definition</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {terms.map((term) => (
          <tr key={term.term}>
            <td>{term.term}</td>
            <td>{term.definition}</td>
            <td>
              <a href={term.source}>{term.source}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Glossary;
