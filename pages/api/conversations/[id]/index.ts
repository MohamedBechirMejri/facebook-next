import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import Conversation from "~/models/Conversation";
import User from "~/models/User";
import Message from "~/models/Message";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await dbConnect();

    const user = await getUser(req, res);

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { id } = req.query;

    const conversation = await Conversation.findById(id)
      .populate({
        path: "users",
        model: User,
      })
      .populate({
        path: "messages",
        model: Message,
        populate: {
          path: "user",
          model: User,
        },
      });

    res.status(200).json({ conversation });
  }

  //----------------------------------------------

  if (req.method === "POST") {
    await dbConnect();

    const user = await getUser(req, res);

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { id } = req.query;

    let conversation = await Conversation.findById(id)
      .populate({
        path: "users",
        model: User,
      })
      .populate({
        path: "messages",
        model: Message,
        populate: {
          path: "user",
          model: User,
        },
      });

    const { text, image, emoji } = req.body;

    const message = new Message({ text, image, emoji, user: user.user._id });

    message
      .save()
      .then((msg: any) => {
        conversation.messages.push(msg._id);
        return conversation.save();
      })
      .then(() => {
        return Conversation.findById(id)
          .populate({
            path: "users",
            model: User,
          })
          .populate({
            path: "messages",
            model: Message,
            populate: {
              path: "user",
              model: User,
            },
          });
      })
      .then((conversation: any) => {
        return res.status(200).json({ conversation });
      })
      .catch((err: any) => {
        return res.status(500).json({ message: "Something went wrong", err });
      });
  }
}
