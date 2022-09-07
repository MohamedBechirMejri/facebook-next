import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Info = ({
  conversation,
  setConversation,
}: {
  conversation: any;
  setConversation: any;
}) => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  return (
    conversation && (
      <div className="w-[360px] h-full shrink-0 flex p-2 items-center flex-col">
        <div className="w-24 shrink-0">
          <Image
            src={"https://picsum.photos/900"}
            width={1000}
            height={1000}
            alt="user"
            style={{
              borderRadius: "100%",
            }}
          />
        </div>
        <p className="font-bold">Name</p>
        <div className="flex flex-col items-center p-4">
          <Link href={"/"}>
            <a className="p-[.2rem] px-2 pt-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all">
              <div
                style={{
                  backgroundImage: `url(${"/Assets/buttons7.png"})`,
                  backgroundPosition: "0px -149px",
                }}
                className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
              />
            </a>
          </Link>
          <p className="text-sm">Profile</p>
        </div>
        <div className="w-full text-left">
          <button
            className="flex items-center justify-between w-full p-4 font-bold transition-all hover:bg-gray-200 rounded-xl active:bg-gray-300"
            onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
          >
            <span> Customize chat </span>
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons8.png"})`,
                backgroundPosition: "-168px -111px",
                transform: isCustomizeOpen ? "" : "rotate(180deg)",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
            />
          </button>
          <div className="overflow-hidden">
            <button
              className="flex items-center justify-start w-full gap-4 p-4 py-2 transition-all hover:bg-gray-200 rounded-xl active:bg-gray-300"
              style={{
                transform: isCustomizeOpen ? "" : "translate(0,-200%)",
                opacity: isCustomizeOpen ? "" : 0,
              }}
            >
              <div
                style={{
                  backgroundColor: conversation.theme,
                }}
                className="w-[20px] h-[20px] rounded-full"
              />
              <span> Change theme</span>
            </button>
            <button
              className="flex items-center justify-start w-full gap-6 p-4 py-2 transition-all delay-75 hover:bg-gray-200 rounded-xl active:bg-gray-300"
              style={{
                transform: isCustomizeOpen ? "" : "translate(0,-300%)",
                opacity: isCustomizeOpen ? "" : 0,
              }}
            >
              <div className="w-[20px] h-[20px] text-xl leading-none -m-1">
                {conversation.emoji}
              </div>
              <span>Change Emoji</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Info;
