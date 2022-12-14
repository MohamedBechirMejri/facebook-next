import mongoose, { Schema, model } from "mongoose";

const ReactsSchema = new Schema({
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  loves: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  hahas: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  wows: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  sads: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  angrys: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const PostSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    image: String,
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
    page: {
      type: Schema.Types.ObjectId,
      ref: "Page",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    audience: {
      type: String,
      enum: ["public", "friends", "only me"],
      default: "public",
    },
    reacts: ReactsSchema,
    shares: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || model("Post", PostSchema);
