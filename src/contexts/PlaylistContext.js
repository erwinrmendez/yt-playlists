import React, { createContext, useContext, useEffect, useState } from "react";
import { getPlaylists } from "../api/youtube";
import { AuthContext } from "./AuthContext";

export const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const { isSignedIn } = useContext(AuthContext);
  const [playlists, setPlaylists] = useState([]);
  // const [videos, setVideos] = useState();

  useEffect(() => {
    isSignedIn && loadPlaylists();
  }, [isSignedIn]);

  const loadPlaylists = async () => {
    let items = [];
    const result = await getPlaylists();

    if (result) {
      result.forEach((element) => {
        items.push({ id: element.id, title: element.snippet.title });
      });
    }

    setPlaylists(items);
  };

  return (
    <PlaylistContext.Provider value={{ playlists }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
