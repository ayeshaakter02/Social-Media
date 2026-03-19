import { motion } from "framer-motion";
import { AiFillDislike } from "react-icons/ai";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import {
  BsFillEmojiAngryFill,
  BsFillEmojiDizzyFill,
  BsFillEmojiTearFill,
} from "react-icons/bs";

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
    type: "wow",
    label: "Wow",
    emoji: (
      <div className=" text-yellow-400 text-[40px] rounded-full bg-black">
        <BsFillEmojiDizzyFill />
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="flex gap-2 bg-white shadow-xl rounded-full w-102 px-3 py-3 mb-10.5"
    >
      {reactions.map((r, i) => (
        <motion.span
          key={r.type}
          onClick={() => onSelect(r)}
          whileHover={{ scale: 1, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xl cursor-pointer"
        >
          {r.emoji}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ReactionPanel;
