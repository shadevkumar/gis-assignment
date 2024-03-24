"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./cards/PostCard";
import ShimmerPostCard from "./shimmers/ShimmerPostCard";

interface Forum {
  username: string;
  postDescription: string;
  id: number;
}

const DiscussionForum = () => {
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    async function fetchAllForumData() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/shadevkumar/goindiastocks-assignment-dummy-data/main/discussionForum.json",
      );
      setForumData(response.data);
    }
    fetchAllForumData();
  }, []);

  return (
    <div
      className="flex  max-h-screen  w-full flex-col items-center gap-1  overflow-y-scroll px-2 pb-4  sm:px-4 md:px-6 lg:w-8/12 lg:px-2 xl:w-9/12  "
      style={{ scrollbarWidth: "none" }}
    >
      <div className=" sticky top-0 hidden  w-full  px-1 py-3 backdrop-blur-2xl sm:px-3 md:px-4 lg:flex ">
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
