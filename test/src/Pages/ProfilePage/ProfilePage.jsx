import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/UserSlice";
import { Navigate } from "react-router-dom";
import "./styles.css";
import { ROUTES } from "../../routes/routes";

export const ProfilePage = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate replace to={ROUTES.LOGIN_PAGE} />;
  }
  return (
    <div className="profile">
      <Navbar />
      <div className="user-info">
        <div className="user-info-title">User Profile</div>
        <div className="user-info-name">
          <div>Username:</div>
          <div>{user.username}</div>
        </div>
        <div className="user-info-password">
          <div>Password:</div>
          <div>{user.password}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
