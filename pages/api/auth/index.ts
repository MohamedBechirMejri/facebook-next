// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "../../../lib/Auth/passport";

export default passport.authenticate("facebook");
