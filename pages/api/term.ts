import { NextApiRequest, NextApiResponse } from "next";
import GlossaryEntry from "../../models/GlossaryEntry";
import InMemoryTermRepository from "../../repositories/InMemoryTermRepository";
import TermRepository from "../../repositories/TermRepository";

const termRepository: TermRepository = new InMemoryTermRepository();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const allTerms: GlossaryEntry[] = termRepository.getAll();
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(allTerms);
  } else if (req.method === "POST") {
    try {
      termRepository.addEntry(req.body.term, req.body.definition);
      res.status(201).end("Term added to glossary.");
    } catch (err) {
      res.status(400).end(`${err}`);
    }
  } else {
    res
      .status(405)
      .setHeader("Allow", "GET")
      .send(
        `The ${req.url} endpoint does not support the ${req.method} HTTP verb.`
      );
  }
}
