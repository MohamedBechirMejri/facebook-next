import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import type { NextApiResponse, NextApiRequest } from "next";

const Messages = ({ user }: { user: any }) => {
  return (
    <Header user={user}>
      <div className="relative flex w-screen p-2 text-black h-[93vh]  ">
        {/* SECTION: Contacts   */}
        <div className="w-[360px] h-full bg-red-400 shrink-0"></div>
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
