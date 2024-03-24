"use client";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("DiscussionForum");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
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
          <div className="flex w-screen bg-blue-950 justify-around items-center text-[#d1d1d1] ">
            <button
              onClick={() => {
                setActiveComponent("DiscussionForum");
              }}
              className={`w-1/2 py-2 flex items-center justify-center text-lg font-bold ${
                activeComponent === "DiscussionForum"
                  ? "bg-black bg-opacity-30 text-white border-b-4 border-red-900"
                  : "hover:bg-black hover:bg-opacity-30 hover:text-white border-b-4 border-blue-950 hover:border-red-900"
              }`}
            >
              Discussion Forum
            </button>
            <button
              onClick={() => {
                setActiveComponent("MarketStories");
              }}
              className={`w-1/2 py-2 flex items-center justify-center text-lg font-bold ${
                activeComponent === "MarketStories"
                  ? "bg-black bg-opacity-30 text-white border-b-4 border-red-900"
                  : "hover:bg-black hover:bg-opacity-30 hover:text-white border-b-4 border-blue-950 hover:border-red-900"
              }`}
            >
              Market Stories
            </button>
          </div>
        )}

        <div className={`${isMobile ? "block" : "flex"}  w-full `}>
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
