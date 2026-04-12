import React, { useState } from 'react'
import { API } from '../api'
import { useNavigate } from "react-router-dom";

function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [msg,setMsg]=useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (e)=>{
    e.preventDefault();

    // Validation
    if(!name || !email || !pass){
      setMsg("Please fill all fields");
      return;
    }

    if(pass.length < 6){
      setMsg("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await API.post("/register", {
        name,
        email,
        password: pass
      });

      setMsg(res.data.message);

      if(res.data.message === "Registration successful"){
        setName("");
        setEmail("");
        setPass("");
        setTimeout(() => navigate("/"), 2000);
      }

    } catch (error) {
      if(error.response?.data?.message){
        setMsg(error.response.data.message);
      } else {
        setMsg("Registration failed. Please try again.");
      }
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='log'>
      <div className='boxlog'>
        <form onSubmit={register}>
          <h2>Register</h2>

          <input 
            placeholder="Name" 
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            required
          />
          <input 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Password (min 6 chars)" 
            value={pass}
            onChange={(e)=>setPass(e.target.value)} 
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <p style={{color: msg.includes("successful") ? "green" : "red"}}>
            {msg}
          </p>

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