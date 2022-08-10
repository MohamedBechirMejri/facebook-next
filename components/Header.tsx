import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="fixed w-screen bg-white h-14 p-2">
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
      </header>
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Header;
