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

const CommentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    image: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reacts: ReactsSchema,
    replies: [
      {
        text: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
        image: String,
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        reacts: ReactsSchema,
      },
    ],
  },
  {
    timestamps: true,
  }
);

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
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || model("Post", PostSchema);
