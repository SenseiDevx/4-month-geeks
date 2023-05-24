import React from 'react';
import style from './css/header.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {List, ListItem} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/slices/busketSlice";

export default function Header() {
  const {busket} = useSelector(busketSelect)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <List className={style.ul}>
            <ListItem>
              <NavLink to={'/'}>
                  Home
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/busket'}>
                  Busket  {!!busket && busket.length}
              </NavLink>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}