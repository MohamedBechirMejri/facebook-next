import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import Comment from "~/models/Comment";
import Post from "~/models/Post";
import User from "~/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await dbConnect();
    const { text, image } = req.body;
    const user = await getUser(req, res);
    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const post = new Post({
      // @ts-ignore
      text: !text && image ? " " : text,
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

    post
      .save()
      .then(async (post: any) => {
        const author = await User.findById(user.user._id);
        author.posts.push(post._id);

        await author.save();

        return res.status(200).json({ message: "Post created", post });
      })
      .catch((err: any) => {
        return res.status(500).json({ message: "Something went wrong", err });
      });
  }

  if (req.method === "GET") {
    await dbConnect();

    const { user } = await getUser(req, res);

    const result = await Post.find({})
      .sort({ createdAt: "desc" })
      .populate("author", "firstName lastName nickname picture id", User);

    let posts = await Post.populate(result, {
      path: "comments",
      model: Comment,
    });

    posts = posts.filter(
      p =>
        user.posts.includes(p._id.toString()) ||
        user.friends
          .map((f: { _id: string }) => f._id)
          .includes(p.author._id.toString())
    );

    return res.status(200).json({ posts });
  }
}
