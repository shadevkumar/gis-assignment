import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FcComments } from "react-icons/fc";
import { FiShare2 } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

interface PostCard {
  username: string;
  postTitle: string;
}

const PostCard = ({ username, postTitle }: PostCard) => {
  return (
    <div className=" bg-slate-200 m-4 px-4 py-2 rounded-xl ">
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-4">
          <div className="w-10 h-10 mt-1 bg-blue-700 rounded-full"></div>
          <span>Shadev Kumar</span>
          <div className="bg-blue-800 text-white px-4 py-1 text-xs rounded-full">
            Sector 2
          </div>
        </div>
        <span className="text-blue-800 text-xs">2 min ago</span>
      </div>
      <div className=" mx-14">
        <p>
          {postTitle} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis eos accusamus nemo.
        </p>
      </div>
      <div className="flex mx-14 gap-2 md:gap-12 my-2">
        <div className="flex items-center gap-2">
          <FaRegHeart className="text-xl" />
          <span className="text-xs">2k</span>
        </div>
        <div className="flex items-center gap-2">
          <IoEyeOutline className="text-xl" />
          <span className="text-xs">2k</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMessageSquare className="text-xl " />
          <span className="text-xs">2k Comments</span>
        </div>
        <div className="flex items-center gap-2">
          <FiShare2 className="text-xl" />
          <span className="text-xs">Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
