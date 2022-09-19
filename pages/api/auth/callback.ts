import type { NextApiRequest, NextApiResponse } from "next";
import passport from "../../../lib/Auth/passport";
import nc from "next-connect";
const jwt = require("jsonwebtoken");
import { setCookie } from "cookies-next";

const handler = nc({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    res.status(500).json({ msg: "Something broke!", err });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get(
  passport.authenticate("facebook", {
    authType: "reauthenticate",
    assignProperty: "user",
    failureRedirect: "/login",
    scope: ["email", "public_profile"],
  }),
  (req, res) => {
    // @ts-ignore
    if (!req.user.email) return res.redirect("/api/auth");

    jwt.sign(
      // @ts-ignore
      { user: req.user },
      process.env.JWT_SECRET,
      { expiresIn: "15d" },
      (err: any, token: any) => {
        setCookie("token", token, { req, res, maxAge: 60 * 60 * 24 * 15 });
        res.redirect("/");
      }
    );
  }
);

export default handler;
