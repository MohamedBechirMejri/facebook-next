import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CallSvg from "./SVGs/Call";
import VideoSvg from "./SVGs/Video";
import InfoSvg from "./SVGs/Info";
import MoreSvg from "./SVGs/More";
import MediaSvg from "./SVGs/Media";
import StickerSvg from "./SVGs/Sticker";
import GifSvg from "./SVGs/Gif";
import EmojiSvg from "./SVGs/Emoji";

const Main = ({
  user,
  showInfo,
  setShowInfo,
}: {
  user: any;
  showInfo: boolean;
  setShowInfo: any;
}) => {
  const ref = useRef(null);
  const [messages, setMessages] = useState([
    {
      emoji: null,
      text: "send me that pic",
      image: null,
      user: {
        firstName: "other",
        lastName: "test",
        picture: "https://picsum.photos/800",
        _id: "2",
      },
      createdAt: "2022-08-25T04:43:50.264Z",
      _id: "1",
    },
    {
      emoji: null,
      text: "test",
      image: "https://picsum.photos/1000",
      user: {
        firstName: "me",
        lastName: "test",
        picture: "https://picsum.photos/900",
        _id: user._id,
      },
      createdAt: "2022-08-25T04:43:50.264Z",
      _id: "2",
    },
    {
      emoji: null,
      text: "lol",
      image: null,
      user: {
        firstName: "other",
        lastName: "test",
        picture: "https://picsum.photos/800",
        _id: "2",
      },
      createdAt: "2022-08-25T04:43:50.264Z",
      _id: "3",
    },
    {
      emoji: {
        text: "👍🏻",
        size: "50px",
      },
      text: null,
      image: null,
      user: {
        firstName: "other",
        lastName: "test",
        picture: "https://picsum.photos/800",
        _id: "2",
      },
      createdAt: "2022-08-25T04:43:50.264Z",
      _id: "3",
    },
  ]);

  useEffect(() => {
    const msgs = ref.current;
    // @ts-ignore
    msgs.scrollTop = msgs.scrollHeight;
  }, []);

  return (
    <main className="flex flex-col justify-between w-full h-full ">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <div className="bg-[#d8dadf] rounded-full w-10 h-10 relative overflow-hidden transition-all active:scale-95 z-20 ">
            <Image src={"https://picsum.photos/700"} alt="" layout="fill" />
          </div>
          <p className="text-xl font-bold">Test</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <CallSvg />
          </button>
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <VideoSvg />
          </button>

          <button
            className="p-2 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setShowInfo(!showInfo)}
          >
            <InfoSvg />
          </button>
        </div>
      </div>
      <div ref={ref} className="h-full overflow-y-scroll">
        <div className="flex flex-col justify-end gap-4 ">
          {messages.map(msg => (
            <div key={msg._id} className="w-full">
              <p className="w-full p-4 text-xs text-center text-gray-400">
                {msg.createdAt}
              </p>
              <div
                className={`flex items-end gap-2 p-4 ${
                  msg.user._id === user._id && "flex-row-reverse"
                }`}
              >
                <div className="w-10 h-10 shrink-0">
                  <Image
                    src={msg.user.picture}
                    width={1000}
                    height={1000}
                    alt="user"
                    style={{
                      borderRadius: "100%",
                    }}
                  />
                </div>
                {msg.emoji ? (
                  <p
                    style={{
                      fontSize: msg.emoji.size,
                      lineHeight: 1,
                    }}
                  >
                    {msg.emoji.text}
                  </p>
                ) : (
                  <div className="">
                    {msg.text && (
                      <p
                        className={`p-2 px-4 bg-gray-200 ${
                          msg.image && "rounded-b-none"
                        }  rounded-3xl`}
                      >
                        {msg.text}
                      </p>
                    )}
                    {msg.image && (
                      <div
                        className={`overflow-hidden rounded-lg rounded-t-none w-72 shrink-0 ${
                          msg.text && "rounded-b-none"
                        }`}
                      >
                        <Image
                          src={msg.image}
                          width={1000}
                          height={1000}
                          alt="user"
                          style={{
                            borderBottomRightRadius: ".5rem",
                            borderBottomLeftRadius: ".5rem",
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full gap-2 p-2 ">
        <div className="flex items-center gap-1">
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <MoreSvg />
          </button>{" "}
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <MediaSvg />
          </button>{" "}
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <StickerSvg />
          </button>{" "}
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <GifSvg />
          </button>
        </div>
        <div className="flex w-full h-10 px-4 overflow-hidden transition-all bg-gray-200 rounded-full">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Aa"
          />
          <button className="transition-all rounded-full active:scale-95">
            <EmojiSvg />
          </button>
        </div>
        <button className="text-xl">👍🏻</button>
      </div>
    </main>
  );
};

export default Main;
