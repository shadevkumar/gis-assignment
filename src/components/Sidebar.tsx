"use client";
import { useState, useEffect } from "react";
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
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setSshowProfile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLargeScreen = window.innerWidth > 768;
      setToggleSidebar(!isLargeScreen);
    }
  }, []);

  return (
    <div className="relative top-0 min-h-screen max-lg:absolute">
      <div
        className={`sidebar ${
          toggleSidebar && "hidden"
        } sticky top-0 z-50  min-h-screen bg-blue-950 text-[#d1d1d1] max-lg:w-[40vw] max-lg:max-w-80 max-md:w-[45vw]  max-sm:w-[55vw] lg:w-[22vw] xl:w-[20vw] 2xl:w-[15vw]`}
      >
        <div className="flex h-20 items-center justify-between  border-b border-[#d1d1d1] px-6">
          <div className="relative flex  cursor-pointer items-center gap-1">
            <BiSolidUser
              onMouseEnter={() => setSshowProfile(true)}
              onMouseLeave={() => setSshowProfile(false)}
              className="rounded-full p-1 text-3xl hover:bg-black hover:bg-opacity-30 hover:text-white "
            />{" "}
            <span className="text-base font-medium md:text-xl ">
              Hello, User
            </span>
            {showProfile && (
              <div className="absolute top-6 rounded-md bg-blue-900 p-1 px-2 text-xs">
                Profile
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setShowNotification(true)}
            onMouseLeave={() => setShowNotification(false)}
            className="relative flex  cursor-pointer items-center"
          >
            <IoNotifications className="text-2xl hover:text-white" />
            <FaCircle className="absolute right-[2px] top-0 text-[0.5rem] text-red-600" />
            {showNotification && (
              <div className="absolute top-6 rounded-md bg-blue-900 p-1 px-2 text-xs">
                Notifications
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col text-lg font-medium ">
          <div
            onClick={() => {
              setToggleSidebar(!toggleSidebar);
            }}
            className="flex cursor-pointer items-center gap-2 px-2  py-1 text-base hover:bg-black hover:bg-opacity-30 hover:text-white md:text-lg"
          >
            <BiSolidMessageAltDetail />
            <span>Discussion Forum</span>
          </div>
          <div
            onClick={() => {
              setToggleSidebar(!toggleSidebar);
            }}
            className="flex cursor-pointer items-center gap-2 px-2 py-1 text-base hover:bg-black hover:bg-opacity-30 hover:text-white md:text-lg"
          >
            <FaMagnifyingGlassDollar />
            <span>Market Stories</span>
          </div>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                href="#"
                onClick={() => {
                  setToggleSidebar(!toggleSidebar);
                }}
                key={link.key}
                className="cursor-pointer px-8 py-1 text-base hover:bg-black hover:bg-opacity-30 hover:text-white md:text-lg"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          toggleSidebar
            ? "h-screen justify-center "
            : " -right-4 top-0 h-screen "
        } absolute flex h-16 items-center bg-transparent `}
      >
        {toggleSidebar ? (
          <div
            onClick={() => {
              setToggleSidebar(!toggleSidebar);
            }}
            className="z-50 flex h-16 cursor-pointer items-center justify-center rounded-r-md bg-blue-950"
          >
            <BiSolidRightArrow className="text-2xl text-white " />
          </div>
        ) : (
          <div
            onClick={() => {
              setToggleSidebar(!toggleSidebar);
            }}
            className="z-50 flex h-16 cursor-pointer items-center justify-center rounded-r-md bg-blue-950"
          >
            <BiSolidLeftArrow className="text-lg text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
