export default function Signup({
  setIsSignupVisible,
}: {
  setIsSignupVisible: any;
}) {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-gray-400 bg-opacity-50" />
      <div className="bg-white absolute top-1/2 left-1/2 w-[min(94svw,30rem)] -translate-x-1/2 -translate-y-1/2 shadow rounded-md border">
        <div className="p-4 border-b relative">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 text-sm">It's quick and easy.</p>

          <button
            className="absolute top-5 right-5 text-gray-500 hover:text-black transition-all "
            onClick={() => setIsSignupVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:text-black transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
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
          <p className="text-gray-500 text-sm pt-2">Date of birth (optional)</p>

          <div className="flex gap-4">
            <select
              name="day"
              id="day"
              className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            >
              {Array.from(Array(31).keys()).map(day => (
                <option value="day">{day + 1}</option>
              ))}
            </select>
            <select
              name="month"
              id="month"
              className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            >
              {[
                "Month",
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map(month => (
                <option value="month">{month}</option>
              ))}
            </select>
            <select
              name="year"
              id="year"
              className="flex items-center justify-center gap-2 bg-white px-3  p-2 rounded-lg text-lg transition-all focus:border-[#2374f2] w-full border border-gray-300 outline-none text-black font-normal"
            >
              {Array.from(Array(120).keys())
                .map(year => year + 1900)
                .reverse()
                .map(year => (
                  <option value="year">{year}</option>
                ))}
            </select>
          </div>
          <p className="text-gray-500 text-sm pt-2">Gender (optional)</p>
          <div className=" gap-2 grid grid-cols-3 w-full">
            <label className="flex items-center gap-2 p-2 border rounded-md justify-between">
              <p>Female</p>
              <input
                type="radio"
                className="w-4 h-4"
                name="sex"
                value="female"
              />
            </label>
            <label className="flex items-center gap-2 p-2 border rounded-md justify-between">
              <p>Male</p>
              <input type="radio" className="w-4 h-4" name="sex" value="male" />
            </label>
            <label className="flex items-center gap-2 p-2 border rounded-md justify-between">
              <p>-------</p>
              <input
                type="radio"
                className="w-4 h-4"
                name="sex"
                value="anonymous"
              />
            </label>
          </div>
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
