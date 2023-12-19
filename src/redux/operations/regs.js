import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const authed = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(axios.defaults.headers.common.Authorization);
};
const cleared = token => {
  axios.defaults.headers.common.Authorization = ``;
  console.log(axios.defaults.headers.common.Authorization);
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      authed(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      authed(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    cleared();
    this.state.isLogged = false;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().regs.token;
      if (!tokenLS) {
        return thunkAPI.rejectWithValue('No token');
      }
      authed(tokenLS);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      password: '',
    },
    token: null,
    isLogged: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
        console.log(state);
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
        console.log(state);
      })
      .addCase(login.rejected, (state, action) => state)
      .addCase(logout.rejected, (state, action) => {
        state.user = { name: '', email: '', password: '' };
        state.token = null;
        state.isLogged = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      }),
});
export const getIsLogged = state => state.regs.isLogged;
export const getUser = state => state.regs.user;
