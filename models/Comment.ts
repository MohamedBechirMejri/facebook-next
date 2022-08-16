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

export default mongoose.models.Comment || model("Comment", CommentSchema);
