import Image from "next/image";
const Login = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f0f2f5] text-black [font-family:Helvetica] flex flex-col justify-center items-center">
      <div className="flex w-full h-full justify-center items-center p-8 gap-24">
        <div className="flex flex-col items-start justify-center">
          <Image
            src="/Assets/facebook-logo.svg"
            alt="facebook logo"
            width="280"
            height="100"
          />
          <p className="text-2xl font-normal px-8 -mt-2">
            Connect with friends and the <br /> world around you on Facebook.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-lg text-white font-bold items-center py-8 min-w-[25rem] border">
          <h1 className="text-black text-2xl">Login With:</h1>
          <button className="w-full bg-[#1877f2] hover:bg-[#166fe5] transition-all p-3 rounded-lg px-6 active:scale-95">
            The Real Facebook
          </button>
          <hr className="bg-black w-full" />
          <button className="w-64 bg-[#42b72a] hover:bg-[#36a420] transition-all p-3 rounded-lg px-4 active:scale-95">
            A Dummy Account
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Login;
