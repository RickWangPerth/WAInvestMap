import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    isLogin: true,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { name, age, email } = action.payload;
      state.value = {
        name,
        age,
        email,
        isLogin: true,
      };
    },
    setLogout(state, action) {
      state.value = initialState;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;