import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PostOptions = ({ user, post }: { user: any; post: any }) => {
  const Router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [saves, setSaves] = useState(user.saves);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    axios.get("/api/posts/" + post._id + "/save").then(res => {
      // console.log(res.data.status); // TODO: Add Toast (Saved | Unsaved)
      setSaves(res.data.saves);
      setIsVisible(false);
    });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    axios.get("/api/posts/" + post._id + "/delete").then(() => Router.reload);
  };

  return (
    <div className="relative">
      <div
        className="py-1 pb-2 px-2 text-xl font-medium hover:bg-[#f2f2f2] active:bg-[#d4d4d4] rounded-full transition-all cursor-pointer relative z-20"
        onClick={() => setIsVisible(!isVisible)}
      >
        •••
      </div>
      {isVisible && (
        <div className="absolute z-20 flex flex-col p-2 bg-white border rounded-lg shadow w-72 right-1 top-12 h-max">
          <button
            className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-green-200"
            onClick={handleSave}
          >
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons3.png"})`,
                backgroundPosition: "0px -347px",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
            />
            <span>{saves.includes(post._id) ? "Unsave" : "Save"} Post</span>
          </button>

          {post.author._id === user._id && (
            <>
              <hr className="my-2" />
              <button className="flex items-center gap-2 p-2 mb-2 text-left transition-all bg-gray-100 rounded-lg cursor-default">
                <div
                  style={{
                    backgroundImage: `url(${"/Assets/buttons4.png"})`,
                    backgroundPosition: "0px -526px",
                  }}
                  className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
                />
                <span> Edit Post</span>
              </button>
              <button
                className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-red-200"
                onClick={handleDelete}
              >
                <div
                  style={{
                    backgroundImage: `url(${"/Assets/buttons3.png"})`,
                    backgroundPosition: "0px -1313px",
                  }}
                  className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
                />
                <span> Delete Post </span>
              </button>
            </>
          )}
        </div>
      )}
      {isVisible && (
        <div
          className="fixed inset-0 z-10 w-screen h-screen bg-transparent"
          onClick={() => setIsVisible(false)}
        />
      )}
    </div>
  );
};

export default PostOptions;
