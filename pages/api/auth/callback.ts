//  passport.authenticate('facebook', { assignProperty: 'federatedUser', failureRedirect: '/login' }),

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "../../../lib/Auth/passport";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate("facebook", {
    assignProperty: "user",
    failureRedirect: "/login",
  }),
    //@ts-ignore
    console.log(req);

  res.status(200).json("req.user");
}
