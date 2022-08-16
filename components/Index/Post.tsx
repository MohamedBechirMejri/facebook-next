import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostType from "../../types/PostType";

const Post = ({ post }: { post: PostType }) => {
  const reacts = Object.entries(post.reacts).sort(
    (a, b) => b[1].length - a[1].length
  );

  const [showComments, setShowComments] = React.useState(false);

  post.comments = [
    {
      _id: "1",
      text: "This is a comment",
      user: {
        firstName: "test",
        lastName: "test",
        picture: "https://picsum.photos/700",
        nickname: "test",
        id: "test",
      },
      reacts: {
        likes: [],
        loves: ["1", "2", "3", "4", "5"],
        hahas: [],
        wows: [],
        sads: [],
        angrys: [],
      },
      createdAt: "2020-01-01-00-00-00",
    },
    {
      _id: "2",
      text: "This is a comment 2",
      user: {
        firstName: "test 2",
        lastName: "test",
        picture: "https://picsum.photos/800",
        nickname: "test",
        id: "test",
      },
      reacts: {
        likes: ["1", "2"],
        loves: ["3", "4"],
        hahas: ["5", "6", "7"],
        wows: [],
        sads: [],
        angrys: [],
      },
      createdAt: "2020-01-02-00-00-00",
    },
    {
      _id: "3",
      text: "This is a comment 3",
      user: {
        firstName: "test 3",
        lastName: "test",
        picture: "https://picsum.photos/900",
        nickname: "test",
        id: "test",
      },
      reacts: {
        likes: [],
        loves: [],
        hahas: [],
        wows: [],
        sads: [],
        angrys: [],
      },
      createdAt: "2020-01-03-00-00-00",
    },
  ];

  return (
    <div className="flex flex-col items-stretch justify-center gap-2 py-4 bg-white rounded-lg">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href={post.author.nickname || "/users/" + post.author.id}>
            <a className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src={
                    post.author.picture ||
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  }
                  alt=""
                  layout="fill"
                />
              </div>
            </a>
          </Link>
          <div>
            <h1 className="font-bold">
              <Link
                href={
                  post.group
                    ? "/groups/" + post.group.id
                    : post.page
                    ? "/pages/" + post.page.id
                    : post.author.nickname || "/users/" + post.author.id
                }
              >
                <a className="hover:underline">
                  {post.group?.name ||
                    post.page?.name ||
                    post.author.firstName + " " + post.author.lastName}
                </a>
              </Link>
            </h1>
            <p className="flex items-center gap-1 text-xs">
              {post.group && (
                <span>
                  <Link
                    href={post.author.nickname || "/users/" + post.author.id}
                  >
                    {" "}
                    <a>{post.author.firstName + " " + post.author.lastName}</a>
                  </Link>{" "}
                  ·
                </span>
              )}
              <span>
                <Link href={"/posts/" + post._id}>
                  {/* TODO: format date */}
                  <a className="hover:underline">{post.createdAt}</a>
                </Link>
              </span>{" "}
              ·{" "}
              <span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                >
                  <g transform="translate(-448 -544)">
                    <g>
                      <path
                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                        transform="translate(354 143.5)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="py-1 px-2 text-xl font-medium hover:bg-[#f2f2f2] rounded-full transition-all cursor-pointer">
          •••
        </div>
      </div>
      <p className="p-6 py-4 text-justify">{post.text}</p>
      {post.image && (
        <Link href="/posts/id">
          <a className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all">
            <div className="w-[590px] ">
              <Image src={post.image} alt="" height={700} width={700} />
            </div>
          </a>
        </Link>
      )}
      <div className="px-4">
        <div className="flex items-center justify-between pb-2 text-gray-500">
          <div className="flex gap-1">
            <div>
              {reacts[1][1].length > 0 && (
                <Image
                  src={
                    "/Assets/" +
                    reacts[1][0].substring(0, reacts[1][0].length - 1) +
                    ".svg"
                  }
                  alt=""
                  height={20}
                  width={20}
                />
              )}
              {reacts[2][1].length > 0 && (
                <Image
                  src={
                    "/Assets/" +
                    reacts[1][0].substring(0, reacts[1][0].length - 1) +
                    ".svg"
                  }
                  alt=""
                  height={20}
                  width={20}
                />
              )}
              {reacts[3][1].length > 0 && (
                <Image
                  src={
                    "/Assets/" +
                    reacts[1][0].substring(0, reacts[1][0].length - 1) +
                    ".svg"
                  }
                  alt=""
                  height={20}
                  width={20}
                />
              )}
            </div>
            <p>
              {reacts[1][1].length > 0 &&
                reacts[1][1].length +
                  reacts[2][1].length +
                  reacts[3][1].length +
                  reacts[4][1].length +
                  reacts[5][1].length +
                  reacts[6][1].length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {post.comments.length > 0 && (
              <p>
                {post.comments.length}{" "}
                {post.comments.length === 1 ? "Comment" : "Comments"}
              </p>
            )}
            {post.shares.length > 0 && (
              <p>
                {post.shares.length}{" "}
                {post.shares.length === 1 ? "Share" : "Shares"}
              </p>
            )}
          </div>
        </div>
        <hr />
        <div className="flex items-center p-2 font-medium justify-evenly">
          <button className="flex items-center gap-1 p-2 px-10 transition-all rounded-lg hover:bg-gray-100">
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons.png"})`,
                backgroundPosition: "0px -297px",
              }}
              className="w-[18px] h-[18px] bg-no-repeat inline-block bg-auto"
            />
            <span>Like</span>
          </button>
          <button
            className="flex items-center gap-1 p-2 px-10 transition-all rounded-lg hover:bg-gray-100"
            onClick={() => {
              setShowComments(!showComments);
            }}
          >
            {" "}
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons.png"})`,
                backgroundPosition: "0px -259px",
              }}
              className="w-[18px] h-[18px] bg-no-repeat inline-block bg-auto"
            />
            <span>Comment</span>
          </button>
          <button className="flex items-center gap-1 p-2 px-10 transition-all rounded-lg hover:bg-gray-100">
            {" "}
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons.png"})`,
                backgroundPosition: "0px -316px",
              }}
              className="w-[18px] h-[18px] bg-no-repeat inline-block bg-auto"
            />
            <span>Share</span>
          </button>
        </div>
      </div>
      {showComments && (
        <div className="px-4">
          <hr />
          <p className="w-full py-2 text-sm font-semibold text-right">
            All Comments
          </p>
          <form>
            <div className="flex items-center gap-2">
              <div className="flex items-center overflow-hidden rounded-full">
                <Image
                  src={"https://picsum.photos/700"}
                  alt=""
                  height={35}
                  width={35}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full px-4 p-2 rounded-full bg-[#f0f2f5] outline-none"
                  placeholder="Write a comment..."
                />
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-4 pt-4">
            {post.comments.map(comment => (
              <div key={comment._id}>
                <div className="flex items-start gap-2">
                  <div className="flex items-center overflow-hidden rounded-full">
                    <Image
                      src={comment.user.picture || "https://picsum.photos/700"}
                      alt=""
                      height={35}
                      width={35}
                    />
                  </div>
                  <div>
                    <div className="w-max px-4 p-2 rounded-[18px] bg-[#f0f2f5]  ">
                      <h1 className="font-bold">
                        {comment.user.firstName + " " + comment.user.lastName}
                      </h1>
                      <p>{comment.text}</p>
                    </div>{" "}
                    <div className="flex items-center gap-4 pt-2 pl-4 text-xs font-bold">
                      <button className="hover:underline">Like</button>
                      <button className="hover:underline">Reply</button>
                      <p>1d</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
            <p className="pt-2 text-sm font-bold cursor-pointer hover:underline">
              Write a Comment
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
