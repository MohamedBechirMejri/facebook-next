import CommentType from "./CommentType";
import ReactsType from "./ReactsType";

type PostType = {
  text: string;
  image?: string;
  href: string;
  date: string;
  group?: string;
  page?: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  audience: string;
  reacts: ReactsType;
  comments: CommentType[];
};

export default PostType;
