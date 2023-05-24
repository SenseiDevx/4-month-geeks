import React, { useState, useEffect } from 'react'
import { Button, Typography } from "@mui/material";
import {fetchPokemonS, fetchPokemons} from "../../api/fetchPokemons";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import styles from "./mainPage.module.css"
import {Link} from "react-router-dom";


const MainPage = () => {
    const [ pokemonList, setPokemonList ] = useState([]);
    const [ page, setPage] = useState(0)
    const [ count, setCount] = useState(1)



    let limit = 10

    const next = () => {
        setPage(page + 10)
        setCount(count + 1)
    }

    const back = () => {
        if (page === 1){
            setPage(1)
            setCount(1)
        }else {
            setPage(pr => pr - 10)
            setCount(count -  1)
        }
    }

    useEffect(() => {
        fetchPokemons(limit, page)
            .then((pokeList) => setPokemonList(pokeList.results));
    }, [page])
    console.log(pokemonList, 'pokemon list state');


    return <>
        <div>
            <div className="container">
                <div className="buttons" style={{display: "flex", width: 'max-content', height: 'max-content', margin: '25px auto 0'}}>
                    <Button variant='contained' onClick={back}>back</Button>
                    <Typography variant='h2'>{count} / 128</Typography>
                    <Button variant='contained' onClick={next}>Next</Button>
                </div>
                <Link to='/filter'>
                    <Button variant='contained'>filter</Button>
                </Link>
                <div className="pokemonList">
                    {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
                </div>
                <div style={{display: "flex", width: 'max-content', height: 'max-content', margin: '25px auto 0'}}>
                    <Button className="buttons" variant='contained' onClick={back}>back</Button>
                    <Typography variant='h2'>{count} / 128</Typography>
                    <Button variant='contained' onClick={next}>Next</Button>
                </div>
            </div>
        </div>
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.704022644954!2d74.6161549148175!3d42.879090910158816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1680782011988!5m2!1sru!2skg"
                width="400" height="250" style={{border: 0, borderRadius: 20, textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
};

export default MainPage;