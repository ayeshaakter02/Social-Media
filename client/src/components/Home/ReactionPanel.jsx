import { motion } from "framer-motion";
import { AiFillDislike } from "react-icons/ai";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import {
  BsFillEmojiAngryFill,
  BsFillEmojiDizzyFill,
  BsFillEmojiSurpriseFill,
  BsFillEmojiTearFill,
} from "react-icons/bs";
import { useState } from "react";

const reactions = [
  {
    type: "like",
    label: "Like",
    emoji: (
      <div className="-ml-3 z-10 flex items-center text-xl justify-center w-10 h-10 rounded-full bg-linear-to-b from-[#97edf3] to-[#01bac7]  text-white">
        <FaThumbsUp />
      </div>
    ),
  },
  {
    type: "love",
    label: "Love",
    emoji: (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-b from-[#fc6666] to-[#df0000] text-white text-xl">
        <FaHeart />
      </div>
    ),
  },
  {
    type: "dislike",
    label: "Dislike",
    emoji: (
      <div className="flex items-center text-xl justify-center w-10 h-10 rounded-full bg-linear-to-b from-[#d166fc] to-[#c600d8]  text-white">
        <AiFillDislike />
      </div>
    ),
  },
  {
    type: "haha",
    label: "Haha",
    emoji: (
      <div className=" text-yellow-400 text-[40px] rounded-full bg-black">
        <MdEmojiEmotions />
      </div>
    ),
  },
  {
    type: "care",
    label: "Care",
    emoji: (
      <div className=" text-yellow-400 text-[40px] rounded-full bg-black">
        <BsFillEmojiDizzyFill />
      </div>
    ),
  },
  {
    type: "wow",
    label: "Wow",
    emoji: (
      <div className=" text-yellow-400 text-[40px] rounded-full bg-black">
        <BsFillEmojiSurpriseFill />
      </div>
    ),
  },
  {
    type: "angry",
    label: "Angry",
    emoji: (
      <div className=" text-[#f37814] text-[40px] rounded-full bg-black">
        <BsFillEmojiAngryFill />
      </div>
    ),
  },
  {
    type: "sad",
    label: "Sad",
    emoji: (
      <div className=" text-blue-500 text-[40px] rounded-full bg-black">
            <BsFillEmojiTearFill />
          </div>
    ),
  },
];

const ReactionPanel = ({ onSelect }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="flex justify-center gap-2 bg-white shadow-xl rounded-full w-102  py-3 mb-10.5 z-9999"
    >
      {reactions.map((r) => (
        <div
          key={r.type}
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHovered(r.type)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Tooltip */}
          {hovered === r.type && (
            <div className="absolute -top-7 px-2.75 py-1 text-xs text-white bg-[#45437F] rounded-[22px] whitespace-nowrap font-normal font-poppins">
              {r.label}
            </div>
          )}

          {/* Emoji */}
          <motion.div
            onClick={() => onSelect(r)}
            whileHover={{ scale: 1, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer text-2xl"
          >
            {r.emoji}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default ReactionPanel;
