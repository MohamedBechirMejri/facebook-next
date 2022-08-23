import Comment from "../models/Comment";
import Post from "../models/Post";
import User from "../models/User";
import dbConnect from "./dbConnect";

const getPosts = async () => {
  await dbConnect();

  let result = await Post.find({})
    .sort({ createdAt: "desc" })
    .populate("author", "firstName lastName nickname picture id", User);

  result = await Post.populate(result, { path: "comments" });

  return result.map(doc => {
    const post = doc.toObject();
    post._id = post._id.toString();
    post.author._id = post.author._id.toString();
    post.reacts._id = post.reacts._id.toString();
    post.createdAt = post.createdAt.toISOString();
    post.updatedAt = post.updatedAt.toISOString();
    post.reacts.likes = post.reacts.likes.map((id: any) => id.toString());
    post.reacts.loves = post.reacts.loves.map((id: any) => id.toString());
    post.reacts.hahas = post.reacts.hahas.map((id: any) => id.toString());
    post.reacts.wows = post.reacts.wows.map((id: any) => id.toString());
    post.reacts.sads = post.reacts.sads.map((id: any) => id.toString());
    post.reacts.angrys = post.reacts.angrys.map((id: any) => id.toString());
    post.shares = post.shares.map((id: any) => id.toString());
    post.comments = post.comments.map((comment: any) => {
      comment._id = comment._id.toString();
      comment.user._id = comment.user._id.toString();
      comment.reacts._id = comment.reacts._id.toString();
      comment.reacts.likes = comment.reacts.likes.map((id: any) =>
        id.toString()
      );
      comment.reacts.loves = comment.reacts.loves.map((id: any) =>
        id.toString()
      );
      comment.reacts.hahas = comment.reacts.hahas.map((id: any) =>
        id.toString()
      );
      comment.reacts.wows = comment.reacts.wows.map((id: any) => id.toString());
      comment.reacts.sads = comment.reacts.sads.map((id: any) => id.toString());
      comment.reacts.angrys = comment.reacts.angrys.map((id: any) =>
        id.toString()
      );
      comment.createdAt = comment.createdAt.toISOString();
      comment.updatedAt = comment.updatedAt.toISOString();
      return comment;
    });

    doc === result[0] && console.log(post.comments[0].user);

    return post;
  });
};

export default getPosts;
