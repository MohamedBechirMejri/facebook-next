import React from "react";

const PostOptions = () => {
  return (
    <div>
      <div className="py-1 pb-2 px-2 text-xl font-medium hover:bg-[#f2f2f2] active:bg-[#d4d4d4] rounded-full transition-all cursor-pointer relative">
        •••
      </div>
      <div className="absolute z-10 flex flex-col p-2 bg-white border rounded-lg shadow w-72 right-10 h-max">
        <button className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-green-200">
          <div
            style={{
              backgroundImage: `url(${"/Assets/buttons3.png"})`,
              backgroundPosition: "0px -347px",
            }}
            className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
          />
          <span> Save Post</span>
        </button>
        <hr className="my-2" />
        <button className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-blue-200">
          <div
            style={{
              backgroundImage: `url(${"/Assets/buttons4.png"})`,
              backgroundPosition: "0px -526px",
            }}
            className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
          />
          <span> Edit Post</span>
        </button>
        <button className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-red-200">
          <div
            style={{
              backgroundImage: `url(${"/Assets/buttons3.png"})`,
              backgroundPosition: "0px -1313px",
            }}
            className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
          />
          <span> Delete Post </span>
        </button>
      </div>
      {/* <div className="fixed inset-0 w-screen h-screen bg-transparent" /> */}
    </div>
  );
};

export default PostOptions;
