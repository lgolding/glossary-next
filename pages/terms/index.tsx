import { FC } from "react";
import GlossaryEntry from "../../models/GlossaryEntry";
import { sanitize } from "../../utilities/htmlUtilities";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

const Glossary: FC<GlossaryProps> = ({ entries }) => (
  <table>
    <thead>
      <tr>
        <th>Term</th>
        <th>Definition</th>
        <th>Source</th>
      </tr>
    </thead>
    <tbody>
      {entries.map((entry) => {
        const term = sanitize(entry.term);
        const source = entry.source && sanitize(entry.source);
        return (
          <tr key={term}>
            <td>
              <a id={term} />
              {term}
            </td>
            <td>{sanitize(entry.definition)}</td>
            <td>{entry.source && <a href={source}>{source}</a>}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Glossary;

export async function getStaticProps() {
  // TODO: Get it from an API call.
  const data: { default: GlossaryEntry[] } = await import(
    "../../data/GlossaryEntries"
  );
  return {
    props: {
      entries: data.default,
    },
  };
}
