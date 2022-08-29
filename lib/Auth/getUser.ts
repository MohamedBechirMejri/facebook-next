import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/User";
import dbConnect from "../dbConnect";
const jwt = require("jsonwebtoken");

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getCookie("token", {
    req,
    res,
  });

  await dbConnect();

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.user._id);

  return {
    user: {
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      picture: user.picture,
      posts: user.posts.map((id: any) => id.toString()),
      friends: user.friends.map((id: any) => id.toString()),
      friendRequests: {
        received: user.friendRequests.received.map((id: any) => id.toString()),
        sent: user.friendRequests.sent.map((id: any) => id.toString()),
      },
      groups: user.groups.map((id: any) => id.toString()),
      pages: user.pages.map((id: any) => id.toString()),
      conversations: user.conversations.map((id: any) => id.toString()),
      blocks: user.blocks.map((id: any) => id.toString()),
      saves: user.saves.map((id: any) => id.toString()),
      notifications: user.notifications.map((id: any) => id.toString()),
      createdAt: user.createdAt.toString(),
      updatedAt: user.updatedAt.toString(),
    },
  };
};

export default getUser;
