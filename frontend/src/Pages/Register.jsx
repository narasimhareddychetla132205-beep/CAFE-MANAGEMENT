import React, { useState } from 'react'
import { API } from '../api'
import { useNavigate } from "react-router-dom";

function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [msg,setMsg]=useState("");

  const navigate = useNavigate();

  const register = async (e)=>{
    e.preventDefault();

    try {
      const res = await API.post("/register", {
        name,
        email,
        password: pass
      });

      setMsg(res.data.message);

      if(res.data.message === "Registration successful"){
        navigate("/");
      }

    } catch {
      setMsg("Server error");
    }
  }

  return (
    <div className='log'>
      <div className='boxlog'>
        <form onSubmit={register}>
          <h2>Register</h2>

          <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
          <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />

          <button type="submit">Register</button>

          <p>{msg}</p>

          {/* ✅ NEW BUTTON */}
          <button 
            type="button" 
            onClick={() => navigate("/")}
            style={{marginTop: "10px"}}
          >
            Go to Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Register;