import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/UserSlice";

export const Navbar = () => {
  const [username, setUsername] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="list">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </div>

      <div className="username">{username}</div>
    </div>
  );
};

export default Navbar
