"use client";
import axios from "axios";
import StoryCard from "./cards/StoryCard";
import { useEffect, useState } from "react";
import ShimmerStoryCard from "./shimmers/ShimmerStoryCard";

interface Story {
  id: number;
  image: string;
  title: string;
  story: string;
}

const MarketStories = () => {
  const [marketStories, setMarketStories] = useState([]);
  useEffect(() => {
    const fetchMarketStories = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/shadevkumar/goindiastocks-assignment-dummy-data/main/marketStories.json",
      );

      setMarketStories(response.data);
    };
    fetchMarketStories();
  }, []);
  return (
    <div
      className="  flex max-h-screen min-h-screen w-full flex-col  items-center  overflow-y-scroll  px-2   lg:w-4/12 xl:min-w-[25vw] xl:max-w-[27vw]"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="sticky top-0 hidden  w-full  items-center  justify-center  px-1 py-3 backdrop-blur-2xl sm:px-3 md:px-4 lg:flex">
        <h1 className="text-2xl font-semibold text-red-700 xl:text-3xl">
          {" "}
          MARKET STORIES
        </h1>
      </div>
      {Array.isArray(marketStories) && marketStories.length === 0
        ? Array(10)
            .fill(null)
            .map((_, i) => <ShimmerStoryCard key={i} />)
        : Array.isArray(marketStories) &&
          marketStories?.map((story: Story) => (
            <StoryCard
              key={story.id}
              image={story.image}
              title={story.title}
              story={story.story}
            />
          ))}
    </div>
  );
};

export default MarketStories;
