import axios from './axios';



// Pokemon
const fetchPokemons = async (offset = 9, limit = 9, type = 'all') => {
    try {
      if(type === 'all'){
        const {data} = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`)
        return data
      }else{
        console.log('type: ',type)
        const {data} = await axios.get(`/type/${type}/`)
        const start = offset
        const end = offset + limit

        const filteredArr = data.pokemon.filter((_, idx) => start <= idx && idx < end)
        const results = filteredArr.map(({pokemon}) => ({name: pokemon.name})) 
        
        return {results, count: data.pokemon.length}       
      }
        
    } catch (error) {
        console.error("Failed to fetch pokemons:" , error)
    }
};

const fetchPokemon = async (name) => {
    try {
      const { data } = await axios(`/pokemon/${name}`);
      const imgUrl = Object.values(data.sprites.other)[2].front_default;
      
      const imgSrc = Object.values(data.sprites.other)[2].front_shiny;
      console.log(data.sprites.other)
      return { ...data, imgUrl, imgSrc }
    } catch (error) {
      console.log(error + "Failed to fetch pokemon:", error);
    }
  };

export default { fetchPokemons, fetchPokemon };
