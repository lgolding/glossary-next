import { FC } from "react";
import GlossaryTableRow from "./GlossaryTableRow";
import GlossaryEntry from "../models/GlossaryEntry";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

const GlossaryTable: FC<GlossaryProps> = ({ entries }) => (
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
);

export default GlossaryTable;
