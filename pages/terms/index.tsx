import { FC, Fragment } from "react";
import GlossaryTable from "../../components/GlossaryTable";
import GlossaryEntry from "../../models/GlossaryEntry";

type GlossaryTableProps = {
  entries: GlossaryEntry[];
};

const Glossary: FC<GlossaryTableProps> = ({ entries }) => (
  <Fragment>
    <h1>Glossary</h1>
    <GlossaryTable entries={entries} />
  </Fragment>
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
