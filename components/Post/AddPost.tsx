import Image from "next/image";
import React from "react";
import ImageUpload from "./ImageUpload";
import axios from "axios";

const AddPost = ({
  setIsAddingPost,
  posts,
  setPosts,
}: {
  setIsAddingPost: (isAddingPost: boolean) => void;
  posts: any;
  setPosts: any;
}) => {
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState("");
  const [isUploading, setIsUploading] = React.useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAddingPost(false);

    axios
      .post("/api/posts", {
        text,
        image,
      })
      .then(() => {
        axios.get("/api/posts").then(res => setPosts(res.data.posts));
      });
  };

  return (
    <div className="fixed z-[80] sm:w-[500px] sm:h-[428px] py-4 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl border grid grid-rows-[repeat(20,minmax(0,1fr))] w-[99vw]">
      <form className="flex items-center justify-between [grid-area:1/1/4/2] px-4 w-full">
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
      </form>
      <div className="[grid-area:4/1/5/2] w-full h-full flex items-center">
        <hr className="w-full" />
      </div>
      <textarea
        placeholder="What's on your mind, username ?"
        className="w-full py-4 text-2xl bg-white outline-none [grid-area:5/1/12/2] p-4"
        onChange={e => setText(e.target.value)}
        value={text}
        autoFocus
      />
      <ImageUpload
        setImageLink={setImage}
        isUploading={isUploading}
        setIsUploading={setIsUploading}
      />
      <div className="w-full h-full [grid-area:19/1/21/2] px-2 p-1">
        <button
          className="w-full bg-[#1b74e4] hover:bg-[#1a6ed8] rounded-lg text-white font-bold h-full"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
