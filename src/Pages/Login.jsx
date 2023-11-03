// import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../components/css/login.css'

const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const closeBtn = () => {
    setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const url = 'https://remote-app-api-c4a491abd7bc.herokuapp.com/api/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.id > 0) {
          navigate("/home");
        } else {
          setErrorMessage("Login failed");
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
        }
      } else {
        setErrorMessage("Login failed");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("Login failed");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      console.error(error);
    }
  };

    

  return (
    <>
    <div className='background'>
      <div className="login-container">
        <h2 className="title">Login</h2>
        <form onSubmit={handleLogin}>

            <input 
            type="text" 
            placeholder="Email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
            />

            <input 
            type="password" 
            placeholder="Password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

            <button className="btn" type="submit">
              Login
            </button>

            <div className="link">
              <small>
                Don't have an account? <Link to="/register">Sign up here</Link>
              </small> 
            </div>
        </form>
        <div className="error-message">{errorMessage}</div>
        <div className="success-message">{successMessage}</div>
      </div>
    </div> 
    </>
  );
};


export default Login