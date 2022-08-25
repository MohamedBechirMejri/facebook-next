import Image from "next/image";
const Reactions = ({
  setIsReacting,
  post,
  setReacts,
}: {
  setIsReacting: any;
  post: any;
  setReacts: any;
}) => {
  const handleReact = (action: string) => {
    fetch("/api/posts/" + post._id.toString() + "/" + action)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setReacts(
            // @ts-ignore
            Object.entries(data.post.reacts).sort(
              // @ts-ignore
              (a, b) => b[1].length - a[1].length
            )
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div
      className="absolute flex items-center justify-center gap-2 p-2 bg-white border rounded-full -top-12 left-8 w-max animate-reveal"
      onMouseEnter={() => setIsReacting(true)}
      onMouseLeave={() => setIsReacting(false)}
    >
      <button
        className="animate-reveal [animation-delay:.1s] opacity-0 translate-y-[1rem]"
        onClick={() => {
          handleReact("like");
        }}
      >
        <div className="transition-all hover:scale-125 active:scale-100">
          <Image src="/Assets/rlike.png" height={35} width={35} alt="like" />
        </div>
      </button>
      <button
        className="animate-reveal [animation-delay:.1s] opacity-0 translate-y-[1rem]"
        onClick={() => {
          handleReact("love");
        }}
      >
        <div className="transition-all hover:scale-125 active:scale-100">
          <Image src="/Assets/rlove.png" height={35} width={35} alt="love" />
        </div>
      </button>
      <button
        className="animate-reveal [animation-delay:.1s] opacity-0 translate-y-[1rem]"
        onClick={() => {
          handleReact("haha");
        }}
      >
        <div className="transition-all hover:scale-125 active:scale-100">
          <Image src="/Assets/rhaha.png" height={35} width={35} alt="haha" />
        </div>
      </button>
      <button
        className="animate-reveal [animation-delay:.1s] opacity-0 translate-y-[1rem]"
        onClick={() => {
          handleReact("wow");
        }}
      >
        <div className="transition-all hover:scale-125 active:scale-100">
          <Image src="/Assets/rwow.png" height={35} width={35} alt="wow" />
        </div>{" "}
      </button>
      <button
        className="animate-reveal [animation-delay:.1s] opacity-0 translate-y-[1rem]"
        onClick={() => {
          handleReact("sad");
        }}
      >
        <div className="transition-all hover:scale-125 active:scale-100">
          <Image src="/Assets/rsad.png" height={35} width={35} alt="sad" />
        </div>
      </button>
      <button
        className="animate-reveal [animation-delay:.1s] opacity-0 translate-y-[1rem]"
        onClick={() => {
          handleReact("angry");
        }}
      >
        <div className="transition-all hover:scale-125 active:scale-100">
          <Image src="/Assets/rangry.png" height={35} width={35} alt="angry" />
        </div>{" "}
      </button>
    </div>
  );
};

export default Reactions;
