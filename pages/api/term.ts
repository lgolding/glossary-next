import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ name: "Larry" });
}
