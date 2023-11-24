/* eslint-disable no-unused-vars */

import React, {useState, useContext, useEffect, useRef } from "react";
import pic from "./pic.jpg";
import pic2 from "../assets/Omar.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const Message = ({ message }) => {
 //How to download files from firebase?

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
const Ref= useRef();
useEffect(()=>{
  Ref.current?.scrollIntoView({behavior:"smooth"})
},[message])
  return (
    <div ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* {message.date && <span>{message.date}</span>} */}
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img &&<><img src={message.img} alt="" /></> }
  
       
        
      </div>
    </div>
  );
};

export default Message;
