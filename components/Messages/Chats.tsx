import Image from "next/image";
import Link from "next/link";
import FriendsOverlay from "./FriendsOverlay";

const Chats = ({
  conversations,
  user,
}: {
  conversations?: any;
  user?: any;
}) => {
  return (
    <div className="hidden w-[360px] h-full shrink-0 px-4 py-2 xl:block">
      <h1 className="flex items-center justify-between pb-4 text-2xl font-semibold">
        <span>Chats</span>
        <div className="flex items-center gap-4 px-4 pt-2">
          <button className="px-[.35rem] bg-gray-100 rounded-full transition-all hover:bg-gray-200 active:bg-gray-300">
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons8.png"})`,
                backgroundPosition: "-63px -132px",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
            />
          </button>
          <button className="px-[.35rem] bg-gray-100 rounded-full transition-all hover:bg-gray-200 active:bg-gray-300">
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons7.png"})`,
                backgroundPosition: "0px -253.5px",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
            />
          </button>
          <FriendsOverlay user={user} />
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
      <div className="pt-6 overflow-y-scroll">
        {conversations?.map((c: any) => {
          const { firstName, lastName, picture } =
            c.users[0]._id === user._id ? c.users[1] : c.users[0];
          return (
            <Link
              href={"/messages/" + c._id}
              key={c._id}
              className="flex items-center justify-start gap-4 p-2 transition-all rounded-lg hover:bg-gray-200"
            >
              <div className="relative overflow-hidden rounded-full w-14 h-14">
                <Image src={picture} layout="fill" alt="" />
              </div>
              <h2 className="font-medium">{firstName + " " + lastName}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
