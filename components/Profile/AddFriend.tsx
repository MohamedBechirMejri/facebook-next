import axios from "axios";
import React, { useState } from "react";

const AddFriend = ({ user, profile }: { user: any; profile: any }) => {
  const [requests, setRequests] = useState(user.friendRequests);

  return (
    <button
      className="p-[0.35rem] px-3 font-semibold text-white bg-[#1b74e4] hover:bg-[#1a6ed8] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2"
      onClick={() => {
        axios
          .post("/api/friends/request", {
            id: profile._id,
          })
          .then(
            // res => console.log("data: ", res.data.requests)
            res => setRequests(res.data.requests)
          );
      }}
    >
      <div
        style={{
          backgroundImage: `url(/Assets/addfriend.png)`,
          filter: "invert(1)",
        }}
        className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
      />
      Add Friend
    </button>
  );
};

export default AddFriend;
