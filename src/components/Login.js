import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/register/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/');
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        {loginError && <p className="error-message">{loginError}</p>}
        <button type="submit">
          Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default Login;
