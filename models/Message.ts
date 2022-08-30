import mongoose, { Schema, model } from "mongoose";

// const ReactsSchema = new Schema({
//   likes: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   loves: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   hahas: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   wows: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   sads: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   angrys: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
// });

const MessageSchema = new Schema(
  {
    emoji: {
      text: String,
      size: String,
    },
    text: String,
    image: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Message || model("Message", MessageSchema);
