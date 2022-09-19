import passport from "../../../lib/Auth/passport";

export default passport.authenticate("facebook", {
  authType: "reauthenticate",
  scope: ["email", "public_profile"],
});
