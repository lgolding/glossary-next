import { FC } from "react";
import GlossaryTableRow from "./GlossaryTableRow";
import GlossaryEntry from "../models/GlossaryEntry";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

const GlossaryTable: FC<GlossaryProps> = ({ entries }) => (
  <table>
    <thead>
      <tr>
        <th>Term</th>
        <th>Definition</th>
        <th>Source</th>
      </tr>
    </thead>
    <tbody>
      {entries.map((entry) => (
        <GlossaryTableRow entry={entry} key={entry.term} />
      ))}
    </tbody>
  </table>
);

export default GlossaryTable;
