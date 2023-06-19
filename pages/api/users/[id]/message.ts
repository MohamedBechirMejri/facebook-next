import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import Conversation from "~/models/Conversation";
import User from "~/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  const user = await getUser(req, res);

  let conversation = await Conversation.findOne({
    users: { $all: [id, user.user._id] },
  });

  const user1 = await User.findById(user.user._id);
  const user2 = await User.findById(id);

  if (!conversation) {
    conversation = new Conversation({
      emoji: "👍🏻",
      theme: "#005fff",
      users: [user.user._id, id],
      messages: [],
    });

    await conversation.save();

    user1.conversations.push(conversation._id);
    user2.conversations.push(conversation._id);

    await user1.save();
    await user2.save();
  }

  res.redirect("/messages/" + conversation._id);
}
