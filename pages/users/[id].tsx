import type { NextApiRequest, NextApiResponse } from "next";
import Header from "~/components/Header";
import getUser from "~/lib/Auth/getUser";
import dbConnect from "~/lib/dbConnect";
import User from "~/models/User";
import Image from "next/legacy/image";
import Nav from "~/components/Profile/Nav";
import Post from "~/components/Post/Post";
import PostType from "~/types/PostType";
import Link from "next/link";
import PostModel from "~/models/Post";
import AddFriend from "~/components/Profile/AddFriend";

const UserProfile = ({ user, profile }: { user: any; profile: any }) => {
  return (
    <Header user={user}>
      <div className="relative flex flex-col w-screen min-h-screen p-2 pb-4 text-black max-w-[1280px] mx-auto">
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-500 h-[48vh] rounded-lg relative overflow-hidden">
          <div
            style={{
              background: "url(https://picsum.photos/2000/1000)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-full"
          />
          {user._id === profile._id && (
            <button className="absolute z-[70] flex items-center justify-center gap-2 p-2 px-3 text-sm font-semibold transition-all bg-white rounded-lg bottom-3 right-3 hover:bg-gray-200 active:scale-95 sm:-translate-y-0 -translate-y-10">
              <div
                style={{
                  backgroundImage: `url(/Assets/buttons.png)`,
                  backgroundPosition: "0px -437px",
                }}
                className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
              />
              Add cover photo
            </button>
          )}
        </div>
        <div className="z-50 flex flex-col items-end justify-between w-full px-8 pb-4 -mt-10 xl:flex-row">
          <div className="flex flex-col items-center w-full gap-6 sm:items-end sm:flex-row">
            <div className="w-40 h-40 overflow-hidden rounded-full ring-4 ring-white">
              <Image src={profile.picture} height={1000} width={1000} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-semibold">
                {profile.firstName + " " + profile.lastName}
              </h1>
              <p
                className={`mb-1 font-bold text-gray-500 ${
                  !profile.friends.length && " opacity-0 "
                }`}
              >
                {profile.friends.length} friend
                {profile.friends.length > 1 && "s"}
              </p>
              {!profile.friends.length ? (
                <div className="w-8 h-8 overflow-hidden rounded-full opacity-0">
                  <Image
                    src={"https://picsum.photos/700"}
                    height={1000}
                    width={1000}
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  {profile.friends.map((friend: any, i: number) => {
                    return i < 10 ? (
                      <Link
                        key={i}
                        href={"/users/" + friend._id}
                        className="block w-8 h-8 -mr-1 overflow-hidden transition-all border-2 border-white rounded-full active:scale-95"
                        style={{
                          zIndex: i,
                        }}
                      >
                        <Image
                          src={friend.picture}
                          height={1000}
                          width={1000}
                          alt=""
                        />
                      </Link>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          </div>
          {user._id !== profile._id && (
            <div className="relative flex justify-center gap-2">
              <AddFriend user={user} profile={profile} />
              <a
                href={"/api/users/" + profile._id + "/message"}
                className="p-[0.35rem] px-3 font-medium tracking-tight bg-[#e4e6eb] hover:bg-[#d8dadf] rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <div
                  style={{
                    backgroundImage: `url(/Assets/message.png)`,
                  }}
                  className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
                />
                Message
              </a>
            </div>
          )}
        </div>
        <div className="w-full h-[1px] px-8">
          <div className="w-full h-full bg-[#ccced2]" />
        </div>
        <Nav />
        <div className="flex flex-col items-start justify-center p-4 px-8 sm:flex-row">
          <div className="flex flex-col w-full gap-3 mr-4 sm:sticky top-20 ">
            <div className="p-4 bg-white border rounded-lg shadow">
              <h1 className="text-lg font-semibold">Intro</h1>
            </div>
            <div className="p-3 bg-white border rounded-lg shadow">
              <h1 className="flex items-center justify-between w-full pb-2 text-lg font-semibold">
                <span className="text-sm lg-text-lg">Photos</span>
                <Link
                  href={"/users/" + user._id + "/photos"}
                  className="font-normal text-[#216FDB] hover:bg-[#f2f2f2] transition-all p-1 px-2 rounded-lg text-sm lg-text-base"
                >
                  See all photos
                </Link>
              </h1>
              <div className="grid grid-cols-3 gap-1 m-1">
                {profile.posts
                  .filter((p: any) => p.image)
                  .map((p: any, i: number) =>
                    i > 5 ? null : (
                      <Link
                        href={"/posts/" + p._id}
                        key={p._id}
                        className="transition-all hover:contrast-75"
                      >
                        <Image
                          src={p.image}
                          height={1000}
                          width={1000}
                          alt=""
                          style={{
                            borderTopLeftRadius: i === 0 ? ".5rem" : "",
                            borderTopRightRadius: i === 2 ? ".5rem" : "",
                            borderBottomLeftRadius: i === 3 ? ".5rem" : "",
                            borderBottomRightRadius:
                              i === 5 || i + 1 === undefined ? ".5rem" : "",
                          }}
                        />
                      </Link>
                    )
                  )}
              </div>
            </div>
            {profile.friends.length > 0 && (
              <div className="p-3 bg-white border rounded-lg shadow">
                <h1 className="flex items-center justify-between w-full pb-2 text-lg font-semibold">
                  <span className="flex flex-col mb-2">
                    <span className="text-sm lg-text-lg">Friends </span>
                    <span
                      className={` text-base text-gray-500 ${
                        !profile.friends.length && " opacity-0 "
                      }`}
                    >
                      {profile.friends.length} friend
                      {profile.friends.length !== 1 && "s"}
                    </span>
                  </span>
                  <Link
                    href={"/users/" + user._id + "/friends"}
                    className="font-normal text-[#216FDB] hover:bg-[#f2f2f2] transition-all p-1 px-2 rounded-lg text-sm lg-text-base"
                  >
                    See all friends
                  </Link>
                </h1>
                <div className="grid grid-cols-3 gap-1 m-1">
                  {profile.friends.map((friend: any, i: number) => {
                    return i < 10 ? (
                      <Link
                        key={i}
                        href={"/users/" + friend._id}
                        className="transition-all hover:contrast-75 active:scale-95"
                      >
                        <Image
                          src={friend.picture}
                          height={1000}
                          width={1000}
                          alt=""
                          style={{
                            borderRadius: ".5rem",
                          }}
                        />
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            )}
            {/* <div>
              Privacy · Terms · Advertising · Ad Choices · Cookies · · Meta ©
              2022
            </div> */}
          </div>
          <div className="w-full mt-8 sm:ml-4 sm:mt-0">
            <div className="flex items-center justify-between w-full p-2 px-4 bg-white border rounded-lg shadow">
              <h1 className="text-lg font-semibold">Posts</h1>
              <button className="flex items-center justify-center gap-2 p-2 px-3 font-semibold tracking-tight transition-all bg-gray-200 rounded-lg hover:bg-gray-300 active:scale-95">
                {" "}
                <div
                  style={{
                    backgroundImage: `url(${"/Assets/buttons2.png"})`,
                    backgroundPosition: "0px -134px",
                  }}
                  className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto"
                />
                <span>Filters</span>
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-4 rounded-lg ">
              {profile.posts.map((p: PostType) => (
                <Post key={p._id} user={user} post={p} />
              ))}
            </div>
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
  // @ts-ignore
  user = user.user;

  const { id } = query;

  const result = await User.findById(id)
    .populate({
      path: "posts",
      model: PostModel,
    })
    .populate({
      path: "friends",
      model: User,
    });

  const profile = {
    _id: result._id.toString(),
    firstName: result.firstName,
    lastName: result.lastName,
    picture: result.picture,
    friends: result.friends.map((f: any) => ({
      _id: f._id.toString(),
      firstName: f.firstName,
      lastName: f.lastName,
      picture: f.picture,
    })),
    posts: result.posts.map((post: any) => {
      const p = post.toObject();

      p._id = p._id.toString();
      // TODO: get the real author from db (otherwise this will break shares)
      p.author = {
        _id: result._id.toString(),
        firstName: result.firstName,
        lastName: result.lastName,
        picture: result.picture,
      };
      p.reacts._id = p.reacts._id.toString();
      p.reacts.likes = p.reacts.likes.map((id: any) => id.toString());
      p.reacts.loves = p.reacts.loves.map((id: any) => id.toString());
      p.reacts.hahas = p.reacts.hahas.map((id: any) => id.toString());
      p.reacts.wows = p.reacts.wows.map((id: any) => id.toString());
      p.reacts.sads = p.reacts.sads.map((id: any) => id.toString());
      p.reacts.angrys = p.reacts.angrys.map((id: any) => id.toString());
      p.createdAt = p.createdAt.toISOString();
      p.updatedAt = p.updatedAt.toISOString();

      p.comments = [];

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
