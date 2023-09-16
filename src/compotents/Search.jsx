/* eslint-disable no-unused-vars */
import React from "react";
import pic from "./pic.jpg";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" name="" id="" placeholder="Find User" />
      </div>
      <div className="userChat">
        <img src={pic} alt="" />
        <div className="userChatinfo">
          <span>Omar</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
