import React, {useEffect} from 'react'
import style from './css/aboutPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPokemon, pokSelect} from "../../redux/slices/pokemonSlice";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, CircularProgress} from "@mui/material";
const AboutPage = () => {
  const dispatch = useDispatch()
  const {pokemon, load} = useSelector(pokSelect)
  const {id} = useParams()
  const navigate = useNavigate()
  const back = () => navigate(-1)


  useEffect(() => {
    dispatch(getPokemon(id))
  }, [dispatch, id])
  return (
    <div>
      <div className="container">
        <h2>AboutPage</h2>
        {
          load
          ?
          <Box className={style.about}>
            <Button variant='outlined' onClick={back}>Back</Button>
            <h2 >{pokemon?.name}</h2>
            <Box className={style.imgs}>
              <Box>
                <Box component='img' src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}/>
              </Box>
              <Box>
                <Box component='img' src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name}/>
              </Box>
              <Box>
                <Box component='img' src={pokemon?.sprites?.other?.home?.front_shiny} alt={pokemon?.name}/>
              </Box>
            </Box>
          </Box>
          :
          <Box>
            <CircularProgress color='primary'/>
          </Box>
        }
      </div>
    </div>
  )
}

export default AboutPage;