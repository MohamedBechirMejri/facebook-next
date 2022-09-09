import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../../lib/Auth/getUser";
import dbConnect from "../../../../lib/dbConnect";
import Conversation from "../../../../models/Conversation";

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

  await conversation.delete();

  res.redirect("/messages");
}
