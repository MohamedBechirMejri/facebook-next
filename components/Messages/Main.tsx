import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CallSvg from "./SVGs/Call";
import VideoSvg from "./SVGs/Video";
import InfoSvg from "./SVGs/Info";
import MoreSvg from "./SVGs/More";
import MediaSvg from "./SVGs/Media";
import StickerSvg from "./SVGs/Sticker";
import GifSvg from "./SVGs/Gif";

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
            <svg height="20px" viewBox="0 0 38 38" width="20px">
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-893.000000, -701.000000)">
                  <g transform="translate(709.000000, 314.000000)">
                    <g>
                      <path
                        d="M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121 209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879 211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415 C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007 193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047 199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859 211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549 M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405 C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425 222,416.477 222,406 C222,395.523 213.477,387 203,387"
                        fill="#005cf8"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <button className="text-xl">👍🏻</button>
      </div>
    </main>
  );
};

export default Main;
