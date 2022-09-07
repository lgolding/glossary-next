import { FC, useEffect, useState } from "react";
import GlossaryEntry from "../models/GlossaryEntry";

type GlossaryProps = {
  entries: GlossaryEntry[];
};

const Glossary: FC<GlossaryProps> = ({ entries }) => (
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
        <tr key={entry.term}>
          <td>{entry.term}</td>
          <td>{entry.definition}</td>
          <td>
            <a href={entry.source}>{entry.source}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
