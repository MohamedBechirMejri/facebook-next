import axios from "axios";
import React, { useState } from "react";

const AddFriend = ({ user, profile }: { user: any; profile: any }) => {
  const [requests, setRequests] = useState(user.friendRequests);

  const request = (action: string) => {
    axios
      .post("/api/friends/" + action, {
        id: profile._id,
      })
      .then(res => setRequests(res.data.requests));
  };

  // const deleteRequest = () => { request
  //   axios
  //     .post("/api/friends/delete", {
  //       id: profile._id,
  //     })
  //     .then(res => setRequests(res.data.requests));
  // };

  // const confirmRequest = () => {
  //   axios
  //     .post("/api/friends/confirm", {
  //       id: profile._id,
  //     })
  //     .then(res => setRequests(res.data.requests));
  // };
  // const unfriend = () => {
  //   axios
  //     .post("/api/friends/unfriend", {
  //       id: profile._id,
  //     })
  //     .then(res => setRequests(res.data.requests));
  // };
  // const block = () => {
  //   axios
  //     .post("/api/friends/block", {
  //       id: profile._id,
  //     })
  //     .then(res => setRequests(res.data.requests));
  // };

  return (
    <button
      className="p-[0.35rem] px-3 font-semibold text-white bg-[#1b74e4] hover:bg-[#1a6ed8] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95"
      onClick={() => {}}
    >
      <div
        style={{
          backgroundImage: requests.received.includes(profile._id)
            ? "url(/Assets/respond.png)"
            : requests.sent.includes(profile._id)
            ? "url(/Assets/cancelrequest.png)"
            : "url(/Assets/addfriend.png)",
          filter: "invert(1)",
        }}
        className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
      />
      {requests.received.includes(profile._id)
        ? "Respond"
        : requests.sent.includes(profile._id)
        ? "Cancel Request"
        : "Add Friend"}
    </button>
  );
};

export default AddFriend;
