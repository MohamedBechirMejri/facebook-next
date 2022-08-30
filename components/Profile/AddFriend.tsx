import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";

const AddFriend = ({ user, profile }: { user: any; profile: any }) => {
  const [requests, setRequests] = useState(user.friendRequests);
  const [friends, setFriends] = useState(user.friends);
  const [showMenu, setShowMenu] = useState(false);

  const request = (action: string) => {
    axios
      .post("/api/friends/" + action, {
        id: profile._id,
      })
      .then(res => {
        setRequests(res.data.requests);
        if (res.data.friends) setFriends(res.data.friends);
        if (res.data.blocks) Router.push("/");
      });
  };

  return (
    <>
      <button
        className="p-[0.35rem] px-3 font-semibold text-white bg-[#1b74e4] hover:bg-[#1a6ed8] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95 z-30"
        onClick={() => {
          if (
            friends.includes(profile._id) ||
            requests.received.includes(profile._id)
          )
            setShowMenu(!showMenu);
          else request("request");
        }}
      >
        <div
          style={{
            backgroundImage:
              requests.received.includes(profile._id) ||
              friends.includes(profile._id)
                ? "url(/Assets/respond.png)"
                : requests.sent.includes(profile._id)
                ? "url(/Assets/cancelrequest.png)"
                : "url(/Assets/addfriend.png)",
            filter: "invert(1)",
          }}
          className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
        />
        {friends.includes(profile._id)
          ? "Friends"
          : requests.received.includes(profile._id)
          ? "Respond"
          : requests.sent.includes(profile._id)
          ? "Cancel Request"
          : "Add Friend"}
      </button>

      {showMenu && (
        <div className="absolute z-20 flex flex-col p-2 bg-white border rounded-lg shadow w-72 right-1/2 h-max top-[120%]">
          <button
            className="flex items-center gap-2 p-1 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-green-200"
            onClick={() => {
              if (friends.includes(profile._id)) request("unfriend");
              else request("confirm");

              setShowMenu(false);
            }}
          >
            <span>
              {" "}
              {friends.includes(profile._id) ? "Unfriend" : "Confirm"}{" "}
            </span>
          </button>
          <button
            className="flex items-center gap-2 p-1 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-blue-200"
            onClick={() => {
              if (friends.includes(profile._id)) request("block");
              else request("delete");

              setShowMenu(false);
            }}
          >
            <span>
              {" "}
              {friends.includes(profile._id) ? "Block" : "Delete Request"}{" "}
            </span>
          </button>
        </div>
      )}
      {showMenu && (
        <div
          className="fixed inset-0 z-10 w-screen h-screen bg-transparent"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default AddFriend;
