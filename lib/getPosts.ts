import Post from "../models/Post";
import User from "../models/User";
import dbConnect from "./dbConnect";

const getPosts = async () => {
  await dbConnect();

  const result = await Post.find({}).populate(
    "author",
    "firstName lastName nickname picture id",
    User
  );
  return result.map(doc => {
    const post = doc.toObject();
    post._id = post._id.toString();
    post.author._id = post.author._id.toString();
    post.reacts._id = post.reacts._id.toString();
    post.createdAt = post.createdAt.toISOString();
    post.updatedAt = post.updatedAt.toISOString();
    return post;
  });
};

export default getPosts;
