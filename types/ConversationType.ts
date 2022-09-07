type ConversationType = {
  createdAt: string;
  emoji: string;
  messages: {
    _id: string;
    createdAt: string;
    emoji: {
      text: string;
      size: string;
    };
    image: string;
    text: string;
    user: {
      picture: string;
      _id: string;
    };
  }[];
  theme: string;
  updatedAt: string;
  users: [];
  _id: string;
};

export default ConversationType;
