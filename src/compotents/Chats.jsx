/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
import pic from "./pic.jpg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [ls, setLs] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
   

    // console.log(ls);

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handelSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date -a[1]).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handelSelect(chat[1].userInfo)}
        >

          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatinfo">
            <span>{chat[1].userInfo.displayName}</span>
            {chat[1].lastMessage ? (
              <p> {chat[1].lastMessage.text}</p>
            ) : (
              <p>START CHATING WITH {chat[1].userInfo.displayName}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
