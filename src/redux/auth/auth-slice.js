const { createSlice } = require('@reduxjs/toolkit');
const {
  register,
  login,
  logout,
  fetchCurrentUser,
} = require('./auth-operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const registerFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const loginFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logoutFulfieldeReducer = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const fetchCurrentUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(login.fulfilled, loginFulfilledReducer)
      .addCase(logout.fulfilled, logoutFulfieldeReducer)
      .addCase(
        fetchCurrentUser.fulfilled,
        fetchCurrentUserFulfilledReducer
      ),
});

export const authReducer = authSlice.reducer;
