import React from "react";
import { useSelector } from "react-redux";
import  Login from "./login";
import { Home } from "./home";
const Profile = () => {
  const state = useSelector((state) => state.user);
  return (
    <div>
      <h1>Profile Info</h1>
      {state.profile.isLogin ? <Home /> : <Login />}
    </div>
  );
};
export default Profile;