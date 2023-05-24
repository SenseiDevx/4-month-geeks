import React, { useEffect, useState } from 'react'
import {Box, Button, Typography} from '@mui/material';
import style from './pokemonCard.module.css'
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBusket} from "../../redux/slices/busketSlice";

const PokemonCard = ({i, key}) => {
  const dispatch = useDispatch()
  const [img, setImg] = useState('')
  const [dis, setDis] = useState(false)

  const getImg = async () => {
    const {data} = await axios.get(i?.url)
    return setImg(data.sprites?.other?.dream_world?.front_default)
  }

  const getBusket = () => {
    dispatch(setBusket(i))
    setDis(true)
  }


  useEffect(() => {
    getImg()
  }, [i?.url])
  return (
    <li key={key} className={style.li}>
      <Box>
        <NavLink to={`/about/${i?.name}`}>
          <Box className={style.img}>
            <Box component='img' src={img} alt={i?.name}/>
          </Box>
          <Typography>{i?.name}</Typography>
        </NavLink>
      </Box>
      <Box className={style.btn}>
        <Button disabled={dis} onClick={getBusket} variant='outlined'>Busket</Button>
      </Box>
    </li>
  )
}

export default PokemonCard;