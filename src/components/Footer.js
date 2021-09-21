import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ReactComponent as Logout } from "./assets/logout.svg";

const Footer = () => {
  const { handleSignOut } = useContext(AuthContext);

  return (
    <footer className="w-full absolute bottom-0 flex justify-between items-center p-2 border-t border-primary-light text-xs">
      <div>
        <p>Created by Erwin Mendez</p>
        <p>2021 &copy; All rights reserved</p>
      </div>
      <button onClick={handleSignOut}>
        <Logout className="w-5 h-5 fill-current text-primary hover:text-primary-light transition" />
      </button>
    </footer>
  );
};

export default Footer;
