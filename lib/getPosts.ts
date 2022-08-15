import Post from "../models/Post";
import dbConnect from "./dbConnect";

const getPosts = async () => {
  await dbConnect();

  return await Post.find({});
};

export default getPosts;
