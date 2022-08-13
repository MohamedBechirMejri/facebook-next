import ReactsType from "./ReactsType";

type CommentType = {
  text: string;
  time: string;
  image?: string;
  user: {
    name: string;
    image: string;
    id: string;
  };
  reacts: ReactsType;
  replies: [
    {
      text: string;
      time: string;
      author: {
        name: string;
        image: string;
        id: string;
      };
    }
  ];
};

export default CommentType;
