import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../../lib/Auth/getUser";
import dbConnect from "../../../../lib/dbConnect";
import Post from "../../../../models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  const user = await getUser(req, res);

  const post = await Post.findById(id);

  if (post.reacts.hahas.includes(user.user._id)) {
    post.reacts.hahas = post.reacts.hahas.filter(
      //@ts-ignore
      haha => haha.toString() !== user.user._id.toString()
    );
  } else {
    post.reacts.hahas.push(user.user._id);
  }

  post.save((err: any, post: any) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json({ message: "Done", post });
  });
}
