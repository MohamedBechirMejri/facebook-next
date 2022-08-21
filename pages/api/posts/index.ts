import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../lib/Auth/getUser";
import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  await dbConnect();
  const { text, image } = req.body;
  const user = await getUser(req, res);
  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const post = new Post({
    // @ts-ignore
    text,
    // @ts-ignore
    author: user.user._id,
    comments: [],
    shares: [],
    reacts: {
      likes: [],
      loves: [],
      hahas: [],
      wows: [],
      sads: [],
      angrys: [],
    },
    image: image || null,
  });
  post.save((err: any, post: any) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    } else {
      return res.status(200).json({ message: "Post created", post });
    }
  });
}
