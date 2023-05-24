import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "./slices/pokemonsSlice";
import pokemonSlice from "./slices/pokemonSlice";
import busketSlice from "./slices/busketSlice";
export const store = configureStore({
  reducer: {
    pokemonsSlice,
    pokemonSlice,
    busketSlice
  },
});
