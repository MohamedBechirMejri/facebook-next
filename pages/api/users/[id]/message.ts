import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../../lib/Auth/getUser";
import dbConnect from "../../../../lib/dbConnect";
import Conversation from "../../../../models/Conversation";

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

  if (!conversation) {
    conversation = new Conversation({
      emoji: "👍🏻",
      theme: "#005fff",
      users: [user.user._id, id],
      messages: [],
    });

    await conversation.save();
  }

  res.redirect("/messages/" + conversation._id);
}
