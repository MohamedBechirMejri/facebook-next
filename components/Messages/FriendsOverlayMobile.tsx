import { useState } from "react";
import Image from "next/legacy/image";

const FriendsOverlay = ({ user }: { user: any }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center h-full">
      <button
        className="relative z-20 px-[.35rem] bg-gray-100 rounded-full transition-all hover:bg-gray-200 active:bg-gray-300"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div
          style={{
            backgroundImage: `url(${"/Assets/buttons9.png"})`,
            backgroundPosition: "0px -557px",
          }}
          className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
        />
      </button>

      {isVisible && (
        <div className="fixed z-20 flex flex-col overflow-scroll bg-white border rounded-lg shadow-lg top-1/2 w-full left-1/2 max-h-[25rem] overflow-y-scroll px-4 max-w-[25rem] -translate-x-1/2 -translate-y-1/2">
          <h1 className="w-full pt-4 text-center">Friends</h1>
          {user.friends.map((friend: any) => (
            <div
              key={friend._id}
              className="flex items-center justify-between py-4 text-lg border-b"
            >
              <Image
                src={friend.picture}
                height={50}
                width={50}
                alt=""
                style={{
                  borderRadius: "9999999px",
                }}
              />
              <h1>
                {friend.firstName} {friend.lastName}
              </h1>
              <a
                href={"/api/users/" + friend._id + "/message"}
                className="p-1 px-2 text-base text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95"
              >
                Message
              </a>
            </div>
          ))}
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

export default FriendsOverlay;
