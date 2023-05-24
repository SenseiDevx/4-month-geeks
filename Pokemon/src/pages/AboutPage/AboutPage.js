import React, {useEffect, useState} from 'react'
import {fetchPokemon} from "../../api/fetchPokemons";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, CircularProgress, Typography} from "@mui/material";
import styles from "./aboutPage.module.css"

const AboutPage = () => {
    const [poki, setPoki] = useState({})
    const {id} = useParams()
    const navi = useNavigate()

    const back = () => {
        navi(-1)
    }

    const [ load, setLoad] = useState(true)


    useEffect(() => {
        fetchPokemon(id)
            .then(pok => setPoki(pok))
            .finally(() => setLoad(false))
    }, [id])
    return <>
        {
            !load
            ?
                <>
                    <div className={styles.allInfo}>
                        <div className={styles.flex}>
                            <Link style={{textDecoration: 'none'}} to={'/'}>
                                <h2 className={styles.h2}>HOME</h2>
                                <Button onClick={back} variant='contained'>back</Button>
                            </Link>
                        </div>
                        <div className={styles.typography}>
                            <Typography className={styles.main} style={{fontSize: '30'}} variant='h2'>{poki?.name.toUpperCase()}</Typography>
                            <div className={styles.pokemonInfo}>
                                <h2>Pokemon Weight: <div>{poki?.weight}</div></h2>
                                <h2>Pokemon Height: <div>{poki?.height}</div></h2>
                                <h2>Pokemon Base Experience: <div>{poki?.base_experience}</div></h2>
                                <h2>Pokemon Hit Points: <div>{poki?.stats[0]?.base_stat}</div></h2>
                                <h2>Pokemon Attach: <div>{poki?.stats[1]?.base_stat}  </div></h2>
                            </div>
                            <div className={styles.tridPoki}>
                                <img className={styles.mainImg} src={poki?.sprites?.other?.dream_world?.front_default} alt="pokemon"/>
                                <img className={styles.mainImg} src={poki?.sprites?.other?.home?.front_default} alt="pokemon"/>
                                <div className={styles.twoPoki}>
                                    <img src={poki?.sprites?.back_default} alt="pokemon"/>
                                    <img src={poki?.sprites?.front_default} alt="pokemon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div>
                    <CircularProgress style={{width: '150', height: '150'}}/>
                </div>
        }
    </>
}

export default AboutPage


