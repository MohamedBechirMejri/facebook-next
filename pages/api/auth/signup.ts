import type { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

import dbConnect from "~/lib/dbConnect";
import User from "~/models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { firstName, lastName, email, password } = req.body;

  console.log(req.body);

  const user = await User.findOne({ email });

  if (user) return res.status(401).json({ message: "User already exists" });

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    picture: "https://picsum.photos/500",
  });

  await newUser.save().catch((err: any) => {
    console.log(err);

    return res.status(401).json({ message: "Invalid credentials", error: err });
  });

  jwt.sign(
    { user: newUser },
    process.env.JWT_SECRET!,
    { expiresIn: "15d" },
    (err: any, token: any) => {
      setCookie("token", token, { req, res, maxAge: 60 * 60 * 24 * 15 });
      return res.redirect("/login");
    }
  );
};

export default handler;
