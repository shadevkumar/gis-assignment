"use client";
import axios from "axios";
import StoryCard from "./cards/StoryCard";
import { useEffect, useState } from "react";

interface Story {
  story: string;
  id: number;
}

const MarketStories = () => {
  const [marketStories, setMarketStories] = useState([]);
  useEffect(() => {
    const fetchMarketStories = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/shadevkumar/goindiastocks-assignment-dummy-data/main/marketStories.json"
      );

      setMarketStories(response.data);
    };
    fetchMarketStories();
  }, []);
  return (
    <div
      className="w-full md:w-4/12  px-2 bg-red-400 min-h-screen overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {marketStories.map((story: Story) => (
        <StoryCard key={story.id} />
      ))}
    </div>
  );
};

export default MarketStories;
