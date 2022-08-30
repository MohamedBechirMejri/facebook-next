import mongoose, { Schema, model } from "mongoose";

const ConversationSchema = new Schema(
  {
    emoji: String,
    theme: String,
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
