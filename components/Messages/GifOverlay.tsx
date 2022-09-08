import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import GifSvg from "./SVGs/Gif";
const giphy = require("giphy-api")(process.env.NEXT_PUBLIC_GIPHY_API_KEY);

const GifOverlay = ({
  theme,
  id,
  setConversation,
}: {
  theme: string;
  id: any;
  setConversation: any;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    giphy.trending().then((res: any) => {
      setGifs(res.data);
    });
  }, []);

  const sendGif = (imageLink: string) => {
    axios
      .post("/api/conversations/" + id, {
        image: imageLink,
      })
      .then(res => {
        setConversation(res.data.conversation);
      });
  };

  return (
    <div className="flex items-center h-full">
      <button
        className="relative z-20 transition-all rounded-full active:scale-95"
        onClick={() => setIsVisible(!isVisible)}
      >
        <GifSvg fill={theme} />
      </button>

      {isVisible && (
        <div className="absolute z-20 flex flex-col overflow-scroll bg-white border rounded-lg shadow -top-[720%] w-[20rem] -left-0 h-[25rem]">
          <div className="sticky top-0 z-10 w-full p-2 px-4 bg-white">
            <input
              type="search"
              className="w-full h-10 bg-[#f0f2f5] rounded-full outline-none px-4"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col items-center">
            {gifs.map((gif: any, i: number) => {
              return (
                <div
                  key={i}
                  className="m-1 overflow-hidden transition-all rounded-lg shadow cursor-pointer active:scale-95 w-fit hover:grayscale"
                  onClick={() => {
                    sendGif(gif.images.original.url);
                    setIsVisible(false);
                  }}
                >
                  <Image
                    src={gif.images.original.url}
                    height={gif.images.original.height}
                    width={gif.images.original.width}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
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
