import Image from "next/image";

const Chats = () => {
  return (
    <div className="w-[360px] h-full shrink-0 px-4 py-2">
      <h1 className="pb-4 text-2xl font-semibold">
        <span>Chats</span>
      </h1>
      <div className="rounded-full bg-[#f0f2f5] flex items-center justify-left p-2 transition-all">
        <div className="relative w-8 h-4">
          <Image src="/Assets/search.svg" layout="fill" alt="" />
        </div>
        <input
          type="text"
          className="bg-transparent placeholder:text-[#656797] outline-none text-black transition-all"
          placeholder="Search Messenger"
        />
      </div>
    </div>
  );
};

export default Chats;
