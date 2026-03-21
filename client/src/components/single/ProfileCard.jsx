import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm w-full">
      
      {/* Top Cover */}
      <div className="bg-[#4B4A7D] h-20 relative">
        {/* Avatar */}
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#6C63FF] to-[#5A54D1] border-4 border-white"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-14 pb-4 text-center px-4">
        <h3 className="font-semibold text-[#3E3F5E]">Azmir Uddin Alif</h3>
        <p className="text-sm text-[#AFB0C0]">azmir@gmail.com</p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div>
            <p className="font-bold text-[#3E3F5E]">930</p>
            <p className="text-[#AFB0C0]">Friends</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div>
            <p className="font-bold text-[#3E3F5E]">87</p>
            <p className="text-[#AFB0C0]">Posts</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div>
            <p className="font-bold text-[#3E3F5E]">1k</p>
            <p className="text-[#AFB0C0]">Followers</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4">
          <div className="w-9 h-9 bg-[#3b5998] text-white flex items-center justify-center rounded-lg">
            <FaFacebookF />
          </div>
          <div className="w-9 h-9 bg-pink-500 text-white flex items-center justify-center rounded-lg">
            <FaInstagram />
          </div>
          <div className="w-9 h-9 bg-sky-400 text-white flex items-center justify-center rounded-lg">
            <FaTwitter />
          </div>
          <div className="w-9 h-9 bg-red-500 text-white flex items-center justify-center rounded-lg">
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex">
        <button className="flex-1 py-3 bg-gradient-to-r from-[#6C63FF] to-[#5A54D1] text-white font-semibold">
          Add Friend
        </button>
        <button className="flex-1 py-3 bg-cyan-400 text-white font-semibold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;