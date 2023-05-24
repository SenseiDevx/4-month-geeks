import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {Button} from "@mui/material";
import AboutPage from "./pages/AboutPage/AboutPage";
import CheckBoxPoki from "./pages/CheckBoxPoki/CheckBoxPoki";

function App() {
  const [ theme, setTheme ] = useState('light')


  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }

  return <>
    <div className={`app ${theme}`}>
      <Button onClick={toggleTheme} variant='contained' style={{margin: '15px auto ', alignItems: 'center', display: 'flex'}}>
        Change Theme
        <CatchingPokemonIcon/>
      </Button>
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/filter' element={<CheckBoxPoki/>} />
          <Route path="/about/:id" element={<AboutPage/>} />
        </Routes>
      </div>
    </div>
    </>
}

export default App;
