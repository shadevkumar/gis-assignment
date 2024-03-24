"use client";
import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { NAV_LINKS } from "@/constants/Constant";
import Link from "next/link";

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div className="relative max-md:absolute top-0 min-h-screen">
      <div
        className={`${
          toggleSidebar && "hidden"
        } bg-blue-950 max-sm:w-[55vw] max-md:w-[45vw] max-lg:w-[40vw] lg:w-[20vw] min-h-screen text-[#d1d1d1]  sticky top-0 `}
      >
        <div className="h-20 border-b border-[#d1d1d1] flex  items-center justify-between px-6">
          <div className="flex  items-center gap-1 cursor-pointer">
            <BiSolidUser className="text-3xl hover:bg-blue-900 rounded-full p-1 hover:text-white" />{" "}
            <span className="text-base md:text-xl font-medium ">
              Hello, User
            </span>
          </div>
          <div className="relative flex  items-center cursor-pointer">
            <IoNotifications className="text-2xl hover:text-white" />
            <FaCircle className="absolute top-0 right-[2px] text-[0.5rem] text-red-600" />
          </div>
        </div>
        <div className="text-lg flex flex-col font-medium ">
          <div className="flex items-center gap-2 hover:bg-blue-900 px-2  py-1 cursor-pointer hover:text-white">
            <BiSolidMessageAltDetail />
            Discussion Forum
          </div>
          <div className="flex items-center gap-2 hover:bg-blue-900 px-2 py-1 cursor-pointer hover:text-white">
            <FaMagnifyingGlassDollar /> Market Stories
          </div>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                href="/"
                key={link.key}
                className="hover:bg-blue-900 px-8 py-1 cursor-pointer hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div
        onClick={() => {
          setToggleSidebar(!toggleSidebar);
        }}
        className={`${
          toggleSidebar
            ? "justify-center h-screen "
            : " -right-4 top-0 h-screen "
        } absolute h-16 bg-transparent flex items-center `}
      >
        {toggleSidebar ? (
          <div className="bg-blue-950 h-16 flex items-center justify-center cursor-pointer rounded-r-md">
            <BiSolidRightArrow className="text-lg text-white " />
          </div>
        ) : (
          <div className="bg-blue-950 h-16 flex items-center justify-center cursor-pointer rounded-r-md">
            <BiSolidLeftArrow className="text-lg text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
