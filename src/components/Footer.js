import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { PlaylistContext } from "../contexts/PlaylistContext";
import { ReactComponent as Logout } from "./assets/logout.svg";
import { ReactComponent as Refresh } from "./assets/refresh.svg";

const Footer = () => {
  const { handleSignOut } = useContext(AuthContext);
  const { refreshPlaylists } = useContext(PlaylistContext);

  return (
    <footer className="w-full absolute bottom-0 flex items-center p-2 border-t border-primary-light text-xs">
      <div className="flex-1">
        <p>Created by Erwin Mendez</p>
        <p>2021 &copy; All rights reserved</p>
      </div>
      <button
        onClick={refreshPlaylists}
        className="mr-3 tooltip"
        data-tooltip="Refresh Playlists"
      >
        <Refresh className="w-5 h-5 fill-current text-primary hover:text-primary-light transition" />
      </button>
      <button onClick={handleSignOut} className="tooltip" data-tooltip="Logout">
        <Logout className="w-5 h-5 fill-current text-primary hover:text-primary-light transition" />
      </button>
    </footer>
  );
};

export default Footer;
