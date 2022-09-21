import axios from "axios";

export const getPokemon = (payload) => {
  return { type: "get/pokemon", payload };
};

export const detailPokemon = (payload) => {
  return { type: "detail/pokemon", payload };
};

export const fetchPokemon = () => (dispatch) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon`).then(({ data }) => {
    console.log(data.results, "cobaaa");
    dispatch(getPokemon(data.results));
    return data.results;
  });
};
