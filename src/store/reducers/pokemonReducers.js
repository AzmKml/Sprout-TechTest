const initialState = {
  pokemon: [],
  detailPokemon: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case "get/pokemon":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "detail/pokemon":
      return {
        ...state,
        detailPokemon: action.payload,
      };

    default:
      return state;
  }
}

export default pokemonReducer;
