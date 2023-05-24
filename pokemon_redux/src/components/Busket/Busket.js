import React, {useEffect, useState} from 'react';
import style from './css/busket.module.css'
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/slices/busketSlice";
import {Box, Button, Typography} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const Busket = () => {
  const {busket} = useSelector(busketSelect)
  const navigate = useNavigate()

  const [img, setImg] = useState('')
  const getImg = async () => {
    const {data} = await axios.get(busket[0].url)
    return setImg(data.sprites?.other?.dream_world?.front_default)
  }
  const back = () => navigate(-1)


  useEffect(() => {
    getImg()
    console.log(busket)
  }, [busket?.url])
  return (
    <div>
      <Button onClick={back} variant='contained'>Back</Button>
      {
        busket.map(i => <li className={style.li}>
          <Box>
            <NavLink to={`/about/${i?.name}`}>
              <Box className={style.img}>
                <Box component='img' src={img} alt={i?.name}/>
              </Box>
              <Typography>{i?.name}</Typography>
            </NavLink>
          </Box>
        </li>)
      }
    </div>
  );
};

export default Busket;