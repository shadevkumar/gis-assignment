import React from "react";

const StoryCard = () => {
  return (
    <div className="bg-slate-200 flex flex-col gap-2 m-4 px-4 py-2 rounded-xl ">
      <div className="w-full md:h-32 bg-blue-700"></div>
      <span>Story Title</span>
      <span>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          sequi minus magni molestiae
        </p>
      </span>
    </div>
  );
};

export default StoryCard;
