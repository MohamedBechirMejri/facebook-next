import CommentType from "./CommentType";
import ReactsType from "./ReactsType";

type PostType = {
  text: string;
  image?: string;
  _id: string;
  date: string;
  group?: {
    name: string;
    image: string;
    _id: string;
  };
  page?: {
    name: string;
    image: string;
    _id: string;
  };
  author: {
    firstName: string;
    lastName: string;
    picture: string;
    nickname?: string;
    _id: string;
  };
  audience: string;
  reacts: ReactsType;
  shares: string[];
  comments: CommentType[];
  createdAt: string;
  updatedAt: string;
};

export default PostType;
