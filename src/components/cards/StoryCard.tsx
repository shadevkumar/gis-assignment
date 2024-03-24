import Image from "next/image";
import React from "react";
interface Story {
  image: string;
  title: string;
  story: string;
}
const StoryCard = ({ image, title, story }: Story) => {
  return (
    <div className="m-4 flex cursor-pointer flex-col items-center gap-2 rounded-xl  px-4 py-2 shadow-lg hover:shadow-xl max-lg:w-[60%] max-md:w-[70%] max-sm:max-w-96 xl:w-72">
      <div className="flex  w-full items-center justify-center overflow-hidden rounded-md ">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          priority={true}
          className="rounded-md xl:w-72 "
        />
      </div>
      <div className="flex flex-col  gap-2 ">
        <span className="text-base font-semibold">{title}</span>
        <span className="w-[80%] max-sm:w-full lg:w-full">
          <p className="text-sm md:text-sm ">{story}</p>
        </span>
      </div>
    </div>
  );
};

export default StoryCard;
