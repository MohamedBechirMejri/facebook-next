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

const posts = [
  {
    text: "odjnflgdkjnfglkdjnv",
    image: "https://picsum.photos/600",
    href: "/posts/id",
    time: "2020-01-01-00-00-00",
    group: null,
    page: null,
    author: {
      name: "test",
      image: "https://picsum.photos/600",
      href: "/users/id",
    },
    audience: "public",
    likes: ["id1", "id2", "id3"],
    loves: ["id4", "id5", "id6"],
    wows: ["id7", "id8", "id9"],
    hahas: ["id10", "id11", "id12"],
    sads: ["id13", "id14", "id15"],
    angrys: ["id16", "id17", "id18"],
    comments: [
      {
        text: "odjnflgdkjnfglkdjnv",
        time: "2020-01-01-00-00-00",
        image: "https://picsum.photos/600",
        author: {
          name: "test",
          image: "https://picsum.photos/600",
          href: "/users/id",
        },
        likes: ["id1", "id2", "id3"],
        loves: ["id4", "id5", "id6"],
        wows: ["id7", "id8", "id9"],
        hahas: ["id10", "id11", "id12"],
        sads: ["id13", "id14", "id15"],
        angrys: ["id16", "id17", "id18"],
        replies: [
          {
            text: "kuygikuyhkiuhyb",
            time: "2020-01-01-00-00-00",
            author: {
              name: "test",
              image: "https://picsum.photos/600",
              href: "/users/id",
            },
            likes: ["id1", "id2", "id3"],
            loves: ["id4", "id5", "id6"],
            wows: ["id7", "id8", "id9"],
            hahas: ["id10", "id11", "id12"],
            sads: ["id13", "id14", "id15"],
            angrys: ["id16", "id17", "id18"],
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
        <nav className="h-full w-[320px] overflow-y-scroll m-0 fixed left-4 top-16 pb-24">
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
        <main className="mx-auto w-[500px] flex flex-col justify-start items-stretch gap-4 pb-64 z-40 bg-[#f0f2f5]">
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
          <div>
            <div className="flex flex-col items-stretch justify-center gap-2 py-4 bg-white rounded-lg">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
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
                  <div>
                    <h1 className="font-bold">Author Name</h1>
                    <p className="flex items-center gap-1 text-xs">
                      <span>8h</span> ·{" "}
                      <span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                        >
                          <g transform="translate(-448 -544)">
                            <g>
                              <path
                                d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                                transform="translate(354 143.5)"
                              ></path>
                              <path
                                d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                                transform="translate(354 143.5)"
                              ></path>
                              <path
                                d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                transform="translate(354 143.5)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-xl font-medium">•••</div>
              </div>
              <p className="p-6 py-4 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                quibusdam excepturi ratione. Recusandae ex amet temporibus
                corrupti reprehenderit magnam eaque tenetur consequuntur nam?
                Alias beatae, ullam iure vitae minima assumenda?
              </p>
              <Link href="/posts/id">
                <a className="text-black flex items-center justify-start gap-3 hover2:bg-[#e4e6e9] rounded-lg transition-all">
                  <div className="w-[500px] ">
                    <Image
                      src="https://picsum.photos/700"
                      alt=""
                      height={700}
                      width={700}
                    />
                  </div>
                </a>
              </Link>
              <div className="px-4">
                <div className="flex items-center justify-between pb-2 text-gray-500">
                  <div className="flex gap-1">
                    <div>
                      <Image
                        src="/Assets/like.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                      <Image
                        src="/Assets/love.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                      <Image
                        src="/Assets/wow.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                    <p>1.3M</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>71K Comments</p>
                    <p>472K Shares</p>
                  </div>
                </div>
                <hr />{" "}
                <div className="flex items-center p-2 font-medium justify-evenly">
                  <button className="p-2 px-12 transition-all rounded-lg hover:bg-gray-100">
                    Like
                  </button>
                  <button className="p-2 px-12 transition-all rounded-lg hover:bg-gray-100">
                    Comment
                  </button>
                  <button className="p-2 px-12 transition-all rounded-lg hover:bg-gray-100">
                    Share
                  </button>
                </div>
              </div>
            </div>
            {posts.map((p, i) => (
              <div key={i}></div>
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
                <Link href={"/messages/" + friend.href} key={i}>
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
