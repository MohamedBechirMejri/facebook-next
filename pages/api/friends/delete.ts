import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "../../../lib/Auth/getUser";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  await dbConnect();
  const { id } = req.body;
  const user = await getUser(req, res);
  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const receiver = await User.findById(user.user._id);
  const sender = await User.findById(id);

  if (!receiver || !sender) {
    res
      .status(500)
      .json({ message: "Something Went Wrong!", receiver, sender, user });
    return;
  }

  sender.friendRequests.sent.includes(receiver._id) &&
    (sender.friendRequests.sent = sender.friendRequests.sent.filter(
      (id: any) => id.toString() !== receiver._id.toString()
    ));

  receiver.friendRequests.received.includes(sender._id) &&
    (receiver.friendRequests.received = receiver.friendRequests.received.filter(
      (id: any) => id.toString() !== sender._id.toString()
    ));

  await receiver.save();
  await sender.save();

  return res.status(200).json({ requests: receiver.friendRequests });
}
