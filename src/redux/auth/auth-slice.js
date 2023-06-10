const { createSlice } = require('@reduxjs/toolkit');
const { register, login } = require('./auth-operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogenIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogenIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogenIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
