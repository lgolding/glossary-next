import { FC } from "react";
import GlossaryEntry from "../models/GlossaryEntry";
import GlossaryRowData from "../models/GlossaryRowData";

type GlossaryTableRowProps = {
  entry: GlossaryEntry;
};

const GlossaryTableRow: FC<GlossaryTableRowProps> = ({ entry }) => {
  const rowData = new GlossaryRowData(entry);
  return (
    <tr>
      <td>
        <a id={rowData.term}></a>
        {rowData.term}
      </td>
      <td>{rowData.definition}</td>
      <td>
        {rowData.sourceLink && (
          <a href={rowData.sourceLink}>{rowData.sourceLink}</a>
        )}
      </td>
    </tr>
  );
};

export default GlossaryTableRow;
