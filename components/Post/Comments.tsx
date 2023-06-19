import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import CommentType from "~/types/CommentType";
import PostType from "~/types/PostType";

const Comments = ({
  post,
  user,
  comments,
  setComments,
}: {
  post: PostType;
  user: any;
  comments: any;
  setComments: any;
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!text) return;

    fetch("/api/posts/" + post._id + "/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        // image,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setComments(res.post.comments);
        setText("");
      });
  };

  return (
    <div className="px-4">
      <hr />
      <p className="w-full py-2 text-sm font-semibold text-right">
        All Comments
      </p>
      <form>
        <div className="flex items-center gap-2">
          <div className="flex items-center overflow-hidden rounded-full">
            <Image src={user.picture} alt="" height={35} width={35} />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-full px-4 p-2 rounded-full bg-[#f0f2f5] outline-none"
              placeholder="Write a comment..."
              onChange={e => {
                setText(e.target.value);
              }}
              value={text}
            />
          </div>
          <button
            className="p-2 text-base transition-all rounded-full hover:font-semibold hover:bg-gray-500 hover:text-white"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 pt-4 overflow-y-scroll max-h-[30rem] ">
        {comments.map((comment: CommentType) => (
          <div key={comment._id}>
            <div className="flex items-start gap-2">
              <div className="flex items-center overflow-hidden rounded-full shrink-0">
                <Image
                  src={comment.user.picture || "https://picsum.photos/700"}
                  alt=""
                  height={35}
                  width={35}
                />
              </div>
              <div>
                <div className="px-4 p-2 rounded-[18px] bg-[#f0f2f5]  ">
                  <Link
                    href={comment.user.nickname || "/users/" + comment.user._id}
                    className="font-bold transition-all hover:underline"
                  >
                    {comment.user.firstName + " " + comment.user.lastName}
                  </Link>
                  <p className="">{comment.text}</p>
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
  );
};

export default Comments;
