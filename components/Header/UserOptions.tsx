import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import Router from "next/router";

const UserOptions = ({ user }: { user: any }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleLogout = () => {
    deleteCookie("token");
    Router.replace("/");
  };

  return (
    <div>
      <button
        className="bg-[#d8dadf] rounded-full w-10 h-10 relative overflow-hidden transition-all active:scale-95 z-20 "
        onClick={() => setIsVisible(!isVisible)}
      >
        <Image src={user.picture} alt="" layout="fill" />
      </button>
      {/* ••• */}
      {/* </div> */}
      {isVisible && (
        <div className="absolute z-20 flex flex-col p-2 bg-white border rounded-lg shadow w-72 right-4 h-max top-full">
          <Link href={"/users/" + user._id}>
            <a className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-green-200">
              <div
                className="bg-[#d8dadf] rounded-full w-10 h-10 relative overflow-hidden transition-all active:scale-95 z-20 "
                onClick={() => setIsVisible(!isVisible)}
              >
                <Image src={user.picture} alt="" layout="fill" />
              </div>
              <span className="font-bold">
                {user.firstName + " " + user.lastName}
              </span>
            </a>
          </Link>
          <hr className="my-2" />
          <Link href={"/users/" + user._id + "/settings"}>
            <a className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-blue-200">
              <div className=" bg-[#d8dadf] px-[.6rem] rounded-full pt-2 p-1 mr-1 ">
                <div
                  style={{
                    backgroundImage: `url(${"/Assets/buttons6.png"})`,
                    backgroundPosition: "0px -445px",
                  }}
                  className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
                />
              </div>
              <span>Settings</span>
            </a>
          </Link>

          <button
            className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-red-200"
            onClick={handleLogout}
          >
            <div className=" bg-[#d8dadf] px-[.6rem] rounded-full pt-2 p-1 mr-1 ">
              <div
                style={{
                  backgroundImage: `url(${"/Assets/buttons5.png"})`,
                  backgroundPosition: "0px -71px",
                }}
                className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
              />
            </div>
            <span>Logout</span>
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

export default UserOptions;
