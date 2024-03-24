"use client";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import { useState, useEffect } from "react";

type ComponentKey = "DiscussionForum" | "MarketStories";

const componentMap: Record<ComponentKey, () => JSX.Element> = {
  DiscussionForum: DiscussionForum,
  MarketStories: MarketStories,
};

export default function Home() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentKey>("DiscussionForum");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const renderComponents = () => {
    if (!isMobile) {
      // On larger screens, always render both components side by side
      return (
        <>
          <DiscussionForum />
          <MarketStories />
        </>
      );
    } else {
      // On mobile screens, render based on activeComponent
      const ActiveComponent = componentMap[activeComponent];
      return <ActiveComponent />;
    }
  };

  return (
    <>
      <section className="flex flex-col ">
        {isMobile && (
          <div className="sticky top-0 flex w-screen items-center justify-around bg-blue-950 text-[#d1d1d1] ">
            <button
              onClick={() => {
                setActiveComponent("DiscussionForum");
              }}
              className={`flex w-1/2 items-center justify-center py-2 text-lg font-bold ${
                activeComponent === "DiscussionForum"
                  ? "border-b-4 border-red-900 bg-black bg-opacity-30 text-white"
                  : "border-b-4 border-blue-950 hover:border-red-900 hover:bg-black hover:bg-opacity-30 hover:text-white"
              }`}
            >
              Discussion Forum
            </button>
            <button
              onClick={() => {
                setActiveComponent("MarketStories");
              }}
              className={`flex w-1/2 items-center justify-center py-2 text-lg font-bold ${
                activeComponent === "MarketStories"
                  ? "border-b-4 border-red-900 bg-black bg-opacity-30 text-white"
                  : "border-b-4 border-blue-950 hover:border-red-900 hover:bg-black hover:bg-opacity-30 hover:text-white"
              }`}
            >
              Market Stories
            </button>
          </div>
        )}

        <div
          className={`${isMobile ? "block" : "flex"} w-full justify-between  `}
        >
          {renderComponents()}
        </div>
      </section>
    </>
  );
}
