import type { NextPage } from "next";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Post from "../components/Post";

const navlinks = [
  {
    href: "/user/id",
    label: "Username",
    icon: "https://picsum.photos/600",
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

const friends = [
  {
    name: "test",
    image: "https://picsum.photos/500",
    birthday: "2020-01-01",
    latestConnection: "2020-01-01-00-00-00",
    href: "/user/id",
  },
  {
    name: "test2",
    image: "https://picsum.photos/700",
    birthday: "2020-01-12",
    latestConnection: "2022-08-10-04-36-55",
    href: "/user/id",
  },
];

const posts = [
  {
    text: "odjnflgdkjnfglkdjnv",
    image: undefined,
    id: "/posts/id",
    date: "2020-01-01-00-00-00",
    group: undefined,
    page: undefined,
    author: {
      name: "test",
      image: "https://picsum.photos/600",
      id: "/users/id",
    },
    audience: "public",
    reacts: {
      likes: ["id1", "id2", "id3"],
      loves: ["id4", "id5", "id6"],
      wows: ["id7", "id8", "id9"],
      hahas: ["id10", "id11", "id12"],
      sads: ["id13", "id14", "id15"],
      angrys: ["id16", "id17", "id18"],
    },
    shares: ["id1"],
    comments: [
      {
        text: "odjnflgdkjnfglkdjnv",
        time: "2020-01-01-00-00-00",
        image: "https://picsum.photos/600",
        user: {
          name: "test",
          image: "https://picsum.photos/600",
          id: "/users/id",
        },
        reacts: {
          likes: ["id1", "id2", "id3"],
          loves: ["id4", "id5", "id6"],
          wows: ["id7", "id8", "id9"],
          hahas: ["id10", "id11", "id12"],
          sads: ["id13", "id14", "id15"],
          angrys: ["id16", "id17", "id18"],
        },
        replies: [
          {
            text: "kuygikuyhkiuhyb",
            time: "2020-01-01-00-00-00",
            user: {
              name: "test",
              image: "https://picsum.photos/600",
              id: "/users/id",
            },
            reacts: {
              likes: ["id1", "id2", "id3"],
              loves: ["id4", "id5", "id6"],
              wows: ["id7", "id8", "id9"],
              hahas: ["id10", "id11", "id12"],
              sads: ["id13", "id14", "id15"],
              angrys: ["id16", "id17", "id18"],
            },
          },
        ],
      },
    ],
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    image: "https://picsum.photos/500",
    id: "/posts/2",
    date: "2020-01-01-00-00-00",
    group: {
      name: "testgroupo",
      image: "https://picsum.photos/600",
      id: "/groups/id",
    },
    page: undefined,
    author: {
      name: "test",
      image: "https://picsum.photos/600",
      id: "/users/id",
    },
    audience: "public",
    reacts: {
      likes: ["id1", "id2", "id3"],
      loves: ["id4", "id5", "id6"],
      wows: ["id7", "id8", "id9"],
      hahas: ["id10", "id11", "id12"],
      sads: ["id13", "id14", "id15"],
      angrys: ["id16", "id17", "id18"],
    },
    shares: ["id1"],
    comments: [
      {
        text: "odjnflgdkjnfglkdjnv",
        time: "2020-01-01-00-00-00",
        image: "https://picsum.photos/600",
        user: {
          name: "test",
          image: "https://picsum.photos/600",
          id: "/users/id",
        },
        reacts: {
          likes: ["id1", "id2", "id3"],
          loves: ["id4", "id5", "id6"],
          wows: ["id7", "id8", "id9"],
          hahas: ["id10", "id11", "id12"],
          sads: ["id13", "id14", "id15"],
          angrys: ["id16", "id17", "id18"],
        },
        replies: [
          {
            text: "kuygikuyhkiuhyb",
            time: "2020-01-01-00-00-00",
            user: {
              name: "test",
              image: "https://picsum.photos/600",
              id: "/users/id",
            },
            reacts: {
              likes: ["id1", "id2", "id3"],
              loves: ["id4", "id5", "id6"],
              wows: ["id7", "id8", "id9"],
              hahas: ["id10", "id11", "id12"],
              sads: ["id13", "id14", "id15"],
              angrys: ["id16", "id17", "id18"],
            },
          },
        ],
      },
    ],
  },
  {
    text: "odjnflgdkjnfglkdjnv",
    image: "https://picsum.photos/600",
    id: "/posts/id",
    date: "2020-01-01-00-00-00",
    group: undefined,
    page: undefined,
    author: {
      name: "test",
      image: "https://picsum.photos/600",
      id: "/users/id",
    },
    audience: "public",
    reacts: {
      likes: ["id1", "id2", "id3"],
      loves: ["id4", "id5", "id6"],
      wows: ["id7", "id8", "id9"],
      hahas: ["id10", "id11", "id12"],
      sads: ["id13", "id14", "id15"],
      angrys: ["id16", "id17", "id18"],
    },
    shares: ["id1"],
    comments: [
      {
        text: "odjnflgdkjnfglkdjnv",
        time: "2020-01-01-00-00-00",
        image: "https://picsum.photos/600",
        user: {
          name: "test",
          image: "https://picsum.photos/600",
          id: "/users/id",
        },
        reacts: {
          likes: ["id1", "id2", "id3"],
          loves: ["id4", "id5", "id6"],
          wows: ["id7", "id8", "id9"],
          hahas: ["id10", "id11", "id12"],
          sads: ["id13", "id14", "id15"],
          angrys: ["id16", "id17", "id18"],
        },
        replies: [
          {
            text: "kuygikuyhkiuhyb",
            time: "2020-01-01-00-00-00",
            user: {
              name: "test",
              image: "https://picsum.photos/600",
              id: "/users/id",
            },
            reacts: {
              likes: ["id1", "id2", "id3"],
              loves: ["id4", "id5", "id6"],
              wows: ["id7", "id8", "id9"],
              hahas: ["id10", "id11", "id12"],
              sads: ["id13", "id14", "id15"],
              angrys: ["id16", "id17", "id18"],
            },
          },
        ],
      },
    ],
  },
];

const Home: NextPage = () => {
  const birthdays = friends.filter(friend => friend.birthday === "2020-08-10");
  return (
    <Header>
      <div className="relative flex w-screen min-h-screen p-2 py-4 text-black">
        <nav className="h-full w-[320px] overflow-y-scroll m-0 fixed left-4 top-16 pb-24 noscroll">
          {navlinks.map((navlink, index) => (
            <Link href={navlink.href} key={index}>
              <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg transition-all">
                <div className="relative w-10 h-10 overflow-hidden rounded-full">
                  <Image src={navlink.icon} alt="" layout="fill" />
                </div>
                <h2>{navlink.label}</h2>
              </a>
            </Link>
          ))}
        </nav>
        <main className="mx-auto w-[590px] flex flex-col justify-start items-stretch gap-4 pb-64 z-40 bg-[#f0f2f5]">
          <div className="flex flex-col items-stretch justify-center gap-2 p-4 bg-white rounded-lg">
            <div className="flex items-center justify-center gap-2 pb-2">
              <Link href="/user/id">
                <a className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full">
                    <Image
                      src="https://picsum.photos/700"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
              <p className="w-full p-2 px-4 text-gray-500 transition-all bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
                What&#39;s on your mind, Username ?
              </p>
            </div>
            <hr className="w-full" />
            <div className="flex items-center p-2 font-medium justify-evenly">
              <button className="p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                Live video
              </button>
              <button className="p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                Photo/video
              </button>
              <button className="p-2 px-6 transition-all rounded-lg hover:bg-gray-200">
                Feeling/Activity
              </button>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-4">
            {posts.map((p, i) => (
              <Post key={i} post={p} />
            ))}
          </div>
        </main>
        <div className="h-full w-[280px] overflow-y-scroll m-0 fixed right-4 top-16 pb-24">
          {/* <div>
            <h3>Birthdays</h3>
          </div>  */}{" "}
          <h3 className="p-1 text-lg font-bold">Contacts</h3>
          <div>
            {friends.map((friend, i) => {
              return (
                <Link href={"/messages" + friend.href} key={i}>
                  <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-1 px-2 rounded-lg transition-all">
                    <div className="relative w-8 h-8 overflow-hidden rounded-full">
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
