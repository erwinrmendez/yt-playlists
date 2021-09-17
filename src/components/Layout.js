import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Layout = () => {
  const { isSignedIn } = useContext(AuthContext);

  if (isSignedIn === null) {
    return <div />;
  }

  return isSignedIn ? <SignedIn /> : <SignedOut />;
};

export default Layout;
