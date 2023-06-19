import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import UserOptions from "./Header/UserOptions";
import Menu from "./Header/Menu";

const Header = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) => {
  return (
    <>
      <header className="fixed z-[500] flex items-center justify-between w-screen p-2 bg-white shadow-sm h-14">
        <div className="absolute top-0 left-0 z-10 flex h-full p-2">
          <Link href="/">
            <div className="relative w-8 h-full px-7">
              <Image src="/Assets/logo.svg" alt="" layout="fill" />
            </div>
          </Link>
          <div className="rounded-full bg-[#f0f2f5] items-center justify-center p-1 px-2 transition-all hidden sm:flex">
            <div className="relative w-8 h-1/2">
              <Image src="/Assets/search.svg" layout="fill" alt="" />
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:text-[#656797] outline-none text-black transition-all"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div className="h-full lg:grid grid-cols-5 grid-rows-1 w-[590px] mx-auto hidden">
          <Link
            href="/"
            className="hover:bg-[#f2f2f2] active:bg-[#e0e0e0] rounded-lg h-full w-full py-2 flex transition-all justify-center"
          >
            <Image src="/Assets/home.svg" height={50} width={50} alt="" />
          </Link>
          <Link
            href="/friends"
            className="hover:bg-[#f2f2f2] active:bg-[#e0e0e0] rounded-lg h-full w-full py-2 flex transition-all justify-center"
          >
            <Image src="/Assets/friends.svg" height={50} width={50} alt="" />
          </Link>

          <p className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex transition-all justify-center">
            <Image src="/Assets/watch.svg" height={50} width={50} alt="" />
          </p>
          <p className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex  transition-all  justify-center">
            <Image
              src="/Assets/marketplace.svg"
              height={50}
              width={50}
              alt=""
            />
          </p>
          <p className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex transition-all   justify-center">
            <Image src="/Assets/groups.svg" height={50} width={50} alt="" />
          </p>
        </div>
        <div className="absolute top-0 right-0 flex items-center justify-center h-full gap-2 p-2 px-4">
          <Menu user={user} />
          <Link
            href="/messages"
            className="bg-[#d8dadf] hover:bg-[#c4c5c9] rounded-full w-10 h-10 flex items-center justify-center transition-all active:scale-95"
          >
            <Image src="/Assets/messenger.svg" height={20} width={20} alt="" />
          </Link>
          <button className="bg-[#d8dadf] rounded-full w-10 h-10 sm:flex items-center justify-center hidden">
            <Image
              src="/Assets/notifications.svg"
              height={20}
              width={20}
              alt=""
            />
          </button>

          <UserOptions user={user} />
        </div>
      </header>
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Header;
