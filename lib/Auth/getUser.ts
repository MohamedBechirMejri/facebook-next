const jwt = require("jsonwebtoken");

export const getUser = (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
