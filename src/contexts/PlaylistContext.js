import React, { createContext, useContext, useEffect, useState } from "react";
import { getPlaylists, getVideos } from "../api/youtube";
import { AuthContext } from "./AuthContext";

export const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const { isSignedIn } = useContext(AuthContext);
  const [playlists, setPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    isSignedIn && loadPlaylists();
  }, [isSignedIn]);

  // get playlists from local storage or api
  const loadPlaylists = async () => {
    const cached = localStorage.getItem("playlists");

    if (cached) {
      setPlaylists(JSON.parse(cached));
    } else {
      // get from api
      const result = await getPlaylists();
      setPlaylists(result);
    }
  };

  // get videos from local storage or api
  const loadVideos = async (currentPlaylist) => {
    const cached = JSON.parse(localStorage.getItem("videos"));

    if (cached && cached.playlistId === currentPlaylist) {
      setVideos(cached.videos);
    } else {
      // get from api
      const result = await getVideos(currentPlaylist);
      setVideos(result);
    }
  };

  const refreshPlaylists = () => {
    localStorage.clear();
    setVideos([]);
    loadPlaylists();
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        videos,
        loadVideos,
        refreshPlaylists,
        search,
        setSearch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
