import type { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");
import { setCookie } from "cookies-next";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const dummyAccounts = [
    "63256014f346205125e987c4",
    "63256070f346205125e987c5",
  ];

  const guestId =
    dummyAccounts[Math.floor(Math.random() * dummyAccounts.length)];

  const guest = await User.findById(guestId);

  jwt.sign(
    // @ts-ignore
    { user: guest },
    process.env.JWT_SECRET,
    { expiresIn: "15d" },
    (err: any, token: any) => {
      setCookie("token", token, { req, res, maxAge: 60 * 60 * 24 * 15 });
      res.redirect("/");
    }
  );
};

export default handler;
