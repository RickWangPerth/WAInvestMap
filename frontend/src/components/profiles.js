import React from "react";
import { useSelector } from "react-redux";
import  Login from "./login";
import  Userhome  from "./userHome";

const Profile = () => {
  const state = useSelector((state) => state.user);
  console.log(state.profile)
  return (
    <div>
      {state.profile.isLogin ? <Userhome /> : <Login />}
    </div>
  );
};
export default Profile;