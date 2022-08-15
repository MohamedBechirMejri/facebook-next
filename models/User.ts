import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
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
    },
    nickname: {
      type: String,
    },
    picture: {
      type: String,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
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
