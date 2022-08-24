import type { NextApiRequest, NextApiResponse } from "next";
import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import Image from "next/image";

const UserProfile = ({ user, profile }: { user: any; profile: any }) => {
  return (
    <Header user={user}>
      <div className="relative flex flex-col w-screen min-h-screen p-2 py-4 text-black ">
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-500 h-[48vh] rounded-lg relative overflow-hidden">
          <div
            style={{
              background: "url(https://picsum.photos/2000/1000)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-full"
          />
          <button className="absolute flex items-center justify-center gap-2 p-2 px-3 text-sm font-semibold transition-all bg-white rounded-lg bottom-3 right-3 hover:bg-gray-200 active:scale-95">
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
        <div className="z-10 flex items-end justify-between w-full px-8 -mt-10">
          <div className="flex items-end gap-6">
            <div className="w-40 h-40 overflow-hidden rounded-full ring-4 ring-white">
              <Image
                src={"https://picsum.photos/700"}
                height={1000}
                width={1000}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-semibold">Mohamed Bechir Mejri</h1>
              <p className="mb-2 font-bold text-gray-500">1 friend</p>
              <div>
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <Image
                    src={"https://picsum.photos/700"}
                    height={1000}
                    width={1000}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <button className="p-[0.35rem] px-3 font-semibold text-white bg-[#1b74e4] hover:bg-[#1a6ed8] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2">
              <div
                style={{
                  backgroundImage: `url(/Assets/add.png)`,
                  filter: "invert(1)",
                }}
                className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
              />
              Add to story
            </button>
            <button className="p-[0.35rem] px-3 font-medium tracking-tight bg-[#e4e6eb] hover:bg-[#d8dadf] rounded-lg transition-all flex items-center justify-center gap-2">
              <div
                style={{
                  backgroundImage: `url(/Assets/edit.png)`,
                }}
                className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
              />
              Edit profile
            </button>
          </div>
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
