import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const LeftNav = ({ user }: { user: any }) => {
  const [navLinks, setNavLinks] = useState(
    [] as { href: string; label: string; icon: string }[]
  );

  useEffect(() => {
    setNavLinks([
      {
        href: "/users/" + user._id,
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
        href: "/messages",
        label: "Messenger",
        icon: "/Assets/messenger-colored.png",
      },
    ]);
  }, [user._id, user.firstName, user.lastName, user.picture]);

  return (
    <nav className="h-full w-[320px] overflow-y-scroll m-0 fixed left-4 top-16 pb-24 noscroll hidden lg:block">
      {navLinks.map(navlink =>
        /users|friends|saved|messages/gm.test(navlink.href) ? ( // <-- regex
          <Link href={navlink.href} key={navlink.label}>
            <a
              className={
                "text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg transition-all after:block after:w-2 after:h-2 after:bg-green-400 relative after:absolute after:right-4 after:rounded-full"
              }
            >
              <span className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image src={navlink.icon} alt="" layout="fill" />
              </span>
              <span>{navlink.label}</span>
            </a>
          </Link>
        ) : (
          <p
            key={navlink.label}
            className={
              "text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg transition-all "
            }
          >
            <span className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image src={navlink.icon} alt="" layout="fill" />
            </span>
            <span>{navlink.label}</span>
          </p>
        )
      )}
    </nav>
  );
};

export default LeftNav;
