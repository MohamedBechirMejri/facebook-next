// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import addPost from "../../../lib/addPost";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  addPost();
  res.status(200).json("done");
}
