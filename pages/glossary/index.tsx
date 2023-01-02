import { FC, Fragment } from "react";
import GlossaryTable from "../../components/GlossaryTable";
import GlossaryEntry from "../../models/GlossaryEntry";
import Head from "next/head";
import Typography from "@mui/material/Typography";

type GlossaryTableProps = {
  entries: GlossaryEntry[];
};

const Glossary: FC<GlossaryTableProps> = ({ entries }) => (
  <Fragment>
    <Head>
      <title>List of terms</title>
    </Head>
    <Typography variant="h1">Glossary</Typography>
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
