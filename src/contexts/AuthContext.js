/* global gapi */
import React, { createContext, useEffect, useState } from "react";
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_DOCS,
  SCOPE,
} from "../helpers/constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    // initialize client and handle load
    gapi.load("client:auth2", () => {
      gapi.auth2
        .init({ clientId: CLIENT_ID, scope: SCOPE })
        .then(() => {
          const auth = gapi.auth2.getAuthInstance();
          const signedIn = auth.isSignedIn.get();

          // handle load
          updateAuthStatus(signedIn);

          // listen for auth changes
          auth.isSignedIn.listen(() => updateAuthStatus(auth.isSignedIn.get()));
        })
        .catch((err) =>
          setAuthError({
            type: "init",
            message: "Uh, oh! Error initializing client: " + err.message,
          })
        );
    });
    // eslint-disable-next-line
  }, []);

  const updateAuthStatus = (signedIn) => {
    signedIn ? handleClientLoad() : setIsSignedIn(false);
  };

  const handleClientLoad = () => {
    gapi.client.setApiKey(API_KEY);
    gapi.client
      .load(DISCOVERY_DOCS)
      .then(() => setIsSignedIn(true))
      .catch((err) =>
        setAuthError({
          type: "init",
          message: "Uh, oh! Error loading client: " + err.message,
        })
      );
  };

  const handleSignIn = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(handleClientLoad)
      .catch((err) =>
        setAuthError({
          type: "signIn",
          message: "Uh, oh! Error signin in: " + err.message,
        })
      );
  };

  const handleSignOut = () => {
    gapi.auth2
      .getAuthInstance()
      .signOut()
      .then(() => setIsSignedIn(false))
      .catch((err) =>
        setAuthError({
          type: "signOut",
          message: "Uh, oh! Error signin out: " + err.message,
        })
      );
  };

  return (
    <AuthContext.Provider
      value={{ isSignedIn, handleSignIn, handleSignOut, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
