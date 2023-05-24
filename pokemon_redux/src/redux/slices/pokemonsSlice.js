import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { link } from "../link";

const initialState = {
  pokemons: [],
  load: true,
  offset: 1
};

export const getPokemons = createAsyncThunk("getPoki", async (params) => {
  const { data } = await axios.get(link.URL, {params: params});
  return data;
});

const pokemonsSlice = createSlice({
  name: "pokemonsSlice",
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload
    }
  },
  extraReducers: (build) => {
    build
      .addCase(getPokemons.pending, (state) => {
        state.load = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.load = false;
      });
  },
});

export default pokemonsSlice.reducer;
export const {setOffset} = pokemonsSlice.actions;
export const pokiSelect = (state) => state.pokemonsSlice;
