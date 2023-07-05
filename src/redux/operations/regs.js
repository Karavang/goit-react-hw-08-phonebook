import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const authed = token => {
//   axios.defaults.headers.common.Authorization = `bearer ${token}`;
// };
// const cleared = token => {
//   axios.defaults.headers.common.Authorization = ``;
// };
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'reg',
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
      .addCase(register.rejected, (state, action) => state),
});
export const getIsLogged = state => console.log(state);
