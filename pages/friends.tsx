import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import getUser from "../lib/Auth/getUser";
import User from "../models/User";

const Home = ({ user, allUsers }: { user: any; allUsers: any }) => {
  allUsers = JSON.parse(allUsers);

  return (
    <Header user={user}>
      <div className="relative w-screen min-h-screen text-black bg-[#f0f2f5] px-4 p-4">
        <div>
          <h1 className="font-bold">Friend Requests</h1>
        </div>
        <hr />
        <div>
          <h1 className="font-bold">People You May Know</h1>
          <div className="flex flex-wrap gap-4 p-4 text-center">
            {allUsers.map((u: any) => {
              return user.friends.map((f: any) => f._id).includes(u._id) ||
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
                    // onClick={() => {
                    //   if (
                    //     friends.includes(profile._id) ||
                    //     requests.received.includes(profile._id)
                    //   )
                    //     setShowMenu(!showMenu);
                    //   else request("request");
                    // }}
                  >
                    {/* <div
                      style={{
                        backgroundImage: false
                          ? "url(/Assets/cancelrequest.png)"
                          : "url(/Assets/addfriend.png)",
                        filter: "invert(1)",
                      }}
                      className="w-[16px] h-[16px] bg-no-repeat inline-block bg-auto "
                    /> */}
                    {false ? "Cancel Request" : "Add Friend"}
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
