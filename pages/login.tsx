import Image from "next/image";
const Login = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f0f2f5] text-black [font-family:Helvetica] ">
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
    </div>
  );
};

export default Login;
