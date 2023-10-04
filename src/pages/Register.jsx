/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Add from "../assets/addAvatar.png";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { db, app, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
const Register = () => {
const navigate = useNavigate()
  const[err, setErr] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    const auth = getAuth();
   try{
    const res = await createUserWithEmailAndPassword(auth, email, password)

    const storage = getStorage();
    const storageRef = ref(storage, displayName);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
   
    uploadTask.on('state_changed', 
      (snapshot) => {
       
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        setErr(true);
      }, 
      () => {
       
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user,{
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid),{
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          console.log("done");




          await setDoc(doc(db, "userChats", res.user.uid),{})
          navigate("/");
        });

      }
    );



    
   }catch(err){
    console.log(err)
    setErr(true);
   }
     
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">PR Chat</span>
        <span className="title">Register</span>
        <form id="sginupform" onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="Display name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button onClick={() => setErr() }>Sign Up</button>
          {err && <span> Something went wrong </span> || !err && <span></span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
