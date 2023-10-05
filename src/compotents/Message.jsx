/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import pic from "./pic.jpg";
import pic2 from "../assets/Omar.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";


const Message = ({message}) => {

  const {curruntUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);






  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img src={pic} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hi</p>
        <img src={pic2} alt="" />
      </div> */}
    </div>
  );
};

export default Message;
