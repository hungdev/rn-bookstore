import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user1',
  initialState: {
    name: '',
    hobbies: [],
    isLogged: false,
  },
  reducers: {
    setName: (state, action) => {
      console.log('state', state);
      console.log('action', action);
      state.name = action.payload;
    },
    addHobby: (state, action) => {
      console.log('state', state);
      console.log('action', action);
      state.hobbies = [...state.hobbies, action.payload];
    },
    setLogin: (state, action) => {
      state.isLogged = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setName, addHobby, setLogin} = userSlice.actions;

export default userSlice.reducer;
