import { useEffect, useState } from "react";
import GlossaryEntry from "../models/GlossaryEntry";
import data from "../../data/GlossaryEntries";

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
