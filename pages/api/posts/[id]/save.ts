import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../../lib/Auth/getUser";
import dbConnect from "../../../../lib/dbConnect";
import Post from "../../../../models/Post";
import User from "../../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  const authData: {
    user: {
      _id: string;
    };
  } = await getUser(req, res);

  const post = await Post.findById(id);
  const user = await User.findById(authData.user._id);

  if (user.saves.includes(post._id))
    user.saves = user.saves.filter((id: any) => id !== post._id);
  else user.saves.push(post._id);

  user.save((err: any, user: any) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json({
      message: "Done",
      saves: user.saves,
      status: user.saves.includes(post._id) ? "Saved!" : "Unsaved!",
    });
  });
}
