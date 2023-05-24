import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {link} from "../link";

const initialState = {
  pokemon: {},
  load: false
}

export const getPokemon = createAsyncThunk('pokemon', async (id) => {
  const {data} = await axios.get(link.URL + id)
  return data;
})

const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.load = false
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload
        state.load = true
      })
  }
})

export default pokemonSlice.reducer;
export const pokSelect = state => state.pokemonSlice;