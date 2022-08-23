import type { NextApiRequest, NextApiResponse } from "next";
import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

const UserProfile = ({ user, profile }: { user: any; profile: any }) => {
  return (
    <Header user={user}>
      <h1 className="text-4xl">{profile.firstName}</h1>
    </Header>
  );
};

export default UserProfile;

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

  const result = await User.findById(id).populate("posts");

  console.log(result.posts);

  const profile = {
    _id: result._id.toString(),
    firstName: result.firstName,
    lastName: result.lastName,
    picture: result.picture,
    posts: result.posts.map((post: any) => {
      const p = post.toObject();

      p._id = p._id.toString();
      p.author = user;
      p.reacts._id = p.reacts._id.toString();
      p.reacts.likes = p.reacts.likes.map((id: any) => id.toString());
      p.reacts.loves = p.reacts.loves.map((id: any) => id.toString());
      p.reacts.hahas = p.reacts.hahas.map((id: any) => id.toString());
      p.reacts.wows = p.reacts.wows.map((id: any) => id.toString());
      p.reacts.sads = p.reacts.sads.map((id: any) => id.toString());
      p.reacts.angrys = p.reacts.angrys.map((id: any) => id.toString());
      p.createdAt = p.createdAt.toISOString();
      p.updatedAt = p.updatedAt.toISOString();

      return p;
    }),
  };

  return {
    props: {
      user,
      profile,
    },
  };
};
