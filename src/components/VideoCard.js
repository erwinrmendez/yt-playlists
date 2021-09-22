import React from "react";

const VideoCard = ({ video }) => {
  const handleClick = () => {
    window.location.href = video.url;
  };

  return (
    <div
      className="grid gap-2 grid-cols-4 border-b border-gray-dark p-1 hover:bg-gray-light cursor-pointer"
      onClick={handleClick}
    >
      <div className="col-span-1 flex justify-center items-center">
        <img src={video.thumbnail.url} alt={video.title} />
      </div>
      <div className="col-span-3">
        <h6 className="mb-2 text-sm font-bold leading-5">{video.title}</h6>
        <p className="text-xs">{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
