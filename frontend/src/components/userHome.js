import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/userSlice";
import { getToken } from "./tools/getToken";

const Userhome = () => {
  const [refreshToken, setRefreshToken] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.profile);


  useEffect(() => {
    getToken('refreshToken').then((token) => {
      setRefreshToken(token);
    });
  }, []);

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      {refreshToken && <p>Refresh Token: {refreshToken}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Userhome;

