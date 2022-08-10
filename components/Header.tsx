import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="fixed w-screen bg-white h-14 p-2 flex items-center justify-between">
        <div className="h-full flex">
          <Link href="/">
            <a>
              <div className="h-full w-8 px-7 relative">
                <Image src="/Assets/logo.svg" alt="" layout="fill" />
              </div>
            </a>
          </Link>
          <div className="rounded-full bg-[#f0f2f5] flex items-center justify-center p-1 px-2 transition-all">
            <div className="h-1/2 w-8 relative">
              <Image src="/Assets/search.svg" layout="fill" alt="" />
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:text-[#656797] outline-none text-black transition-all"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div className="h-full grid grid-cols-5 grid-rows-1">
          <Link href="/">
            <a className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex transition-all ">
              <Image src="/Assets/home.svg" height={50} width={50} alt="" />
            </a>
          </Link>
          <Link href="/friends">
            <a className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex transition-all ">
              <Image src="/Assets/friends.svg" height={50} width={50} alt="" />
            </a>
          </Link>
          <Link href="/watch">
            <a className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex transition-all ">
              <Image src="/Assets/watch.svg" height={50} width={50} alt="" />
            </a>
          </Link>
          <Link href="/marketplace">
            <a className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex  transition-all  ">
              <Image
                src="/Assets/marketplace.svg"
                height={50}
                width={50}
                alt=""
              />
            </a>
          </Link>
          <Link href="/groups">
            <a className="hover:bg-[#f2f2f2] rounded-lg h-full w-full py-2 flex transition-all   ">
              <Image src="/Assets/groups.svg" height={50} width={50} alt="" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 px-4">
          <button className="bg-[#d8dadf] rounded-full w-10 h-10"></button>
          <button className="bg-[#d8dadf] rounded-full w-10 h-10"></button>
          <button className="bg-[#d8dadf] rounded-full w-10 h-10"></button>
          <button className="bg-[#d8dadf] rounded-full w-10 h-10 relative overflow-hidden">
            <Image src="https://picsum.photos/500" alt="" layout="fill" />
          </button>
        </div>
      </header>
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Header;
