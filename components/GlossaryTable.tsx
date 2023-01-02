import { FC } from "react";
import GlossaryTableRow from "./GlossaryTableRow";
import GlossaryEntry from "../models/GlossaryEntry";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

const GlossaryTable: FC<GlossaryProps> = ({ entries }) => (
  <TableContainer sx={{ maxWidth: 800, margin: 2 }} component={Paper}>
    <Table aria-role="simple table">
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
