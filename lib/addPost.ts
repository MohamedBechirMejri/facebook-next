import Post from "../models/Post";
import User from "../models/User";
import dbConnect from "./dbConnect";

const addPost = async () => {
  await dbConnect();

  const user = new User({
    firstName: "John dfgbd",
    lastName: "Doe dfgbdf",
    email: "m@dfgdm.com",
    nickname: "jddfgoe",
    picture:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    friends: [],
    posts: [],
    groups: [],
    pages: [],
    conversations: [],
    blocks: [],
    saves: [],
  });

  user.save();

  const post = new Post({
    text: "Hello World",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    // group,
    // page,
    author: user.id,
    audience: "public",
    reacts: {
      likes: [user.id],
      loves: [],
      hahas: [],
      wows: [],
      sads: [],
      angrys: [],
    },
    shares: [user.id],
    comments: [],
  });

  post.save();
};

export default addPost;
