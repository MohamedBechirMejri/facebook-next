import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import Post from "~/models/Post";
import User from "~/models/User";

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

  if (user.posts.includes(post._id)) {
    await Post.deleteOne({ _id: post._id });
    user.posts = user.posts.filter(
      (id: any) => id.toString() !== post._id.toString()
    );

    (async () => {
      try {
        await user.save();
        return res.status(200).json({
          message: "Done",
          status: "Deleted!",
        });
      } catch (err) {
        return res.status(500).json({ message: "Something went wrong", err });
      }
    })();
  } else {
    return res.status(500).json({ message: "Not Allowed!" });
  }
}
