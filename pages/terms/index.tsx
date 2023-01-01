import { FC } from "react";
import GlossaryTableRow from "../../components/GlossaryTableRow";
import GlossaryEntry from "../../models/GlossaryEntry";

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
      {entries.map((entry) => (
        <GlossaryTableRow entry={entry} key={entry.term} />
      ))}
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
