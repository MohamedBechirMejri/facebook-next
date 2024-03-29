import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import Post from "~/models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  const user = await getUser(req, res);

  const post = await Post.findById(id);

  if (post.reacts.likes.includes(user.user._id))
    post.reacts.likes = post.reacts.likes.filter(
      (like: any) => like.toString() !== user.user._id.toString()
    );
  if (post.reacts.loves.includes(user.user._id))
    post.reacts.loves = post.reacts.loves.filter(
      (love: any) => love.toString() !== user.user._id.toString()
    );
  if (post.reacts.hahas.includes(user.user._id))
    post.reacts.hahas = post.reacts.hahas.filter(
      (haha: any) => haha.toString() !== user.user._id.toString()
    );
  if (post.reacts.sads.includes(user.user._id))
    post.reacts.sads = post.reacts.sads.filter(
      (sad: any) => sad.toString() !== user.user._id.toString()
    );
  if (post.reacts.angrys.includes(user.user._id))
    post.reacts.angrys = post.reacts.angrys.filter(
      (angry: any) => angry.toString() !== user.user._id.toString()
    );

  if (post.reacts.wows.includes(user.user._id)) {
    post.reacts.wows = post.reacts.wows.filter(
      //@ts-ignore
      wow => wow.toString() !== user.user._id.toString()
    );
  } else {
    post.reacts.wows.push(user.user._id);
  }

  post
    .save()
    .then((post: any) => {
      return res.status(200).json({ message: "Done", post });
    })
    .catch((err: any) => {
      return res.status(500).json({ message: "Something went wrong", err });
    });
}
