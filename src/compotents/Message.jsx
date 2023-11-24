/* eslint-disable no-unused-vars */

import React, { useState, useContext, useEffect, useRef } from "react";
import pic from "./pic.jpg";
import pic2 from "../assets/Omar.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const Message = ({ message }) => {
  const TextWithBreaks = ({ text, maxCharsPerLine }) => {
    const lines = [];
    let currentLine = "";

    // Split the text into lines
    for (let i = 0; i < text.length; i++) {
      currentLine += text[i];

      if (currentLine.length === maxCharsPerLine) {
        lines.push(currentLine);
        currentLine = "";
      }
    }

    // Add the remaining text as the last line
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    // Render each line with a <br> tag
    return (
      <div>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  };
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const Ref = useRef();
  useEffect(() => {
    Ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
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
        <p>
          {" "}
          <TextWithBreaks text={message.text} maxCharsPerLine={20} />
        </p>

        {message.img && (
          <>
            <img src={message.img} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
