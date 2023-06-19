import type { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import dbConnect from "~/lib/dbConnect";
import User from "~/models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  jwt.sign(
    { user },
    process.env.JWT_SECRET!,
    { expiresIn: "15d" },
    (err: any, token: any) => {
      setCookie("token", token, { req, res, maxAge: 60 * 60 * 24 * 15 });
      res.redirect("/");
    }
  );
};

export default handler;
