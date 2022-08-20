import type { NextApiRequest, NextApiResponse } from "next";
import passport from "../../../lib/Auth/passport";
import nc from "next-connect";
const jwt = require("jsonwebtoken");

const handler = nc({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get(
  passport.authenticate("facebook", {
    assignProperty: "user",
    failureRedirect: "/login",
  }),
  (req, res) => {
    jwt.sign(
      // @ts-ignore
      { user: req.user },
      process.env.JWT_SECRET,
      { expiresIn: "15d" },
      (err: any, token: any) => {
        if (err) return res.status(500).json(err);
        else res.redirect("/auth/" + token);
      }
    );
  }
);

export default handler;
