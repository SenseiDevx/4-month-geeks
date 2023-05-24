import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

const PokeItem = ({name}) => {
  const [pokemon, setPokemon] = useState({name: 'pokemon'})
  useEffect(() => {
    api.fetchPokemon(name)
    .then(res => setPokemon(res))   
  }, [])
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{height: '300px', backgroundColor: 'inherit', border: '2px solid #9c27b0', padding: '10px', color: 'inherit'}}>
        <Link to={`/pokemons/${name}`} title={`${name} details`} state={pokemon}>
          <CardMedia image={pokemon.imgUrl} title={name} sx={{height: '80%', backgroundSize: 'contain'}}/>
          <Typography  variant="h6" sx={{textAlign: 'center', padding: '10px', color: 'inherit'}} >{name}</Typography>   
        </Link>
      </Card>
    </Grid>
  )
}

export default PokeItem