import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import Post from "~/models/Post";
import Comment from "~/models/Comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  await dbConnect();

  const { id } = req.query;
  const { text, image } = req.body;

  const user = await getUser(req, res);
  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const comment = new Comment({
    // @ts-ignore
    text: !text && image ? " " : text,
    image: image || null,
    // @ts-ignore
    user: {
      firstName: user.user.firstName,
      lastName: user.user.lastName,
      picture: user.user.picture,
      _id: user.user._id,
    },
    reacts: {
      likes: [],
      loves: [],
      hahas: [],
      wows: [],
      sads: [],
      angrys: [],
    },
  });
  comment.save(async (err: any, comment: any) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    } else {
      // return res.status(200).json({ message: "Post created", comment });
      const post = await Post.findById(id);

      post.comments = [...post.comments, comment._id];

      post.save((err: any, post: any) => {
        if (err)
          return res.status(500).json({ message: "Something went wrong" });
        // else return res.status(200).json({ message: "Post created", post });
      });

      (async () => {
        try {
          let p = await Post.populate(post, { path: "comments" });
          return res.status(200).json({ message: "Post created", post: p });
        } catch (err) {
          return res.status(500).json({ message: "Something went wrong", err });
        }
      })();
    }
  });
}
