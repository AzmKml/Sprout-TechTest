import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailPokemon, getPokemon } from "../store/action/pokemon";

export default function CardView({ url, id }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${url}`).then(({ data }) => {
      setPokemon(data);
    });
  }, []);
  const toDetail = () => {
    dispatch(detailPokemon(pokemon));
    navigate(`/pokemon/${pokemon.name}`);
  };
  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: "220px" }}
        onClick={() => toDetail()}
      >
        <div className="row">
          <div className="col">
            <img
              src={pokemon?.sprites?.other["official-artwork"].front_default}
              style={{ maxWidth: "120px" }}
              className="rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-13">
            <div className="card-body">
              <h3 className="card-title">{pokemon.name}</h3>
              {pokemon?.types?.map((el, id) => {
                return (
                  <h5 className="card-title" key={id}>
                    {el.type.name}
                  </h5>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
