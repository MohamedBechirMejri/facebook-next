import EmojiPicker, {
  EmojiClickData,
  EmojiStyle,
  Theme,
} from "emoji-picker-react";
import { useState } from "react";
import EmojiSvg from "./SVGs/Emoji";

const EmojiOverlay = ({
  messageText,
  setMessageText,
}: {
  messageText: any;
  setMessageText: any;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setMessageText(messageText + emojiData.emoji);
    setIsVisible(false);
  };

  return (
    <div className="">
      <button
        className="relative z-20 pt-1 transition-all rounded-full active:scale-95"
        onClick={() => setIsVisible(!isVisible)}
      >
        <EmojiSvg fill={"#321"} />
      </button>

      {isVisible && (
        <div className="absolute z-20 flex flex-col bg-white border rounded-lg shadow w-max right-16 h-max -top-[810%]">
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            autoFocusSearch={false}
            theme={Theme.LIGHT}
            // lazyLoadEmojis={true}
            showPreview={false}
            // skinTonesDisabled
            // searchPlaceHolder="Filter"
            // defaultSkinTone={SkinTones.MEDIUM}
            emojiStyle={EmojiStyle.FACEBOOK}
          />
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

export default EmojiOverlay;
