import ReactsType from "./ReactsType";

type CommentType = {
  _id: string;
  text: string;
  image?: string;
  user: {
    firstName: string;
    lastName: string;
    picture: string;
    nickname?: string;
    id: string;
  };
  reacts: ReactsType;
  createdAt: string;
  updatedAt?: string;
  // replies: {
  //   text: string;
  //   time: string;
  //   user: {
  //     firstName: string;
  //     lastName: string;
  //     picture: string;
  //     nickname?: string;
  //     id: string;
  //   };
  //   reacts: ReactsType;
  // }[];
};

export default CommentType;
