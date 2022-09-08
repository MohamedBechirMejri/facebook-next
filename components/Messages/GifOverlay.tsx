import { useEffect, useState } from "react";
const giphy = require("giphy-api")(process.env.NEXT_PUBLIC_GIPHY_API_KEY);

const GifOverlay = ({}: {}) => {
  const [isVisible, setIsVisible] = useState(false);

  //   useEffect(() => {
  //     giphy.search("pokemon").then((res: any) => {
  //     //   console.log("res: ", res.data);
  //         res.data.forEach(gif => {
  //             console.log(gif.images.original.url);
  //
  //         })
  //     });
  //   }, []);

  return (
    <div className="">
      <button
        className="relative z-20 pt-1 transition-all rounded-full active:scale-95"
        onClick={() => setIsVisible(!isVisible)}
      ></button>

      {isVisible && (
        <div className="absolute z-20 flex flex-col bg-white border rounded-lg shadow w-max right-16 h-max -top-[810%]"></div>
      )}
      {isVisible && (
        <div
          className="fixed inset-0 z-10 w-screen h-screen bg-transparent"
          onClick={() => setIsVisible(false)}
        />
      )}
    </div>
  );
};

export default GifOverlay;
