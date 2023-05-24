import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import styles from "./pokemonCard.css"

const PokemonCard = ({ pokemon }) => {
    const [info, setInfo] = useState('')
    const [load, setLoad] = useState(true)

  useEffect(() => {
      setLoad(true)
    fetch(pokemon.url)
        .then(res => res.json())
        .then(data => setInfo(data))
        .finally(() => setLoad(false))
  }, [])

  return <>
      {
          !load
          ?
          <>
          <Link to={`/about/${pokemon?.name}`}>
              <div className='pokemonCard'>
                  <h2 className='namePokemon' style ={{textAlign: 'center'}}>{pokemon.name.toUpperCase()}</h2>
                      <div className='images' style={{width: 'max-content', height: 'max-content', margin: '150px auto 0'}}>
                          <div className='ray'></div>
                          <img style={{width: 150, height: 150}} src={info?.sprites?.other?.dream_world?.front_default} alt="#"/>
                      </div>
              </div>
          </Link>

          </>
          :
          <div>
              <CircularProgress/>
          </div>
      }
  </>
}

export default PokemonCard