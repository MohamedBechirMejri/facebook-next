import Header from "../../components/Header";
import getUser from "../../lib/Auth/getUser";
import type { NextApiResponse, NextApiRequest } from "next";

const Messages = ({ user }: { user: any }) => {
  return (
    <Header user={user}>
      <div className="relative flex w-screen p-2 text-black bg-black h-[93vh]"></div>
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
