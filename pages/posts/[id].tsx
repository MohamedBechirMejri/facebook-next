import Header from "../../components/Header";
import PostComponent from "../../components/Post/Post";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Post from "../../models/Post";
import getUser from "../../lib/Auth/getUser";
import Comment from "../../models/Comment";
import User from "../../models/User";

const PostPage = ({ user, post }: { user: any; post: any }) => {
  return (
    <Header user={user}>
      <div className="mx-auto my-4 w-[590px] flex flex-col justify-start items-stretch gap-4 pb-64 z-40 bg-[#f0f2f5] text-[#606266]">
        <PostComponent post={post} user={user} />
      </div>
    </Header>
  );
};

export default PostPage;

export const getServerSideProps = async ({
  req,
  res,
  query,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  query: any;
}) => {
  await dbConnect();

  // @ts-ignore
  let user = await getUser(req, res);
  user = user.user;

  const { id } = query;

  const p = await Post.findById(id)
    .populate({
      path: "comments",
      model: Comment,
    })
    .populate({
      path: "author",
      model: User,
    });

  console.log(p);

  const post = {
    _id: p._id.toString(),
    author: {
      _id: p.author._id.toString(),
      firstName: p.author.firstName,
      lastName: p.author.lastName,
      picture: p.author.picture,
    },
    text: p.text,
    image: p.image,
    audience: p.audience,
    reacts: {
      _id: p.reacts._id.toString(),
      likes: p.reacts.likes.map((id: any) => id.toString()),
      loves: p.reacts.loves.map((id: any) => id.toString()),
      hahas: p.reacts.hahas.map((id: any) => id.toString()),
      wows: p.reacts.wows.map((id: any) => id.toString()),
      sads: p.reacts.sads.map((id: any) => id.toString()),
      angrys: p.reacts.angrys.map((id: any) => id.toString()),
    },
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
    shares: p.shares.map((id: any) => id.toString()),
    comments: p.comments.map((comment: any) => {
      const c = comment.toObject();

      c._id = c._id.toString();
      c.user._id = c.user._id.toString();
      c.reacts._id = c.reacts._id.toString();
      c.reacts.likes = c.reacts.likes.map((id: any) => id.toString());
      c.reacts.loves = c.reacts.loves.map((id: any) => id.toString());
      c.reacts.hahas = c.reacts.hahas.map((id: any) => id.toString());
      c.reacts.wows = c.reacts.wows.map((id: any) => id.toString());
      c.reacts.sads = c.reacts.sads.map((id: any) => id.toString());
      c.reacts.angrys = c.reacts.angrys.map((id: any) => id.toString());
      c.createdAt = c.createdAt.toISOString();
      c.updatedAt = c.updatedAt.toISOString();
      c.user._id = c.user._id.toString();
      return c;
    }),
  };
  return {
    props: {
      user,
      post,
    },
  };
};
