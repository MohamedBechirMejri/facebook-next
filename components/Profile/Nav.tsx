import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const links = ["about", "friends", "photos", "videos", "map"];
  const router = useRouter();

  return (
    <nav className="flex items-center w-full p-2 px-8 rounded-lg text-[#606266] relative ">
      <div className="flex flex-col h-full ">
        <Link href={"/users/" + router.query.id}>
          <a className="h-full p-3 font-semibold capitalize transition-all rounded-lg  text-[hsl(214,89%,52%)]">
            posts
          </a>
        </Link>
        <div className="w-full h-[3px] bg-[#1876f2] rounded-full" />
      </div>
      {links.map(link => (
        <div key={link}>
          <Link
            href={
              "/users/" + router.query.id
              // + "/"   +  link
            }
          >
            <a className="h-full p-3 font-semibold capitalize transition-all rounded-lg hover:bg-gray-200 active:bg-gray-300">
              {link}
            </a>
          </Link>
        </div>
      ))}
      <div className="flex items-center justify-center h-full gap-2 p-3 font-semibold capitalize transition-all rounded-lg cursor-pointer hover:bg-gray-200 active:bg-gray-300">
        More
        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em">
          <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
        </svg>
      </div>
      <div className="py-1 px-4 text-lg bg-[#e4e6eb] hover:bg-[#d8dadf] rounded-lg transition-all cursor-pointer absolute right-8 top-1/2 -translate-y-1/2 font-sm tracking-tighter active:scale-95">
        •••
      </div>
    </nav>
  );
};

export default Nav;
