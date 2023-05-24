import React, { useEffect } from "react";
import style from "./css/mainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { Box, CircularProgress, Pagination } from "@mui/material";
import {
  getPokemons,
  pokiSelect,
  setOffset,
} from "../../redux/slices/pokemonsSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { pokemons, load, offset } = useSelector(pokiSelect);
  const limit = 16;

  useEffect(() => {
    dispatch(
      getPokemons({
        limit,
        offset,
      })
    );
  }, [dispatch, limit, offset]);
  return (
    <div className={style.main}>
      <Box className="container">
        <h1>Pokemons</h1>
        <ul className={style.ul}>
          {!load ? (
            pokemons?.results?.map((i) => <PokemonCard key={i?.name} i={i} />)
          ) : (
            <>
              <Box className={style.load}>
                <CircularProgress />
              </Box>
            </>
          )}
        </ul>
        {pokemons.count >= limit && (
          <Box className={style.pagination}>
            <Pagination
              onChange={(_, p) => dispatch(setOffset((p - 1) * limit))}
              page={offset / limit + 1}
              count={Math.ceil(pokemons?.count / limit)}
              color="secondary"
            />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default MainPage;
