import React, { useContext, useEffect, useState } from "react";
import { PlaylistContext } from "../contexts/PlaylistContext";
import logo from "./assets/logo.png";
import { ReactComponent as Search } from "./assets/search.svg";

const Header = () => {
  const { playlists, loadVideos, search, setSearch } =
    useContext(PlaylistContext);
  const [currentPlaylist, setCurrentPlaylist] = useState("");

  useEffect(() => {
    const selected = localStorage.getItem("selectedPlaylist");
    selected ? setCurrentPlaylist(selected) : setCurrentPlaylist("");
  }, [playlists]);

  useEffect(() => {
    if (currentPlaylist !== "") {
      loadVideos(currentPlaylist);

      // save value to local storage
      localStorage.setItem("selectedPlaylist", currentPlaylist);
    }
    // eslint-disable-next-line
  }, [currentPlaylist]);

  return (
    <header className="p-2 border-b border-primary-light flex items-center">
      <img src={logo} alt="YT Playlists" className="w-12" />
      <div className="relative flex flex-1 items-center mx-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-light rounded py-1 pl-2 pr-5 text-sm focus:outline-none focus:border-primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="h-4 w-4 absolute right-0 mr-1 fill-current text-gray-light" />
      </div>
      <select
        name="playlists"
        id="playlistSelector"
        className="border border-gray-light rounded p-1 text-sm text-gray-base bg-primary cursor-pointer outline-none "
        onChange={(e) => {
          setCurrentPlaylist(e.target.value);
          setSearch("");
        }}
        value={currentPlaylist}
      >
        <option value="" disabled hidden>
          Select Playlist...
        </option>
        {playlists.map(({ id, title }) => (
          <option value={id} key={id}>
            {title}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
