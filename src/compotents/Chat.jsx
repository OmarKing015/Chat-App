/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Cam from "../assets/cam.png";
import Messages from "./Messages";
import Input from "./Input";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
export const Chat = () => {
  const { currentUser } = useContext(AuthContext );
  const { dispatch } = useContext(ChatContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
      
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
