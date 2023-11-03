import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === "user" && password === "admin") {
              onLogin();
            } else {
              setError("Invalid username or password*");
            }
  };

 
  return (
    <>
    <div className="">
          <label htmlFor="username">E-Mail</label>
          <input 
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label  htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error-message">{error}</p>}

    </>
  );
};

export default Login;
