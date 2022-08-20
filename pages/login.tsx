import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f0f2f5] text-black [font-family:Helvetica] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center w-full h-full gap-24 p-8">
        <div className="flex flex-col items-start justify-center">
          <Image
            src="/Assets/facebook-logo.svg"
            alt="facebook logo"
            width="280"
            height="100"
          />
          <p className="px-8 -mt-2 text-2xl font-normal">
            Connect with friends and the <br /> world around you on Facebook.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-lg text-white font-bold items-center py-8 min-w-[25rem] border">
          <h1 className="text-2xl text-black">Login </h1>
          <Link href="/api/auth">
            <a className="flex items-center justify-center gap-2 bg-[#2374f2] px-3  p-2 rounded-lg text-lg font-semibold tracking-widest  hover:bg-[#166fe5] transition-all active:scale-95">
              <Image
                src="/Assets/logo-white.svg"
                height={34}
                width={34}
                alt=""
              />
              <span>Continue with Facebook</span>
            </a>
          </Link>
          <hr className="w-full bg-black" />
          {/* <button className="w-64 bg-[#42b72a] hover:bg-[#36a420] transition-all p-3 rounded-lg px-4 active:scale-95">
            A Dummy Account
          </button> */}
          <button className="flex items-center justify-center gap-2 bg-[#42b72a] px-3  p-2 rounded-lg text-lg font-semibold tracking-widest  hover:bg-[#36a420] transition-all active:scale-95">
            <Image
              src="/Assets/guest-icon.png"
              height={34}
              width={34}
              alt=""
              style={{
                filter: "invert(1)",
              }}
            />
            <span>Continue as guest</span>
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Login;
