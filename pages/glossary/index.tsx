import { FC, Fragment } from "react";
import GlossaryTable from "../../components/GlossaryTable";
import GlossaryEntry from "../../models/GlossaryEntry";
import Head from "next/head";
import { Box, Typography } from "@mui/material";

type GlossaryTableProps = {
  entries: GlossaryEntry[];
};

const Glossary: FC<GlossaryTableProps> = ({ entries }) => (
  <Fragment>
    <Head>
      <title>List of terms</title>
    </Head>
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2">Glossary</Typography>
      <GlossaryTable entries={entries} />
    </Box>
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
