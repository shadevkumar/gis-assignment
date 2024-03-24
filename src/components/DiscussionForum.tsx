"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./cards/PostCard";
import ShimmerPostCard from "./shimmers/ShimmerPostCard";
import { DISCUSSION_FORUM_API } from "@/constants/Constant";

interface Forum {
  username: string;
  postDescription: string;
  id: number;
}

const DiscussionForum = () => {
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    const fetchAllForumData = async () => {
      try {
        const response = await axios.get(DISCUSSION_FORUM_API);
        setForumData(response.data);
      } catch (error) {
        console.error("Error fetching Discussion Forum data:", error);
      }
    };
    fetchAllForumData();
  }, []);

  return (
    <div className="scrollbar-hide  w- flex max-h-full  w-full flex-col items-center justify-center gap-1  overflow-y-scroll  px-2  pb-4 sm:px-4 md:px-6 lg:w-8/12 lg:px-2 xl:w-9/12 ">
      <div className=" sticky top-0 hidden  w-full  px-1 py-3 backdrop-blur-2xl sm:px-3 md:px-4 lg:flex  lg:w-[90%] 2xl:w-[80%] ">
        <h1 className="text-2xl font-semibold text-red-700 xl:text-3xl ">
          {" "}
          DISCUSSION FORUM
        </h1>
      </div>
      {Array.isArray(forumData) && forumData.length === 0
        ? Array(10)
            .fill(null)
            .map((_, i) => <ShimmerPostCard key={i} />)
        : forumData.map((data: Forum) => (
            <PostCard
              key={data.id}
              username={data.username}
              postDescription={data.postDescription}
            />
          ))}
    </div>
  );
};

export default DiscussionForum;
