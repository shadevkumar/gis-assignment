"use client";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("DiscussionForum");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Check on mount
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  console.log("render");
  return (
    <>
      <section className="flex flex-col">
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
          {activeComponent === "DiscussionForum" || !isMobile ? (
            <DiscussionForum />
          ) : null}
          {activeComponent === "MarketStories" || !isMobile ? (
            <MarketStories />
          ) : null}
        </div>
      </section>
    </>
  );
}
