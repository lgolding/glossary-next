import { FC } from "react";
import GlossaryEntry from "../models/GlossaryEntry";
import GlossaryRowData from "../models/GlossaryRowData";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

type GlossaryTableRowProps = {
  entry: GlossaryEntry;
};

const GlossaryTableRow: FC<GlossaryTableRowProps> = ({ entry }) => {
  const rowData = new GlossaryRowData(entry);
  return (
    <TableRow>
      <TableCell>
        <a id={rowData.term}></a>
        {rowData.term}
      </TableCell>
      <TableCell>{rowData.definition}</TableCell>
      <TableCell>
        {rowData.sourceLink && (
          <a href={rowData.sourceLink}>{rowData.sourceLink}</a>
        )}
      </TableCell>
    </TableRow>
  );
};

export default GlossaryTableRow;
