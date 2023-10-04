/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";



const Login = () => {
  const[err, setErr] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const email = e.target[0].value;
    const password = e.target[1].value;

 
 const auth = getAuth();
try{
await 

 signInWithEmailAndPassword(auth,email,password)
navigate("/")
}catch(err){
  setErr(true);
  console.log(err);
}
    const error = err;
  };
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Pr Chat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="password" name="" id=""placeholder='Password' />
             
            <button>Log in</button>
            
            </form>
            {err && <span> Something went wrong {Error}
              
            </span> || !err && <span></span>}

            <p>You don't have an account? <Link style={{textDecoration:"none" , color:"#5d5b8d"}} to="/register">Register</Link> </p>
            </div>
        </div>
  )
}

export default Login