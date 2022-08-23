import type { NextApiRequest, NextApiResponse } from "next";
import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

const UserProfile = ({ user, profile }: { user: any; profile: any }) => {
  return (
    <Header user={user}>
      <div className="relative flex w-screen min-h-screen p-2 py-4 text-black">
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-500 h-[48vh] rounded-lg relative overflow-hidden">
          <div
            style={{
              background: "url(https://picsum.photos/2000/1000)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-full"
          />
          <button className="absolute flex items-center justify-center gap-2 p-2 px-3 text-sm font-bold transition-all bg-white rounded-lg bottom-3 right-3 hover:bg-gray-200 active:scale-95">
            <div
              style={{
                backgroundImage: `url(/Assets/buttons.png)`,
                backgroundPosition: "0px -437px",
              }}
              className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
            />
            Add cover photo
          </button>
        </div>
      </div>
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
