import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import getUser from "../lib/Auth/getUser";
import User from "../models/User";
import axios from "axios";

const Home = ({ user, allUsers }: { user: any; allUsers: any }) => {
  allUsers = JSON.parse(allUsers);

  const [requests, setRequests] = useState(user.friendRequests);
  const [friends, setFriends] = useState(user.friends.map((f: any) => f._id));

  const request = (action: string, u: any) => {
    axios
      .post("/api/friends/" + action, {
        id: u._id,
      })
      .then(res => {
        setRequests(res.data.requests);
        if (res.data.friends) setFriends(res.data.friends);
      });
  };

  return (
    <Header user={user}>
      <div className="relative w-screen min-h-screen text-black bg-[#f0f2f5] px-4 p-4">
        <div>
          {(requests.sent.length > 0 || requests.received.length >= 0) && (
            <h1 className="text-xl font-bold">Friend Requests</h1>
          )}
          <div className="flex flex-wrap gap-4 p-4 text-center">
            {allUsers.map((u: any) => {
              return requests.sent.includes(u._id) ||
                requests.received.includes(u._id) ? (
                <div
                  key={u._id}
                  className="flex flex-col items-center w-48 gap-2 overflow-hidden bg-white rounded-lg shadow h-72"
                >
                  <div className="relative w-full h-2/3">
                    <Image src={u.picture} layout="fill" alt="" />
                  </div>
                  <h3 className="font-bold">
                    {u.firstName} {u.lastName}
                  </h3>
                  <div className="flex gap-2">
                    {!requests.sent.includes(u._id) && (
                      <button
                        className="p-2 px-3 font-semibold text-[#18f261] bfg-[#1b74e4] bg-[#e7fff3] hovefr:bg-[#1a6ed8] hover:bg-[#dbf2e5] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95 w-[90%]"
                        onClick={() => {
                          request("confirm", u);
                        }}
                      >
                        Confirm
                      </button>
                    )}
                    <button
                      className="p-2 px-3 font-semibold text-[#f21818] bfg-[#1b74e4] bg-[#ffe7e7] hovefr:bg-[#1a6ed8] hover:bg-[#f2dbdb] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95 w-[100%]"
                      onClick={() => {
                        request(
                          requests.sent.includes(u._id) ? "request" : "delete",
                          u
                        );
                      }}
                    >
                      {requests.sent.includes(u._id)
                        ? "Cancel Request"
                        : "Delete"}
                    </button>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
        {(requests.sent.length > 0 || requests.received.length >= 0) && (
          <hr className="pb-4 border-[#ced0d4]" />
        )}
        <div>
          <h1 className="text-xl font-bold">People You May Know</h1>
          <div className="flex flex-wrap gap-4 p-4 text-center">
            {allUsers.map((u: any) => {
              return friends.includes(u._id) ||
                requests.sent.includes(u._id) ||
                requests.received.includes(u._id) ||
                u._id === user._id ? null : (
                <div
                  key={u._id}
                  className="flex flex-col items-center w-48 gap-3 overflow-hidden bg-white rounded-lg shadow h-72"
                >
                  <div className="relative w-full h-2/3">
                    <Image src={u.picture} layout="fill" alt="" />
                  </div>
                  <h3 className="font-bold">
                    {u.firstName} {u.lastName}
                  </h3>
                  <button
                    className="p-2 px-3 font-semibold text-[#1877f2] bfg-[#1b74e4] bg-[#e7f3ff] hovefr:bg-[#1a6ed8] hover:bg-[#dbe7f2] rounded-lg tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95 w-[90%]"
                    onClick={() => {
                      request("request", u);
                    }}
                  >
                    Add Friend
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Header>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let decoded = null;

  // @ts-ignore
  decoded = await getUser(req, res);

  let allUsers = await User.find();
  return {
    props: {
      user: decoded?.user,
      allUsers: JSON.stringify(allUsers),
    },
  };
};

export default Home;
