import Image from "next/image";
import React from "react";

const AddPost = ({
  setIsAddingPost,
}: {
  setIsAddingPost: (isAddingPost: boolean) => void;
}) => {
  return (
    <div className="fixed z-[80] w-[500px] h-[428px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl border grid grid-rows-[repeat(20,minmax(0,1fr))] ">
      <div className="flex items-center justify-between [grid-area:1/1/4/2] px-4 w-full ">
        <button
          className="flex items-center gap-2 p-2 transition-all rounded-lg opacity-0 cursor-default hover:bg-gray-200"
          onClick={() => setIsAddingPost(false)}
        >
          <Image
            src="/Assets/close.svg"
            height={24}
            width={24}
            alt=""
            style={{
              filter: " ",
            }}
          />
        </button>
        <h1 className="text-xl font-bold">Create Post</h1>
        <button
          className="flex items-center gap-2 p-2 transition-all bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={() => setIsAddingPost(false)}
        >
          <Image
            src="/Assets/close.svg"
            height={24}
            width={24}
            alt=""
            style={{
              filter: " ",
            }}
          />
        </button>
      </div>
      <div className="[grid-area:4/1/5/2] w-full h-full flex items-center">
        <hr className="w-full" />
      </div>
      <textarea
        placeholder="What's on your mind, username ?"
        className="w-full py-4 text-2xl bg-white outline-none [grid-area:5/1/19/2] p-4"
      />
      <div className="w-full h-full [grid-area:19/1/21/2] px-2 p-1">
        <button className="w-full bg-[#1b74e4] hover:bg-[#1a6ed8] rounded-lg text-white font-bold h-full">
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
