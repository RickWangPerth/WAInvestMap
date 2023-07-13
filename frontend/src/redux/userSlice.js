import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",
    email: "",
    password: "",
    accessToken: "",
    refreshToken: "",
    isLogin: false,
  },
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { name, password, email, accessToken, refreshToken } = action.payload;
      state.profile = {
        name,
        password,
        email,
        accessToken,
        refreshToken,
        isLogin: true,
      };
      console.log(state.profile);
    },
    setLogout(state) {
        state.profile = initialState;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;