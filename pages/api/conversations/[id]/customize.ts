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
  if (req.method === "POST") {
    await dbConnect();

    const user = await getUser(req, res);

    const { id } = req.query;

    let conversation = await Conversation.findById(id);

    if (!conversation.users.includes(user.user._id)) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { theme, emoji } = req.body;

    if (theme) conversation.theme = theme;
    if (emoji) conversation.emoji = emoji;

    await conversation.save();

    conversation = await Conversation.findById(id)
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
}
