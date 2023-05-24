import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button } from "@mui/material";
import styles from '../CheckBoxPoki/checkBox.module.css'
import AboutPage from "../AboutPage/AboutPage";
function CheckBoxPoki(pokemon) {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate()
  const [pokiList, setPokiList] = useState([])
  const [ info, setInfo ] = useState('')
  const [selectedGenerations, setSelectedGenerations] = useState({
    1: true, // Поколение 1
    2: true, // Поколение 2
    3: true, // Поколение 3
    4: true, // Поколение 4
    5: true, // Поколение 5
    6: true, // Поколение 6
    7: true, // Поколение 7
    8: true, // Поколение 8
  });

  const back = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/1")
      .then((response) => response.json())
      .then((data) => {
        // Отфильтровываем покемонов по выбранным поколениям
        const filteredPokemon = data.pokemon.filter((pokemon) => {
          const generation = getPokemonGeneration(pokemon.pokemon.url);
          return selectedGenerations[generation];
        });
        setPokemonList(filteredPokemon);
      })
      .catch((error) => console.error(error));
  }, [selectedGenerations]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(pok => setPokiList(pok.results))
  }, [])

  // Получаем номер поколения для определенного покемона
  const getPokemonGeneration = (pokemonUrl) => {
    const urlParts = pokemonUrl.split("/");
    const pokemonId = urlParts[urlParts.length - 2];
    if (pokemonId <= 151) {
      return 1;
    } else if (pokemonId <= 251) {
      return 2;
    } else if (pokemonId <= 386) {
      return 3;
    } else if (pokemonId <= 493) {
      return 4;
    } else if (pokemonId <= 649) {
      return 5;
    } else if (pokemonId <= 721) {
      return 6;
    } else if (pokemonId <= 809) {
      return 7;
    } else {
      return 8;
    }
  };

  // Обновляем состояние выбранных поколений при клике на checkbox
  const handleGenerationChange = (event) => {
    const { name, checked } = event.target;
    setSelectedGenerations((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  useEffect(() => {
    fetch(pokemon.url)
        .then(response => response.json())
        .then(data => setInfo(data))
  }, [])

  return (
    <div>
      <Button variant='contained' onClick={back}>Back</Button>
      <h1>Pokemon List</h1>
      <div>
        {Object.keys(selectedGenerations).map((generation) => (
          <label className={styles.checkBox} key={generation}>
            <div>
              <input
                  type="checkbox"
                  name={generation}
                  checked={selectedGenerations[generation]}
                  onChange={handleGenerationChange}
              />
                {`Pokemon Types ${generation}`}
            </div>
          </label>
        ))}
      </div>
      <Link to={`/about/${pokemon?.name}`}>
        <ul className={styles.ul}>
            {pokemonList.map((pokemon) => (
              <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
            ))}
        </ul>
      </Link>
    </div>
  );
}

export default CheckBoxPoki;