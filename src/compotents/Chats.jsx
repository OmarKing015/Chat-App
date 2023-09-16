/* eslint-disable no-unused-vars */

import React from "react";
import pic from "./pic.jpg";
const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={pic} alt="" />
        <div className="userChatinfo">
          <span>Omar</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
