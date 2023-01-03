import { FC, Fragment } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import GlossaryTable from "../../components/GlossaryTable";
import GlossaryEntry from "../../models/GlossaryEntry";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

export async function getServerSideProps() {
  try {
    const { data, status } = await axios.get<GlossaryEntry[]>(
      "http://localhost:3000/api/term",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return {
      props: {
        entries: data,
      },
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    } else {
      console.error(`Unexpected error: ${error}`);
    }

    return {
      props: {
        entries: [],
      },
    };
  }
}
