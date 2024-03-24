const ShimmerPostCard = () => {
  return (
    <div className="mx-12 my-2 hidden w-[90vw] flex-col rounded-md bg-slate-100 px-1 py-2 shadow-lg lg:flex lg:w-[50vw]">
      <div className="shimmer animate-pulse px-9 py-1">
        <div className="shimmer h-4 w-full animate-pulse rounded bg-gray-300"></div>
        <div className="shimmer  mt-2 h-4 w-full animate-pulse rounded bg-gray-300"></div>
        <div className="shimmer mt-2 h-4 w-full animate-pulse rounded bg-gray-300"></div>
      </div>
      <div className="flex animate-pulse gap-4 px-9">
        <div className="flex animate-pulse items-center gap-2">
          <div className="shimmer h-6 w-6 animate-pulse rounded-full bg-gray-300"></div>
          <div className="shimmer h-4 w-8 animate-pulse bg-gray-300"></div>
        </div>
        <div className="flex animate-pulse items-center gap-2">
          <div className="shimmer h-6 w-6 animate-pulse rounded-full bg-gray-300"></div>
          <div className="shimmer h-4 w-8 animate-pulse bg-gray-300"></div>
        </div>
        <div className="flex animate-pulse items-center gap-2">
          <div className="shimmer h-6 w-6 animate-pulse rounded-full bg-gray-300"></div>
          <div className="shimmer h-4 w-12 animate-pulse bg-gray-300"></div>
        </div>
        <div className="flex animate-pulse items-center gap-2">
          <div className="shimmer h-6 w-6 animate-pulse rounded-full bg-gray-300"></div>
          <div className="shimmer h-4 w-8 animate-pulse bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerPostCard;
