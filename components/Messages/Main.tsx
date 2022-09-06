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
import axios from "axios";
import { useRouter } from "next/router";
import { L49 } from "react-isloading";

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
  const [conversation, setConversation] = useState(
    null as {
      createdAt: string;
      emoji: string;
      messages: {
        _id: string;
        createdAt: string;
        emoji: {
          text: string;
          size: string;
        };
        image: string;
        text: string;
        user: {
          picture: string;
          _id: string;
        };
      }[];
      theme: string;
      updatedAt: string;
      users: [];
      _id: string;
    } | null
  );

  const router = useRouter();

  const sendMessage = () => {
    axios
      .post("/api/conversations/" + router.query.id, {
        text: "test",
      })
      .then(res => {
        console.log(res.data);
        setConversation(res.data.conversation);
      });
  };

  useEffect(() => {
    axios.get("/api/conversations/" + router.query.id).then(res => {
      setConversation(res.data.conversation);
    });
  }, [router.query.id]);

  useEffect(() => {
    if (!conversation) return;
    const msgs = ref.current;
    // @ts-ignore
    msgs.scrollTop = msgs.scrollHeight;
  }, [conversation]);

  return conversation ? (
    <main className="flex flex-col justify-between w-full h-full ">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <div className="bg-[#d8dadf] rounded-full w-10 h-10 relative overflow-hidden transition-all active:scale-95 z-20 ">
            <Image
              src={
                // @ts-ignore
                conversation.users[0]._id !== user._id
                  ? // @ts-ignore
                    conversation.users[0].picture
                  : // @ts-ignore
                    conversation.users[1].picture
              }
              alt=""
              layout="fill"
            />
          </div>
          <p className="text-xl font-bold">
            {
              // @ts-ignore
              conversation.users[0]._id !== user._id
                ? // @ts-ignore
                  conversation.users[0].firstName +
                  " " +
                  // @ts-ignore
                  conversation.users[0].lastName
                : // @ts-ignore
                  conversation.users[1].firstName +
                  " " +
                  // @ts-ignore
                  conversation.users[1].lastName
            }
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300"
            onClick={() => {
              sendMessage();
            }}
          >
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
      <div ref={ref} className="h-full overflow-y-scroll noscroll">
        <div className="flex flex-col justify-end gap-4 ">
          {conversation?.messages.map(msg => (
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
        <button className="text-xl">{conversation.emoji}</button>
      </div>
    </main>
  ) : (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <L49
        style={{
          height: "7rem",
          width: "7rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Main;
