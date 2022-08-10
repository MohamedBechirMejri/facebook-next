import type { NextPage } from "next";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

const navlinks = [
  {
    href: "/user/id",
    label: "Username",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/friends",
    label: "Find Friends",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/groups",
    label: "Groups",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/marketplace",
    label: "Marketplace",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/watch",
    label: "Watch",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/onthisday",
    label: "Memories",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/saved",
    label: "Saved",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/pages",
    label: "Pages",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/events",
    label: "Events",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/",
    label: "Most Recent",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/favorites",
    label: "Favorites",
    icon: "https://picsum.photos/600",
  },
  {
    href: "/messenger",
    label: "Messenger",
    icon: "https://picsum.photos/600",
  },
];

const friends = [
  {
    name: "test",
    image: "https://picsum.photos/600",
    birthday: "2020-01-01",
    latestConnection: "2020-01-01-00-00-00",
  },
  {
    name: "test2",
    image: "https://picsum.photos/600",
    birthday: "2020-01-12",
    latestConnection: "2022-08-10-04-36-55",
  }
];

const Home: NextPage = () => {
  return (
    <Header>
      <div className="min-h-screen w-screen p-2 py-4 flex text-black relative">
        <nav className="h-full w-[320px] overflow-y-scroll m-0 fixed left-4 top-16 pb-24">
          {navlinks.map((navlink, index) => (
            <Link href={navlink.href} key={index}>
              <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg transition-all">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image src={navlink.icon} alt="" layout="fill" />
                </div>
                <h2>{navlink.label}</h2>
              </a>
            </Link>
          ))}
        </nav>
        <main></main>
        <div className="h-full w-[320px] overflow-y-scroll m-0 fixed right-4 top-16 pb-24">
          <div>
            <h3>Birthdays</h3>
          </div>
          <div>
            <h3>Contacts</h3>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Home;
