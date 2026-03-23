import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm w-71  font-poppins">
      
      {/* Top Cover */}
      <div className="bg-[#45437F] h-20.75 relative">
        {/* Avatar */}
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <div className="w-19.25 h-19.25 rounded-full bg-[#615DFA] border-7 border-white"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-12.5 pb-7.25 text-center">
        <h3 className="font-medium text-[15px]">Sabina Iasmin</h3>
        <p className="text-[17px] text-[#AFB0C0] font-normal">sabina@gmail.com</p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-5.5 text-sm">
          <div>
            <p className="font-bold text-sm">930</p>
            <p className="text-[#AFB0C0] font-medium text-xs">Friends</p>
          </div>
          <div className="border-l border-[#AFB0C0]"></div>
          <div>
            <p className="font-bold text-sm">87</p>
            <p className="text-[#AFB0C0] font-medium text-xs">Posts</p>
          </div>
          <div className="border-l border-[#AFB0C0]"></div>
          <div>
            <p className="font-bold text-sm">1k</p>
            <p className="text-[#AFB0C0] font-medium text-xs">Followers</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-6.5">
          <div className="w-10 h-10 bg-[#3b5998] text-white flex items-center justify-center rounded-lg">
            <FaFacebookF />
          </div>
          <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-lg">
            <FaInstagram />
          </div>
          <div className="w-10 h-10 bg-sky-400 text-white flex items-center justify-center rounded-lg">
            <FaTwitter />
          </div>
          <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-lg">
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex">
        <button className="profile-card border-r border-[#23D2E2]">
          Add Friend
        </button>
        <button className="profile-card pb-3">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;