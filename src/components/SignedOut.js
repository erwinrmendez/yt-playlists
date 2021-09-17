import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import logo from "./assets/logo.png";

const SignedOut = () => {
  const { handleSignIn, authError } = useContext(AuthContext);

  return (
    <div className="container h-full flex flex-col justify-center items-center">
      <img src={logo} alt="YT Playlists" className="w-20 mb-1 -mt-8" />
      {authError?.type === "signIn" && (
        <div className="px-6 text-xs text-center text-error my-2" role="alert">
          {authError.message}
        </div>
      )}
      <button
        onClick={handleSignIn}
        className="bg-primary text-gray-base py-2 px-4 mt-1 rounded hover:bg-primary-light transition"
      >
        Log In With Google
      </button>
    </div>
  );
};

export default SignedOut;
