import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2'


export const fetchPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(BASE_URL + `/pokemon?limit=${limit}&offset=${offset}`);
        console.log(data + 'data')
        return data;
    }catch(e) {
        console.log(e);
    }
};


export const fetchPokemon = async (id) => {
    try {
        const { data } = await axios.get(BASE_URL + `/pokemon/${id}`);
        console.log(data + 'data')
        return data;
    }catch(e) {
        console.log(e);
    }
};
