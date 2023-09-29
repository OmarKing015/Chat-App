/* eslint-disable no-unused-vars */

import React from "react";
import pic from "./pic.jpg";
import pic2 from "../assets/Omar.jpg";


const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={pic} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hi</p>
        <img src={pic2} alt="" />
      </div>
    </div>
  );
};

export default Message;
