import CommentType from "./CommentType";
import ReactsType from "./ReactsType";

type PostType = {
  text: string;
  image?: string;
  id: string;
  date: string;
  group?: {
    name: string;
    image: string;
    id: string;
  };
  page?: {
    name: string;
    image: string;
    id: string;
  };
  author: {
    firstName: string;
    lastName: string;
    picture: string;
    id: string;
  };
  audience: string;
  reacts: ReactsType;
  shares: string[];
  comments: CommentType[];
};

export default PostType;
