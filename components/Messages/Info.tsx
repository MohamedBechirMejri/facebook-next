import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { useRouter } from "next/router";
import EmojiPicker, {
  EmojiClickData,
  EmojiStyle,
  Theme,
} from "emoji-picker-react";
import FriendsOverlayMobile from "./FriendsOverlayMobile";

const Info = ({
  conversation,
  conversations,
  setConversation,
  user,
  setShowInfo,
}: {
  conversation: any;
  conversations: any;
  setConversation: any;
  user: any;
  setShowInfo: any;
}) => {
  const router = useRouter();

  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [theme, setTheme] = useState(conversation?.theme);
  const [emoji, setEmoji] = useState(conversation?.emoji);
  const [isSettingTheme, setIsSettingTheme] = useState(false);
  const [isSettingEmoji, setIsSettingEmoji] = useState(false);

  useEffect(() => {
    setTheme(conversation?.theme);
  }, [conversation?.theme]);

  const sendCustomization = () => {
    if (!theme && !emoji) return;

    axios
      .post("/api/conversations/" + router.query.id + "/customize", {
        theme,
        emoji,
      })
      .then(res => {
        setConversation(res.data.conversation);
        setTheme(conversation?.theme);
        setEmoji(conversation?.emoji);
      });
  };

  const onEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setEmoji(emojiData.emoji);
  };

  return (
    conversation && (
      <div className="fixed flex flex-col w-[90%] bg-white xl:w-[360px] z-50 h-max xl:h-full xl:static border-8 rounded-lg xl:border-none xl:rounded-none top-1/2 left-1/2 -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2 xl:-translate-y-0 [box-shadow:0_0_0_100vh_#00000033] px-2 xl:shadow-none">
        <div className="flex w-full h-[35%] shrink-0 px-4 py-2 xl:hidden flex-col">
          <h1 className="flex items-center justify-between pb-4 text-2xl font-semibold">
            <span>Chats</span>
            <div className="flex items-center gap-4 pt-2">
              <FriendsOverlayMobile user={user} />
              <button
                className="relative p-4 text-white transition-all bg-red-300 rounded-full hover:bg-red-400 active:scale-95"
                onClick={() => setShowInfo(false)}
              >
                <p className="absolute font-mono -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 [-webkit-text-stroke:thin_black]">
                  x
                </p>
              </button>
            </div>
          </h1>
          <div className="rounded-full bg-[#f0f2f5] flex items-center justify-left p-2 transition-all">
            <div className="relative w-8 h-4">
              <Image src="/Assets/search.svg" layout="fill" alt="" />
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:text-[#656797] outline-none text-black transition-all w-full"
              placeholder="Search Messenger"
            />
          </div>
          <div className="h-40 pt-2 overflow-y-scroll">
            <div className="h-max">
              {conversations?.map((c: any) => {
                const { firstName, lastName, picture } =
                  c.users[0]._id === user._id ? c.users[1] : c.users[0];
                return (
                  <Link
                    href={"/messages/" + c._id}
                    key={c._id}
                    className="flex items-center justify-start gap-4 p-2 transition-all rounded-lg hover:bg-gray-200"
                  >
                    <div className="relative overflow-hidden rounded-full w-14 h-14 shrink-0">
                      <Image src={picture} layout="fill" alt="" />
                    </div>
                    <h2 className="font-medium">
                      {firstName + " " + lastName}
                    </h2>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <hr />

        <div className="w-full h-[65%] shrink-0 flex p-2 items-center flex-col">
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
              className="p-[.2rem] px-2 pt-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
            >
              <div
                style={{
                  backgroundImage: `url(${"/Assets/buttons7.png"})`,
                  backgroundPosition: "0px -149px",
                }}
                className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto"
              />
            </Link>
            <p className="text-sm">Profile</p>
          </div>
          {isSettingTheme && (
            <div className="fixed flex flex-col items-center justify-center gap-4 py-4 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg shadow w-72 h-72 top-1/2 left-1/2">
              <h1 className="text-xl font-bold">Theme</h1>
              <HexColorPicker color={theme} onChange={setTheme} />
              <div className="flex gap-4">
                <button
                  className="p-1 px-2 font-semibold transition-all border rounded active:scale-95"
                  style={{
                    color: theme,
                    borderColor: theme,
                  }}
                  onClick={() => {
                    setIsSettingTheme(false);
                    setTheme(conversation?.theme);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="p-1 px-4 font-semibold text-white transition-all border rounded active:scale-95"
                  style={{
                    backgroundColor: theme,
                    borderColor: theme,
                  }}
                  onClick={() => {
                    setIsSettingTheme(false);
                    sendCustomization();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {isSettingEmoji && (
            <div className="fixed flex flex-col items-center justify-center gap-4 pb-4 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg shadow xl:w-max h-max top-1/2 left-1/2">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                autoFocusSearch={false}
                theme={Theme.LIGHT}
                // lazyLoadEmojis={true}
                // showPreview={false}
                // skinTonesDisabled
                // searchPlaceHolder="Filter"
                // defaultSkinTone={SkinTones.MEDIUM}
                emojiStyle={EmojiStyle.FACEBOOK}
              />
              <div className="z-10 flex gap-4">
                <button
                  className="p-1 px-2 font-semibold transition-all border rounded active:scale-95"
                  style={{
                    color: theme,
                    borderColor: theme,
                  }}
                  onClick={() => {
                    setIsSettingEmoji(false);
                    setEmoji(conversation?.emoji);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="p-1 px-4 font-semibold text-white transition-all border rounded active:scale-95"
                  style={{
                    backgroundColor: theme,
                    borderColor: theme,
                  }}
                  onClick={() => {
                    setIsSettingEmoji(false);
                    sendCustomization();
                  }}
                >
                  Save
                </button>
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
                onClick={() => setIsSettingEmoji(!isSettingEmoji)}
              >
                <div className="w-[20px] h-[20px] text-xl leading-none -m-1">
                  {conversation.emoji}
                </div>
                <span>Change Emoji</span>
              </button>
            </div>
          </div>

          <Link href={"/api/conversations/" + conversation._id + "/delete"}
              className="block w-full p-4 font-bold text-center text-red-500 transition-all bg-white cursor-pointer hover:bg-red-200 rounded-xl active:bg-red-300"
              style={{
                transform: isCustomizeOpen ? "" : " translateY(-130%)",
              }}
            >
              <span> Delete chat </span>
          </Link>
        </div>
      </div>
    )
  );
};

export default Info;
