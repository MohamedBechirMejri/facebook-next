import { is } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Signup from "~/components/Signup";

const Login = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-[#f0f2f5] text-black [font-family:Helvetica] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full h-full gap-24 sm:p-8 xl:flex-row ">
        <div className="flex flex-col items-center xl:items-start justify-center">
          <Image
            src="/Assets/facebook-logo.svg"
            alt="facebook logo"
            width="280"
            height="100"
          />
          <p className="p-4 -mt-2 text-2xl font-normal sm:px-8">
            Connect with friends and the <br /> world around you on Facebook.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-lg text-white font-bold items-center py-8 min-w-[min(25rem,98svw)] border">
          <input
            type="text"
            className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            placeholder="Email"
          />
          <input
            type="password"
            className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            placeholder="Password"
          />
          <Link
            href="/api/auth"
            className="flex items-center justify-center gap-2 bg-[#2374f2] px-3  p-2 rounded-lg text-lg font-semibold tracking-widest hover:bg-[#166fe5] transition-all active:scale-95 w-full"
          >
            Login
          </Link>{" "}
          <Link
            href="/restpassword"
            className="flex items-center justify-center text-[#2374f2] hover:underline transition-all active:scale-95 w-full text-center font-normal text-sm"
          >
            forgot password?
          </Link>
          <hr className="w-full bg-black" />
          <button
            className="flex items-center justify-center gap-2 bg-[#42b72a] px-3  p-2 rounded-lg text-lg font-semibold tracking-widest  hover:bg-[#36a420] transition-all active:scale-95"
            onClick={() => setIsSignupVisible(true)}
          >
            Create new account
          </button>
        </div>
      </div>

      {isSignupVisible && <Signup setIsSignupVisible={setIsSignupVisible} />}
    </div>
  );
};

export default Login;
