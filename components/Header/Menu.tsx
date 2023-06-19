import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Menu = ({ user }: { user: any }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [navLinks, setNavLinks] = useState(
    [] as { href: string; label: string; icon: string }[]
  );

  useEffect(() => {
    setNavLinks([
      {
        href: "/friends",
        label: "Find Friends",
        icon: "/Assets/friends-colored.png",
      },
      {
        href: "/saved",
        label: "Saved",
        icon: "/Assets/saved-colored.png",
      },
      // {
      //   href: "/messages",
      //   label: "Messenger",
      //   icon: "/Assets/messenger-colored.png",
      // },
    ]);
  }, []);

  return (
    <div>
      <button
        className="relative overflow-hidden transition-all active:scale-95 z-20 bg-[#d8dadf] rounded-full w-10 h-10 flex items-center justify-center"
        onClick={() => setIsVisible(!isVisible)}
      >
        <Image src="/Assets/menu.svg" height={20} width={20} alt="" />
      </button>

      {isVisible && (
        <div className="absolute z-20 flex flex-col p-2 bg-white border rounded-lg shadow w-72 right-4 h-max top-full">
          <h1 className="w-full p-2 text-2xl font-semibold text-center">
            Menu
          </h1>
          {/* <Link href={"/users/" + user._id} className="flex items-center gap-2 p-2 text-left transition-all rounded-lg hover:bg-gray-100 active:bg-green-200">
              <div
                className="bg-[#d8dadf] rounded-full w-10 h-10 relative overflow-hidden transition-all active:scale-95 z-20 "
                onClick={() => setIsVisible(!isVisible)}
              >
                <Image src={user.picture} alt="" layout="fill" />
              </div>
              <span className="font-bold">
                {user.firstName + " " + user.lastName}
              </span>
          </Link> */}

          {navLinks.map(navlink => (
            <Link
              href={navlink.href}
              key={navlink.label}
              className={
                "text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg transition-all "
              }
            >
              <span className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image src={navlink.icon} alt="" layout="fill" />
              </span>
              <span>{navlink.label}</span>
            </Link>
          ))}
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

export default Menu;
