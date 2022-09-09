import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../../lib/Auth/getUser";
import dbConnect from "../../../../lib/dbConnect";
import Conversation from "../../../../models/Conversation";
import User from "../../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const user = await getUser(req, res);

  const { id } = req.query;

  let conversation = await Conversation.findById(id);

  if (!conversation.users.includes(user.user._id)) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const user1 = await User.findById(conversation.users[0]._id);
  const user2 = await User.findById(conversation.users[1]._id);

  user1.conversations = user1.conversations.filter(
    (c: string) => c !== conversation._id
  );
  user2.conversations = user2.conversations.filter(
    (c: string) => c !== conversation._id
  );

  await user1.save();
  await user2.save();

  await conversation.delete();

  res.redirect("/messages");
}
