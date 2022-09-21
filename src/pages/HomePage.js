import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CardView from "../components/CardView";
import { deletePokemon, fetchPokemon } from "../store/action/pokemon";

export default function HomePage() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((e) => e.pokemon);
  const [showPokemon, setShowPokemon] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.type) {
      const data = pokemon.filter((el) => {
        return params.type === el.type;
      });
      setShowPokemon(data);
    } else {
      setShowPokemon(pokemon);
    }
  }, [params.type, pokemon]);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {showPokemon.map((el, id) => {
            return <CardView key={id} url={el.url} id={id + 1} />;
          })}
        </div>
      </div>
    </>
  );
}
