// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../../models/Post";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const authData = {
    // TODO: implement jwt
    user: {
      _id: "1",
    },
  };

  Post.findById(id)
    .then(post => {
      if (post.reacts.likes.includes(authData.user._id)) {
        post.reacts.likes = post.reacts.likes.filter(
          //@ts-ignore
          like => like.toString() !== authData.user._id.toString()
        );
      } else {
        post.reacts.likes.push(authData.user._id);
      }

      post.save();
    })
    .then(() => {
      res.status(200).json("done");
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
