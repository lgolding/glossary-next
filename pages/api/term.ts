import { NextApiRequest, NextApiResponse } from "next";
import GlossaryEntry from "../../models/GlossaryEntry";

const data: GlossaryEntry[] = [
  {
    term: "Agile",
    definition:
      "A set of software development principles and practices designed to allow teams to respond quickly to changes in requirements and the business environment.",
  },
  {
    term: "microservice",
    definition:
      "One of a set of program components that are “highly maintainable and testable, loosely coupled, independently deployable, organized around business capabilities, [and] owned by a small team.”",
    source: "https://microservices.io/",
  },
  {
    term: "patching",
    definition:
      "The process of updating the operating system or applications installed on a computer to mitigate security vulnerabilities or to fix bugs.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).setHeader("Content-Type", "application/json").json(data);
  } else if (req.method === "POST") {
    res.status(400).end();
  } else {
    res
      .status(405)
      .setHeader("Allow", "GET")
      .send(
        `The ${req.url} endpoint does not support the ${req.method} HTTP verb.`
      );
  }
}
