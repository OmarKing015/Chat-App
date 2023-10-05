/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import pic from "./pic.jpg";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  const { currentUser } = useContext(AuthContext);
  const handelSearch = async (e) => {
    e.preventDefault();

    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  const handelKey = (e) => {
    e.code === "Enter"  && handelSearch();
  };

  const handelSelect = async () => {
    //checking firestore chats
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create chats
        console.log("Done");
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },

          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },

          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
    }
    setUser(null);
    setUsername("")
  };
  return (
    <div className="search">
      <div className="searchForm">
        <form onSubmit={handelSearch}>
        <input
          type="text"
          name=""
          id=""
         value={username}
          onKeyDown={handelKey}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Find User"
        />
        <button type="submit" className="mobuser">Search</button></form>
      </div>
      {user && (
        <div className="userChat" onClick={handelSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatinfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
