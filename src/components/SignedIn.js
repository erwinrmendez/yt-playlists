import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

const SignedIn = () => {
  const { authError } = useContext(AuthContext);

  return (
    <>
      <Header />
      {authError && <div>{authError.message}</div>}
      <List />
      <Footer />
    </>
  );
};

export default SignedIn;
