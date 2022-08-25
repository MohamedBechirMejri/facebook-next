import Image from "next/image";
const Reactions = () => {
  return (
    <div className="absolute flex items-center justify-center gap-2 p-2 bg-white border rounded-full -top-14 left-8">
      <button className="transition-all hover:scale-125 active:scale-100">
        <Image src="/Assets/rlike.png" height={39} width={39} alt="like" />
      </button>
      <button className="transition-all hover:scale-125 active:scale-100">
        <Image src="/Assets/rlove.png" height={39} width={39} alt="love" />
      </button>
      <button className="transition-all hover:scale-125 active:scale-100">
        <Image src="/Assets/rhaha.png" height={39} width={39} alt="haha" />
      </button>
      <button className="transition-all hover:scale-125 active:scale-100">
        <Image src="/Assets/rwow.png" height={39} width={39} alt="wow" />
      </button>
      <button className="transition-all hover:scale-125 active:scale-100">
        <Image src="/Assets/rsad.png" height={39} width={39} alt="sad" />
      </button>
      <button className="transition-all hover:scale-125 active:scale-100">
        <Image src="/Assets/rangry.png" height={39} width={39} alt="angry" />
      </button>
    </div>
  );
};

export default Reactions;
