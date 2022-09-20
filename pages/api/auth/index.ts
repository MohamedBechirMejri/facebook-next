import passport from "../../../lib/Auth/passport";

export default passport.authenticate("facebook", {
  scope: [
    // "email",
    "public_profile",
  ],
});
