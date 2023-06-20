import type { GetServerSideProps } from "next";

import Link from "next/link";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "~/components/Header";
import Post from "~/components/Post/Post";
import PostType from "~/types/PostType";
import LeftNav from "~/components/Index/LeftNav";
import AddPost from "~/components/Post/AddPost";
import getUser from "~/lib/Auth/getUser";
import RightNav from "~/components/Index/RightNav";

const Home = ({ user }: { user: any }) => {
  if (!user) return <h1>Please refresh the page</h1>;

  user = JSON.parse(user).user;

  const [posts, setPosts] = useState([] as PostType[]);

  useEffect(() => {
    axios.get("/api/posts").then(res => setPosts(res.data.posts));
  }, []);

  const [isAddingPost, setIsAddingPost] = useState(false);
  return (
    <>
      {isAddingPost && (
        <div
          className="fixed z-[70] w-screen h-screen bg-white opacity-60"
          onClick={() => setIsAddingPost(false)}
        />
      )}
      <Header user={user}>
        {isAddingPost && (
          <AddPost
            setIsAddingPost={setIsAddingPost}
            posts={posts}
            setPosts={setPosts}
          />
        )}
        <div className="relative flex w-screen min-h-screen p-2 py-4 text-black">
          <LeftNav user={user} />
          <main className="mx-auto w-screen sm:w-[590px] flex flex-col justify-start items-stretch gap-4 pb-64 z-40 bg-[#f0f2f5] text-[#606266]">
            <div className="flex flex-col items-stretch justify-center gap-2 p-4 bg-white rounded-lg">
              <div className="flex items-center justify-center gap-2 pb-2">
                <Link
                  href="/user/id"
                  className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all"
                >
                  <div className="relative w-10 h-10 overflow-hidden rounded-full">
                    <Image src={user.picture} alt="" layout="fill" />
                  </div>
                </Link>
                <p
                  className="w-full p-2 px-4 text-sm text-gray-500 transition-all bg-gray-100 rounded-full cursor-pointer sm:text-base hover:bg-gray-200"
                  onClick={() => {
                    setIsAddingPost(true);
                  }}
                >
                  What&#39;s on your mind, {user.firstName} ?
                </p>
              </div>
              <hr className="w-full" />
              <div className="flex items-center p-2 font-medium justify-evenly">
                <button className="flex items-center flex-shrink-0 gap-2 p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                  <Image
                    src="/Assets/live.svg"
                    height={24}
                    width={24}
                    alt=""
                    style={{ filter: " " }}
                  />
                  <span className="hidden sm:block">Live video</span>
                </button>{" "}
                <button className="flex items-center flex-shrink-0 gap-2 p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                  <Image
                    src="/Assets/photovideo.svg"
                    height={24}
                    width={24}
                    alt=""
                    style={{ filter: " " }}
                  />
                  <span className="hidden sm:block">Photo/video</span>
                </button>{" "}
                <button className="flex items-center flex-shrink-0 gap-2 p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                  <Image
                    src="/Assets/feelingactivity.svg"
                    height={24}
                    width={24}
                    alt=""
                    style={{ filter: " " }}
                  />
                  <span className="hidden sm:block">Feeling/Activity</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-4">
              {posts && posts.length > 0 ? (
                posts.map((p, i) =>
                  p.author._id === user._id ||
                  user.friends
                    ?.map((f: any) => f._id)
                    .includes(p.author._id) ? (
                    <Post key={i} post={p} user={user} />
                  ) : null
                )
              ) : (
                <div className="absolute flex flex-col items-center justify-center gap-2 font-medium -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <p>Your Feed Is Empty!</p>
                  <Link
                    href="/friends"
                    className="block p-2 font-medium text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 active:scale-95 w-max"
                  >
                    Find Some Friends
                  </Link>
                </div>
              )}
            </div>
          </main>
          <RightNav user={user} />
        </div>
      </Header>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let user = null;

  // @ts-ignore
  user = await getUser(req, res);

  return { props: { user: JSON.stringify(user) } };
};

export default Home;
