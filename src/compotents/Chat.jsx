/* eslint-disable no-unused-vars */

import React from "react";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Cam from "../assets/cam.png";
import Messages from "./Messages";
import Input from "./Input";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
      
        <span>Omar</span>
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
