import mongoose, { Schema, model } from "mongoose";

const ConversationSchema = new Schema(
  {
    emoji: { type: String, default: "👍🏻" },
    theme: { type: String, default: "#005fff" },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Conversation ||
  model("Conversation", ConversationSchema);
