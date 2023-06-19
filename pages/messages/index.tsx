import Header from "~/components/Header";
import getUser from "~/lib/Auth/getUser";
import type { NextApiResponse, NextApiRequest } from "next";
import Chats from "~/components/Messages/Chats";
import { L49 } from "react-isloading";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FriendsOverlay from "~/components/Messages/FriendsOverlayMobile";
import Image from "next/legacy/image";

const Messages = ({ user }: { user: any }) => {
  const router = useRouter();
  const conversations = user.conversations.map((c: any) => JSON.parse(c));

  useEffect(() => {
    if (conversations[0]) router.push("/messages/" + conversations[0]._id);
  }, [conversations, router]);

  return (
    <Header user={user}>
      <div className="relative flex w-screen text-black h-[93.45vh] bg-white ">
        {/* <Chats
          user={user}
          conversations={conversations}
          className="w-full h-full px-4 py-2 shrink-0 xl:block"
        /> */}
        <div className="flex flex-col w-full p-4 overflow-scroll overflow-y-scroll bg-white rounded-lg xl:w-[400px] ">
          <h1 className="w-full text-xl font-semibold text-center">
            Start a New Chat
          </h1>
          {user.friends.map((friend: any) => (
            <div
              key={friend._id}
              className="flex items-center justify-between py-4 text-lg "
            >
              <Image
                src={friend.picture}
                height={50}
                width={50}
                alt=""
                style={{
                  borderRadius: "9999999px",
                }}
              />
              <h1>
                {friend.firstName} {friend.lastName}
              </h1>
              <a
                href={"/api/users/" + friend._id + "/message"}
                className="p-1 px-2 text-base text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95"
              >
                Message
              </a>
            </div>
          ))}
        </div>

        <div className="hidden w-full h-full xl:flex">
          <main className="flex flex-col items-center justify-center w-full h-full font-semibold">
            {false ? (
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
            ) : (
              "No Messages Found."
            )}
          </main>
        </div>
      </div>
    </Header>
  );
};

export default Messages;

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const user = await getUser(req, res);

  return {
    props: {
      user: user.user,
    },
  };
};
