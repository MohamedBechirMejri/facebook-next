import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import type { NextApiResponse, NextApiRequest } from "next";
import Image from "next/image";

const Messages = ({ user }: { user: any }) => {
  return (
    <Header user={user}>
      <div className="relative flex w-screen p-2 text-black h-[93vh] bg-white ">
        {/* SECTION: Chats   */}
        <div className="w-[360px] h-full  shrink-0 px-4 py-2">
          <h1 className="pb-4 text-2xl font-semibold">
            <span>Chats</span>
          </h1>
          <div className="rounded-full bg-[#f0f2f5] flex items-center justify-left p-1 px-2 transition-all">
            <div className="relative w-8 h-4">
              <Image src="/Assets/search.svg" layout="fill" alt="" />
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:text-[#656797] outline-none text-black transition-all"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div className="flex w-full h-full bg-blue-400">
          {/* SECTION: Main   */}
          <main className="w-full h-full bg-blue-400"></main>
          {/* SECTION: Info   */}
          <div className="w-[360px] h-full bg-green-400 shrink-0"></div>
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
