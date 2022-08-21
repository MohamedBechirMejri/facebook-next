import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftNav = ({ user }: { user: any }) => {
  const navlinks = [
    {
      href: "/user/" + user._id,
      label: user.firstName + " " + user.lastName,
      icon: user.picture,
    },
    {
      href: "/friends",
      label: "Find Friends",
      icon: "/Assets/friends-colored.png",
    },
    {
      href: "/groups",
      label: "Groups",
      icon: "/Assets/groups-colored.png",
    },
    {
      href: "/marketplace",
      label: "Marketplace",
      icon: "/Assets/marketplace-colored.png",
    },
    {
      href: "/watch",
      label: "Watch",
      icon: "/Assets/watch-colored.png",
    },
    {
      href: "/onthisday",
      label: "Memories",
      icon: "/Assets/memories-colored.png",
    },
    {
      href: "/saved",
      label: "Saved",
      icon: "/Assets/saved-colored.png",
    },
    {
      href: "/pages",
      label: "Pages",
      icon: "/Assets/pages-colored.png",
    },
    {
      href: "/events",
      label: "Events",
      icon: "/Assets/events-colored.png",
    },
    {
      href: "/",
      label: "Most Recent",
      icon: "/Assets/most-recent-colored.png",
    },
    {
      href: "/favorites",
      label: "Favorites",
      icon: "/Assets/favorites-colored.png",
    },
    {
      href: "/messenger",
      label: "Messenger",
      icon: "/Assets/messenger-colored.png",
    },
  ];
  return (
    <nav className="h-full w-[320px] overflow-y-scroll m-0 fixed left-4 top-16 pb-24 noscroll">
      {navlinks.map((navlink, index) => (
        <Link href={navlink.href} key={index}>
          <a
            className={
              "text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg transition-all "
            }
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image src={navlink.icon} alt="" layout="fill" />
            </div>
            <h2>{navlink.label}</h2>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default LeftNav;
