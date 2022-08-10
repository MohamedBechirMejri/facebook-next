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
    href: "/user/id",
  },
  {
    name: "test2",
    image: "https://picsum.photos/600",
    birthday: "2020-01-12",
    latestConnection: "2022-08-10-04-36-55",
    href: "/user/id",
  },
];

const Home: NextPage = () => {
  const birthdays = friends.filter(friend => friend.birthday === "2020-08-10");
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
        <main className="mx-auto w-[500px]">
          <div className="bg-white p-4 rounded-lg flex flex-col items-stretch justify-center gap-2">
            <div className="flex items-center justify-center gap-2 pb-2">
              <Link href="/user/id">
                <a className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src="https://picsum.photos/700"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
              <p className="bg-gray-100 text-gray-500 px-4 p-2 rounded-full w-full hover:bg-gray-200 cursor-pointer transition-all">
                What&#39;s on your mind, Username ?
              </p>
            </div>
            <hr className="w-full" />
            <div className="p-2 flex items-center justify-evenly font-medium">
              <button className="hover:bg-gray-200 transition-all p-2 px-6 rounded-lg">
                Live video
              </button>
              <button className="hover:bg-gray-200 transition-all p-2 px-6 rounded-lg">
                Photo/video
              </button>
              <button className="hover:bg-gray-200 transition-all p-2 px-6 rounded-lg">
                Feeling/Activity
              </button>
            </div>
          </div>
        </main>
        <div className="h-full w-[280px] overflow-y-scroll m-0 fixed right-4 top-16 pb-24">
          {/* <div>
            <h3>Birthdays</h3>
          </div>  */}{" "}
          <h3 className="font-bold text-lg p-1">Contacts</h3>
          <div>
            {friends.map((friend, i) => {
              return (
                <Link href={"/messages/" + friend.href} key={i}>
                  <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-1 px-2 rounded-lg transition-all">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image src={friend.image} alt="" layout="fill" />
                    </div>
                    <h2>{friend.name}</h2>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Home;
