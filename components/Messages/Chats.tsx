import Image from "next/image";

const Chats = () => {
  return (
    <div className="w-[360px] h-full shrink-0 px-4 py-2">
      <h1 className="flex items-center justify-between pb-4 text-2xl font-semibold">
        <span>Chats</span>
        <div className="flex items-center gap-4 px-4 pt-2">
          <button className="px-[.35rem] hover:bg-gray-200 rounded-full transition-all active:bg-gray-300">
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons8.png"})`,
                backgroundPosition: "-63px -132px",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
            />
          </button>
          <button className="px-[.35rem] hover:bg-gray-200 rounded-full transition-all active:bg-gray-300">
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons7.png"})`,
                backgroundPosition: "0px -253.5px",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
            />
          </button>
          <button className="px-[.35rem] hover:bg-gray-200 rounded-full transition-all active:bg-gray-300">
            <div
              style={{
                backgroundImage: `url(${"/Assets/buttons9.png"})`,
                backgroundPosition: "0px -557px",
              }}
              className="w-[20px] h-[20px] bg-no-repeat inline-block bg-auto transition-all"
            />
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
    </div>
  );
};

export default Chats;
