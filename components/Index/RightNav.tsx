import Image from "next/image";
import Link from "next/link";

const RightNav = ({ user }: { user: any }) => {
  return (
    <div className="h-full w-[280px] overflow-y-scroll m-0 fixed right-4 top-16 pb-24 hidden xl:block">
      <h3 className="p-2 mb-2 text-lg font-semibold text-[#65676b]">
        Contacts
      </h3>
      <div>
        {user.friends.map((friend: any, i: number) => {
          return (
            <a
              href={"/api/users/" + friend._id + "/message"}
              key={i}
              className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-1 px-2 rounded-lg transition-all mb-1"
            >
              <div className="relative w-8 h-8 overflow-hidden rounded-full">
                <Image src={friend.picture} alt="" layout="fill" />
              </div>
              <h2>{friend.firstName + " " + friend.lastName}</h2>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RightNav;
