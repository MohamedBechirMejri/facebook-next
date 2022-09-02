import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CallSvg from "./SVGs/Call";
import VideoSvg from "./SVGs/Video";
import InfoSvg from "./SVGs/Info";

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
            <svg viewBox="0 0 24 24" height="20px" width="20px">
              <g fillRule="evenodd">
                <polygon
                  fill="none"
                  points="-6,30 30,30 30,-6 -6,-6 "
                ></polygon>
                <path
                  d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"
                  fill="#005cf8"
                ></path>
              </g>
            </svg>
          </button>{" "}
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <svg viewBox="0 -1 17 17" height="20px" width="20px">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z"
                  fill="#005cf8"
                ></path>
                <circle fill="#005cf8" cx="8.5" cy="4.5" r="1.5"></circle>
                <path
                  d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z"
                  fill="#005cf8"
                ></path>
                <path
                  d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z"
                  stroke="#005cf8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>{" "}
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <svg x="0px" y="0px" viewBox="0 0 17 16" height="20px" width="20px">
              <g fillRule="evenodd">
                <circle fill="none" cx="5.5" cy="5.5" r="1"></circle>
                <circle fill="none" cx="11.5" cy="4.5" r="1"></circle>
                <path
                  d="M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z"
                  fill="none"
                ></path>
                <path
                  d="M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z"
                  fill="#005cf8"
                ></path>
                <path
                  d="M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4 2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6 1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57 6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1 1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
                  fill="#005cf8"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </button>{" "}
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <svg x="0px" y="0px" viewBox="0 0 16 16" height="20px" width="20px">
              <path
                d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z"
                fill="#005cf8"
                fillRule="nonzero"
              ></path>
            </svg>
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
