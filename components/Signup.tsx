export default function Signup() {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-white bg-opacity-60" />
      <div className="bg-white absolute top-1/2 left-1/2 w-[min(94svw,30rem)] -translate-x-1/2 -translate-y-1/2 shadow rounded-md">
        <div className="p-4 border-b">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 text-sm">It's quick and easy.</p>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="flex gap-4">
            <input
              type="text"
              className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
              placeholder="First Name"
            />
            <input
              type="text"
              className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            placeholder="Email"
          />
          <input
            type="password"
            className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            placeholder="Password"
          />
        </div>
        <div className="p-4 flex items-center justify-center pt-0">
          <button className="flex items-center justify-center gap-2 bg-[#42b72a] px-3  p-2 rounded-lg text-lg font-semibold tracking-widest  hover:bg-[#36a420] transition-all active:scale-95 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
