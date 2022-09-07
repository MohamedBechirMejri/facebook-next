import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import type { NextApiResponse, NextApiRequest } from "next";
import { useEffect, useState } from "react";
import Info from "../../components/Messages/Info";
import Chats from "../../components/Messages/Chats";
import Main from "../../components/Messages/Main";
import ConversationType from "../../types/ConversationType";
import axios from "axios";
import { useRouter } from "next/router";

const Messages = ({ user }: { user: any }) => {
  const router = useRouter();

  const [conversations, setConversations] = useState(
    user.conversations.map((c: any) => JSON.parse(c))
  );

  const [conversation, setConversation] = useState(
    null as ConversationType | null
  );

  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    axios.get("/api/conversations/" + router.query.id).then(res => {
      setConversation(res.data.conversation);
    });
  }, [router.query.id]);

  return (
    <Header user={user}>
      <div className="relative flex w-screen text-black h-[92vh] bg-white ring-white ring-[8rem]">
        <Chats conversations={conversations} user={user} />
        <div className="flex w-full h-full ">
          <Main
            user={user}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            conversation={conversation}
            setConversation={setConversation}
          />
          {showInfo && (
            <Info
              conversation={conversation}
              setConversation={setConversation}
              user={user}
            />
          )}
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
