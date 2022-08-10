import type { NextPage } from "next";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Header>
      <div className="min-h-screen w-screen p-2 py-6">
        <nav className="max-w-[320px]">
          <Link href="/user/id">
            <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="https://picsum.photos/600" alt="" layout="fill" />
              </div>
              <h2>Username</h2>
            </a>
          </Link>
          <Link href="/friends">
            <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="https://picsum.photos/600" alt="" layout="fill" />
              </div>
              <h2>Find Friends</h2>
            </a>
          </Link>
          <Link href="/groups">
            <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="https://picsum.photos/600" alt="" layout="fill" />
              </div>
              <h2>Groups</h2>
            </a>
          </Link>
          <Link href="/marketplace">
            <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="https://picsum.photos/600" alt="" layout="fill" />
              </div>
              <h2>Marketplace</h2>
            </a>
          </Link>
          <Link href="/watch">
            <a className="text-black flex items-center justify-start gap-3 hover:bg-[#e4e6e9] p-2 rounded-lg">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="https://picsum.photos/600" alt="" layout="fill" />
              </div>
              <h2>Watch</h2>
            </a>
          </Link>
        </nav>
        <main></main>
        <div></div>
      </div>
    </Header>
  );
};

export default Home;
