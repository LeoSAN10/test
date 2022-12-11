import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { ROUTES } from "../../routes/routes";

export const LoginPage = () => {
  const navigate = useNavigate();
  const trueUsername = "Admin";
  const truePassword = "12345678";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === trueUsername && password === truePassword) {
      dispatch(
        login({
          username: username,
          password: password,
          loggedIn: true,
        })
      );
      setError("");
      navigate(ROUTES.PROFILE_PAGE);
    } else {
      setError("Username or Password is incorrect");
    }
  };

  return (
    <div className="login">
      <Navbar />
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <p className="error-message">{error}</p>
          <button type="submit" className="submit_btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
