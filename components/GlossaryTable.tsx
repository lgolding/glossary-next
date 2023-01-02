import { FC } from "react";
import GlossaryTableRow from "./GlossaryTableRow";
import GlossaryEntry from "../models/GlossaryEntry";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

const GlossaryTable: FC<GlossaryProps> = ({ entries }) => (
  <TableContainer sx={{ maxWidth: 800, margin: 2 }} component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Term</TableCell>
          <TableCell>Definition</TableCell>
          <TableCell>Source</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map((entry) => (
          <GlossaryTableRow entry={entry} key={entry.term} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default GlossaryTable;
