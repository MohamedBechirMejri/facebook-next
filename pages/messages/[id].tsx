import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import type { NextApiResponse, NextApiRequest } from "next";
import { useState } from "react";
import Info from "../../components/Messages/Info";
import Chats from "../../components/Messages/Chats";
import Main from "../../components/Messages/Main";

const Messages = ({ user }: { user: any }) => {
  const [conversations, setConversations] = useState(
    user.conversations.map((c: any) => JSON.parse(c))
  );

  const [showInfo, setShowInfo] = useState(true);

  return (
    <Header user={user}>
      <div className="relative flex w-screen text-black h-[92vh] bg-white ring-white ring-[8rem]">
        <Chats conversations={conversations} user={user} />
        <div className="flex w-full h-full ">
          <Main user={user} showInfo={showInfo} setShowInfo={setShowInfo} />
          {showInfo && <Info />}
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
