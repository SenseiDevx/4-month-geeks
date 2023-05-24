import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  busket: []
}

const busketSlice = createSlice({
  name: 'busketSlice',
  initialState,
  reducers: {
    setBusket: (state, action) => {
      state.busket.push(action.payload)
    }
  }
})

export default busketSlice.reducer;
export const {setBusket} = busketSlice.actions;
export const busketSelect = state => state.busketSlice;