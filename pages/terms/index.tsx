import { FC } from "react";
import GlossaryEntry from "../../models/GlossaryEntry";
import GlossaryRowData from "../../models/GlossaryRowData";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

// TODO: Extract the row into a GlossaryRow component with a GlossaryEntry property;
// in internally constructs the GlossaryRowData.
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
        const rowData = new GlossaryRowData(entry);
        return (
          <tr key={rowData.key}>
            <td>
              <a id={rowData.term}></a>
              {rowData.term}
            </td>
            <td>{rowData.definition}</td>
            <td>{rowData.sourceLink && <a>{rowData.sourceLink}</a>}</td>
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
