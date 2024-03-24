const ShimmerStoryCard = () => {
  return (
    <div className="m-4 flex cursor-pointer flex-col items-center gap-2 rounded-xl  bg-slate-100 px-4 py-2 shadow-lg max-lg:w-[60%] max-md:w-[70%] max-sm:max-w-96 xl:w-72">
      <div className="flex h-36 w-full animate-pulse  items-center justify-center overflow-hidden rounded-md bg-slate-300 "></div>
      <div className="flex h-28  flex-col gap-2 "></div>
    </div>
  );
};

export default ShimmerStoryCard;
