import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FcComments } from "react-icons/fc";
import { FiShare2 } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import Image from "next/image";
import { COMMON_USER_IMAGE } from "@/constants/Constant";

interface PostCard {
  username: string;
  postDescription: string;
}

const PostCard = ({ username, postDescription }: PostCard) => {
  return (
    <div className="my-2 w-full cursor-pointer rounded-md px-1  py-2 shadow-lg hover:shadow-xl max-md:my-2 sm:px-3 md:m-3 md:px-4 lg:m-4 lg:w-[90%] 2xl:w-[80%] ">
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-2 md:gap-4">
          <Image
            alt={username}
            src={COMMON_USER_IMAGE}
            width={30}
            height={30}
            className="mt-1 h-6 w-6 rounded-full  max-md:mx-1 sm:h-8 sm:w-8 md:h-10 md:w-10"
          ></Image>
          <span className="text-base md:text-lg">{username}</span>
          <div className="rounded-full bg-blue-800  px-2 py-1 text-[7px] text-white sm:text-[10px] md:px-4 md:text-xs">
            Sector 2
          </div>
        </div>
        <span className="pr-2 text-[10px] text-blue-800 sm:text-xs">
          2 min ago
        </span>
      </div>
      <div className="px-9 py-1 text-sm sm:px-12 md:px-14 md:text-base ">
        <p>{postDescription}</p>
      </div>
      <div className="my-2 flex gap-4 px-9 sm:px-12 md:gap-12 md:px-14">
        <div className="flex items-center gap-2">
          <FaRegHeart className="text-lg sm:text-xl" />
          <span className="text-xs">2k</span>
        </div>
        <div className="flex items-center gap-2">
          <IoEyeOutline className="text-lg sm:text-xl" />
          <span className="text-xs">2k</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMessageSquare className="text-lg sm:text-xl" />
          <span className="text-xs">2k Comments</span>
        </div>
        <div className="flex items-center gap-2">
          <FiShare2 className="text-lg sm:text-xl" />
          <span className="text-xs">Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
