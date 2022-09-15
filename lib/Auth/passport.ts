import User from "../../models/User";
import dbConnect from "../dbConnect";

const passport = require("passport");
const FacebookStrategy = require("passport-facebook");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/api/auth/callback",
      profileFields: [
        "id",
        "first_name",
        "picture",
        "email",
        "last_name",
        // "middle_name",
        // "birthday",
        // "gender",
      ],
    },
    //@ts-ignore
    async function (accessToken, refreshToken, profile, cb) {
      await dbConnect();

      User.findOne({ facebookId: profile.id }, (err: any, user: any) => {
        if (user) return cb(null, user);
        else {
          const newUser = new User({
            facebookId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            picture: profile.photos[0].value,
          });
          // if (profile.username) newUser.nickname = profile.username;
          newUser.save((err: any) => {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
);

export default passport;
