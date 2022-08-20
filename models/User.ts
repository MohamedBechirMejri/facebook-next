import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    facebookId: { type: String, required: true },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nickname: {
      type: String,
      unique: true,
    },
    picture: {
      type: String,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
    pages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Page",
      },
    ],
    conversations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
    blocks: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    saves: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    notifications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],
    friendRequests: {
      received: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      sent: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || model("User", UserSchema);
