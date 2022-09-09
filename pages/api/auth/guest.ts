import type { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");
import { setCookie } from "cookies-next";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const dummyAccounts = [
    "630c4752ba3b37d82f37b3e5",
    "631aae39215def3187c4afdf",
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
