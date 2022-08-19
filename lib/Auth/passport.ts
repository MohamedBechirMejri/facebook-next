import User from "../../models/User";

const passport = require("passport");
const FacebookStrategy = require("passport-facebook");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/api/auth/callback",
    },
    //@ts-ignore
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);
      return cb(null, profile);
    }
  )
);

export default passport;
