import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      return data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      return data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
