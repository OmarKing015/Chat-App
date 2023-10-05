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

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handelSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
 
  return (
    <div className="chats">
       {Object.entries(chats).map((chat) => (
             

        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handelSelect(chat[1].userInfo)}
        >
          {/* {console.log(chat.lastMesage.text)}  */}
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatinfo">
            <span>{chat[1].userInfo.displayName}</span>
            {/* <p>{chat[1].lastMessage.text}</p> */}
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
