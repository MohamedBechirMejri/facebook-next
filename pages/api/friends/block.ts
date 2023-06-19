import type { NextApiRequest, NextApiResponse } from "next";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import User from "~/models/User";

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

  const sender = await User.findById(user.user._id);
  const receiver = await User.findById(id);

  if (!receiver || !sender) {
    res
      .status(500)
      .json({ message: "Something Went Wrong!", receiver, sender, user });
    return;
  }

  sender.friends = sender.friends.filter(
    (id: any) => id.toString() !== receiver._id.toString()
  );
  receiver.friends = receiver.friends.filter(
    (id: any) => id.toString() !== sender._id.toString()
  );

  if (sender.blocks.includes(receiver._id))
    sender.blocks = sender.blocks.filter(
      (id: any) => id.toString() !== receiver._id.toString()
    );
  else sender.blocks.push(receiver._id);

  await receiver.save();
  await sender.save();

  return res.status(200).json({
    requests: sender.friendRequests,
    friends: sender.friends,
    blocks: sender.blocks,
  });
}
