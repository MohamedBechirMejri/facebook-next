import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="fixed w-screen bg-white h-14 p-2">
        <Link href="/">
          <a>
            <div className="h-full w-8 px-7 relative">
              <Image src="/Assets/logo.svg" alt="" layout="fill" />
            </div>
          </a>
        </Link>
      </header>
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Header;
