import type { NextApiRequest, NextApiResponse } from "next";
import passport from "../../../lib/Auth/passport";
import nc from "next-connect";

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
    // @ts-ignore
    res.json(req.user);
  }
);

export default handler;
