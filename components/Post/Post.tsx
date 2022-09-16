import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PostType from "../../types/PostType";
import Comments from "./Comments";
import Reactions from "./Reactions";
import PostOptions from "./PostOptions";
import { formatDistanceToNow } from "date-fns";

const Post = ({ post, user }: { post: PostType; user: any }) => {
  const [reacts, setReacts] = useState(
    Object.entries(post.reacts).sort((a, b) => b[1].length - a[1].length)
  );
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [isReacting, setIsReacting] = useState(false);
  const [userReaction, setUserReaction] = useState("");

  useEffect(() => {
    if (reacts[1][1].includes(user._id.toString()))
      setUserReaction(reacts[1][0].substring(0, reacts[1][0].length - 1));
    else if (reacts[2][1].includes(user._id.toString()))
      setUserReaction(reacts[2][0].substring(0, reacts[2][0].length - 1));
    else if (reacts[3][1].includes(user._id.toString()))
      setUserReaction(reacts[3][0].substring(0, reacts[3][0].length - 1));
    else if (reacts[4][1].includes(user._id.toString()))
      setUserReaction(reacts[4][0].substring(0, reacts[4][0].length - 1));
    else if (reacts[5][1].includes(user._id.toString()))
      setUserReaction(reacts[5][0].substring(0, reacts[5][0].length - 1));
    else if (reacts[6][1].includes(user._id.toString()))
      setUserReaction(reacts[6][0].substring(0, reacts[6][0].length - 1));
    else setUserReaction("");
  }, [reacts, user._id]);

  return (
    <div className="flex flex-col items-stretch justify-center gap-2 py-4 bg-white rounded-lg animate-reveal">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href={post.author.nickname || "/users/" + post.author._id}>
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
                    ? "/groups/" + post.group._id
                    : post.page
                    ? "/pages/" + post.page._id
                    : post.author.nickname || "/users/" + post.author._id
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
                    href={post.author.nickname || "/users/" + post.author._id}
                  >
                    {" "}
                    <a>{post.author.firstName + " " + post.author.lastName}</a>
                  </Link>{" "}
                  ·
                </span>
              )}
              <span>
                <Link href={"/posts/" + post._id}>
                  <a className="hover:underline">
                    {formatDistanceToNow(new Date(post.createdAt))} ago
                  </a>
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
        <PostOptions user={user} post={post} />
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
                    reacts[2][0].substring(0, reacts[2][0].length - 1) +
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
                    reacts[3][0].substring(0, reacts[3][0].length - 1) +
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
            {comments.length > 0 && (
              <p>
                {comments.length}{" "}
                {comments.length === 1 ? "Comment" : "Comments"}
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
        <div className="relative flex items-center p-2 justify-evenly">
          {isReacting && (
            <Reactions
              setIsReacting={setIsReacting}
              post={post}
              setReacts={setReacts}
            />
          )}
          <button
            className="flex items-center gap-1 p-2 px-10 transition-all rounded-lg hover:bg-gray-100 active:scale-95"
            onClick={() => {
              fetch("/api/posts/" + post._id.toString() + "/like")
                .then(res => res.json())
                .then(data => {
                  if (data) {
                    setReacts(
                      // @ts-ignore
                      Object.entries(data.post.reacts).sort(
                        // @ts-ignore
                        (a, b) => b[1].length - a[1].length
                      )
                    );
                  }
                })
                .catch(err => {});
            }}
            onMouseEnter={() => setIsReacting(true)}
            onMouseLeave={() => setIsReacting(false)}
          >
            <div
              style={{
                backgroundImage:
                  "url(/Assets/" +
                  (userReaction === "love"
                    ? "love.svg"
                    : userReaction === "haha"
                    ? "haha.svg"
                    : userReaction === "wow"
                    ? "wow.svg"
                    : userReaction === "sad"
                    ? "sad.svg"
                    : userReaction === "angry"
                    ? "angry.svg"
                    : "buttons.png") +
                  ")",
                backgroundPosition:
                  userReaction && userReaction !== "like"
                    ? ""
                    : reacts[1][1].includes(user._id.toString())
                    ? "0px -277px"
                    : "0px -297px",
                filter:
                  userReaction === "like"
                    ? "invert(39%) sepia(57%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(147.75%) hue-rotate(202deg) brightness(97%) contrast(96%)"
                    : "none",
                // TODO: animate like button
              }}
              className="w-[18px] h-[18px] bg-no-repeat inline-block bg-auto "
            />
            <span
              className="tracking-tighter capitalize"
              style={{
                color:
                  userReaction === "like"
                    ? "#2078f4"
                    : userReaction === "love"
                    ? "#F33E58"
                    : userReaction === "haha"
                    ? "#F7B125"
                    : userReaction === "wow"
                    ? "#F7B125"
                    : userReaction === "sad"
                    ? "#F7B125"
                    : userReaction === "angry"
                    ? "#E7910F"
                    : "#606266",
                fontWeight: 600,
                fontSize:
                  userReaction && userReaction !== "like" ? "1.15rem" : "1rem",
                // : ".9375rem",
                marginLeft:
                  userReaction && userReaction !== "like" ? "5px" : "0px",
              }}
            >
              {userReaction || "Like"}
            </span>
          </button>
          <button
            className="flex items-center gap-1 p-2 px-10 transition-all rounded-lg hover:bg-gray-100 active:scale-95"
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
          <button className="items-center hidden gap-1 p-2 px-10 transition-all rounded-lg  hover:bg-gray-100 active:scale-95 sm:flex">
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
        <Comments
          user={user}
          post={post}
          comments={comments}
          setComments={setComments}
        />
      )}
    </div>
  );
};

export default Post;
