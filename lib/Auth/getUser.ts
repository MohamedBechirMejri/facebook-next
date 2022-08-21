import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getCookie("token", {
    req,
    res,
  });

  return jwt.verify(token, process.env.JWT_SECRET);
};

export default getUser;
