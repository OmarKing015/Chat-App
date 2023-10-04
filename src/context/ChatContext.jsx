import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useReducer } from "react";
import { createContext, useState } from "react";
import { auth } from "../firebase";
export const ChatContext = createContext();
const { currentUser } = useContext(AuthContext);
export const ChatContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chhatReduser = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatID:
            currentUser.uid > user.uid
              ? currentUser.uid + user.uid
              : user.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  return (
    <ChatContext.Provider value={{ currentUser }}>
      {children}
    </ChatContext.Provider>
  );
};
