import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducers";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  pokemon: pokemonReducer,
});

export default rootReducer;
