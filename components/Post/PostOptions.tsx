import { useState } from "react";

const PostOptions = () => {
  const [isVisible, setIsVisible] = useState(false);

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
