"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./cards/PostCard";

interface Forum {
  username: string;
  postTitle: string;
  id: number;
}

const DiscussionForum = () => {
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    async function fetchAllForumData() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/shadevkumar/goindiastocks-assignment-dummy-data/main/discussionForum.json"
      );
      setForumData(response.data);
    }
    fetchAllForumData();
  }, []);

  return (
    <div
      className="max-w-7/12 px-2 bg-green-300 min-h-screen overflow-y-scroll "
      style={{ scrollbarWidth: "none" }}
    >
      {forumData.map((data: Forum) => (
        <PostCard
          key={data.id}
          username={data.username}
          postTitle={data.postTitle}
        />
      ))}
      {forumData.map((data: Forum) => (
        <PostCard
          key={data.id}
          username={data.username}
          postTitle={data.postTitle}
        />
      ))}
      {forumData.map((data: Forum) => (
        <PostCard
          key={data.id}
          username={data.username}
          postTitle={data.postTitle}
        />
      ))}
    </div>
  );
};

export default DiscussionForum;
