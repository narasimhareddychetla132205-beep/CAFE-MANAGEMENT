import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { API } from '../api';

function Login() {

  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [error,setError] = useState("");

  const navigate = useNavigate();

  const valid = async (e) => {
    e.preventDefault();

    if(email === "" || pass === ""){
      setError("Please enter email and password");
    }
    else{
      try {
        const res = await API.post("/login", {
          email,
          password: pass
        });

        if(res.data.token){
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        } else {
          setError(res.data.message);
        }

      } catch {
        setError("Server error");
      }
    }
  }

  return (
    <div className='log'>
        <div className='boxlog'>
      <form className="form" onSubmit={valid}>
        <fieldset>
          <h2>Login Form</h2>

          <input type='email' placeholder='Enter Email'
            onChange={(e)=>setEmail(e.target.value)} />

          <input type='password' placeholder='Enter Password'
            onChange={(e)=>setPass(e.target.value)} />

          <button type='submit'>Login</button>

          <p>{error}</p>

          <p>New user? <Link to="/register">Register</Link></p>

        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default Login