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
import { L49, L92 } from "react-isloading";
import SendSvg from "./SVGs/Send";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import uniqid from "uniqid";
import type ConversationType from "../../types/ConversationType";

const Main = ({
  user,
  showInfo,
  setShowInfo,
}: {
  user: any;
  showInfo: boolean;
  setShowInfo: any;
}) => {
  const Ref = useRef(null);
  const [conversation, setConversation] = useState(
    null as ConversationType | null
  );

  const router = useRouter();

  const [messageText, setMessageText] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const sendMessage = () => {
    if (!messageText && !imageLink) return;

    axios
      .post("/api/conversations/" + router.query.id, {
        text: messageText,
        image: imageLink,
      })
      .then(res => {
        setMessageText("");
        setImageLink("");
        setConversation(res.data.conversation);
      });
  };
  const sendEmoji = () => {
    axios
      .post("/api/conversations/" + router.query.id, {
        emoji: { text: conversation?.emoji, size: "5rem" },
      })
      .then(res => {
        setConversation(res.data.conversation);
      });
  };

  useEffect(() => {
    axios.get("/api/conversations/" + router.query.id).then(res => {
      setConversation(res.data.conversation);
    });

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: "facebook-clone-6c38e.firebaseapp.com",
      projectId: "facebook-clone-6c38e",
      storageBucket: "facebook-clone-6c38e.appspot.com",
      messagingSenderId: "337509918932",
      appId: "1:337509918932:web:4f1b7c8fb17951b73f7341",
    };

    initializeApp(firebaseConfig);
  }, [router.query.id]);

  useEffect(() => {
    if (!conversation) return;
    const msgs = Ref.current;
    // @ts-ignore
    msgs.scrollTop = msgs.scrollHeight;
  }, [conversation]);

  const handleChange = (e: any) => {
    setImageLink("");
    setIsUploading(true);

    const storage = getStorage();
    const storageRef = ref(storage, uniqid());

    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // setLoading(+progress.toFixed(0));
      },
      error => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImageLink(downloadURL);
          setIsUploading(false);
        });
      }
    );
  };

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
      <div ref={Ref} className="h-full overflow-y-scroll noscroll">
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
                      lineHeight: 1.05,
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

      <div className="relative flex items-center w-full gap-2 p-2">
        <div className="flex items-center gap-1">
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <MoreSvg />
          </button>
          <button className="relative p-1 transition-all rounded-full cursor-pointer hover:bg-gray-200 active:bg-gray-300">
            <MediaSvg />
            <input
              type="file"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </button>
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <StickerSvg />
          </button>
          <button className="p-1 transition-all rounded-full hover:bg-gray-200 active:bg-gray-300">
            <GifSvg />
          </button>
        </div>
        <div className="flex w-full h-10 px-4 overflow-hidden transition-all bg-gray-200 rounded-full">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Aa"
            onChange={e => setMessageText(e.target.value)}
            value={messageText}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          {(imageLink || isUploading) && (
            <div
              className="relative flex items-center h-full px-4 transition-all cursor-pointer hover:grayscale active:scale-95"
              onClick={() => setImageLink("")}
            >
              {!imageLink ? (
                <L92
                  style={{
                    height: "2rem",
                    width: "2rem",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -60%)",
                  }}
                />
              ) : (
                <Image
                  src={imageLink}
                  height={40}
                  width={43}
                  alt=""
                  style={{
                    borderRadius: ".5rem",
                  }}
                />
              )}
            </div>
          )}
          <button className="transition-all rounded-full active:scale-95">
            <EmojiSvg />
          </button>
        </div>
        {messageText || imageLink ? (
          <button
            className="text-4xl transition-all active:scale-90"
            onClick={sendMessage}
          >
            <SendSvg fill={conversation.theme} />
          </button>
        ) : (
          <button
            className="text-4xl transition-all active:scale-90"
            onClick={sendEmoji}
          >
            {conversation.emoji}
          </button>
        )}
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
