import React, { useContext, useEffect, useState } from "react";
import { PlaylistContext } from "../contexts/PlaylistContext";
import VideoCard from "./VideoCard";

const List = () => {
  const { videos } = useContext(PlaylistContext);
  const [count, setCount] = useState(videos.length);

  useEffect(() => {
    setCount(videos.length);
  }, [videos]);

  return (
    <div className="list-videos">
      {count === 0 ? (
        <div className="text-center text-sm py-6">
          There are no videos to show here.
        </div>
      ) : (
        <>
          <div className="text-xs text-primary-light mb-2 text-right">
            {count === 1 ? "1 video" : count + " videos"}
          </div>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </>
      )}
    </div>
  );
};

export default List;
