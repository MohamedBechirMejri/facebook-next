import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const Info = ({
  conversation,
  setConversation,
  user,
}: {
  conversation: any;
  setConversation: any;
  user: any;
}) => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [theme, setTheme] = useState(conversation?.theme);
  const [isSettingTheme, setIsSettingTheme] = useState(false);

  useEffect(() => {
    setTheme(conversation?.theme);
  }, [conversation?.theme]);

  return (
    conversation && (
      <div className="w-[360px] h-full shrink-0 flex p-2 items-center flex-col">
        <div className="w-24 shrink-0">
          <Image
            src={
              // @ts-ignore
              conversation.users[0]._id !== user._id
                ? // @ts-ignore
                  conversation.users[0].picture
                : // @ts-ignore
                  conversation.users[1].picture
            }
            width={1000}
            height={1000}
            alt="user"
            style={{
              borderRadius: "100%",
            }}
          />
        </div>
        <p className="font-bold">
          {
            // @ts-ignore
            conversation.users[0]._id !== user._id
              ? // @ts-ignore
                conversation.users[0].firstName +
                " " +
                conversation.users[0].lastName
              : // @ts-ignore
                conversation.users[1].firstName +
                " " +
                conversation.users[1].lastName
          }
        </p>
        <div className="flex flex-col items-center p-4">
          <Link
            href={`
              /users/${
                conversation.users[0]._id !== user._id
                  ? conversation.users[0]._id
                  : conversation.users[1]._id
              }`}
          >
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
        {isSettingTheme && (
          <div className="fixed flex flex-col items-center justify-center gap-4 py-4 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg shadow w-72 h-72 top-1/2 left-1/2">
            <h1 className="text-xl font-bold">Theme</h1>
            <HexColorPicker color={theme} onChange={setTheme} />
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setIsSettingTheme(false);
                  setTheme(conversation?.theme);
                }}
              >
                Cancel
              </button>
              <button>Save</button>
            </div>
          </div>
        )}
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
              onClick={() => setIsSettingTheme(!isSettingTheme)}
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
