import type { GetServerSideProps } from "next";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Post from "../components/Index/Post";
import PostType from "../types/PostType";
import getPosts from "../lib/getPosts";
import { L49 } from "react-isloading";
import LeftNav from "../components/Index/LeftNav";
import AddPost from "../components/Index/AddPost";
import { useState } from "react";

const friends = [
  {
    name: "test",
    image: "https://picsum.photos/500",
    birthday: "2020-01-01",
    latestConnection: "2020-01-01-00-00-00",
    href: "/user/id",
  },
  {
    name: "test2",
    image: "https://picsum.photos/700",
    birthday: "2020-01-12",
    latestConnection: "2022-08-10-04-36-55",
    href: "/user/id",
  },
];

const Home = ({ posts }: { posts: PostType[] }) => {
  const birthdays = friends.filter(friend => friend.birthday === "2020-08-10");

  const [isAddingPost, setIsAddingPost] = useState(false);
  return (
    <div>
      {isAddingPost && (
        <div
          className="fixed z-[70] w-screen h-screen bg-white opacity-60"
          onClick={() => {
            setIsAddingPost(false);
          }}
        />
      )}
      <Header>
        {isAddingPost && <AddPost setIsAddingPost={setIsAddingPost} />}
        <div className="relative flex w-screen min-h-screen p-2 py-4 text-black">
          <LeftNav />
          <main className="mx-auto w-[590px] flex flex-col justify-start items-stretch gap-4 pb-64 z-40 bg-[#f0f2f5] text-[#606266]">
            <div className="flex flex-col items-stretch justify-center gap-2 p-4 bg-white rounded-lg">
              <div className="flex items-center justify-center gap-2 pb-2">
                <Link href="/user/id">
                  <a className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full">
                      <Image
                        src="https://picsum.photos/700"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </a>
                </Link>
                <p
                  className="w-full p-2 px-4 text-gray-500 transition-all bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setIsAddingPost(true);
                  }}
                >
                  What&#39;s on your mind, Username ?
                </p>
              </div>
              <hr className="w-full" />
              <div className="flex items-center p-2 font-medium justify-evenly">
                <button className="flex items-center gap-2 p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                  <Image
                    src="/Assets/live.svg"
                    height={24}
                    width={24}
                    alt=""
                    style={{
                      filter: " ",
                    }}
                  />
                  Live video
                </button>{" "}
                <button className="flex items-center gap-2 p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                  <Image
                    src="/Assets/photovideo.svg"
                    height={24}
                    width={24}
                    alt=""
                    style={{
                      filter: " ",
                    }}
                  />
                  Photo/video
                </button>{" "}
                <button className="flex items-center gap-2 p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                  <Image
                    src="/Assets/feelingactivity.svg"
                    height={24}
                    width={24}
                    alt=""
                    style={{
                      filter: " ",
                    }}
                  />
                  Feeling/Activity
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-4">
              {posts && posts.length > 0 ? (
                posts.map((p, i) => <Post key={i} post={p} />)
              ) : (
                <L49
                  style={{
                    height: "7rem",
                    width: "7rem",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              )}
            </div>
          </main>
          <div className="h-full w-[280px] overflow-y-scroll m-0 fixed right-4 top-16 pb-24">
            {/* <div>
            <h3>Birthdays</h3>
          </div>  */}{" "}
            <h3 className="p-1 text-lg font-bold">Contacts</h3>
            <div>
              {friends.map((friend, i) => {
                return (
                  <Link href={"/messages" + friend.href} key={i}>
                    <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-1 px-2 rounded-lg transition-all">
                      <div className="relative w-8 h-8 overflow-hidden rounded-full">
                        <Image src={friend.image} alt="" layout="fill" />
                      </div>
                      <h2>{friend.name}</h2>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = (await getPosts()) as PostType[];

  return {
    props: {
      posts: posts || [],
    },
  };
};

export default Home;
