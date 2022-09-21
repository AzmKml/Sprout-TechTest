import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const params = useParams();
  const [showPokemon, setShowPokemon] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then(({ data }) => {
        setShowPokemon(data);
        console.log(data);
        return axios.get(`${data?.species?.url}`);
      })
      .then(({ data }) => {
        setSpecies(data);
        console.log(data, "species");
      });
  }, []);
  return (
    <>
      <div className="col">
        <div
          className="card"
          style={{
            width: "25rem",
          }}
        >
          <img
            src={showPokemon?.sprites?.other["official-artwork"].front_default}
            className="card-img-top"
            alt="..."
            style={{ width: "170px" }}
          />
          <div className="card-body">
            <h3 className="card-title">{showPokemon.name}</h3>
            {showPokemon?.types?.map((el, id) => {
              return <h5 key={id}>{el.type.name}</h5>;
            })}
            <nav>
              <div
                className="nav nav-tabs"
                id="nav-tab"
                role="tablist"
                style={{ fontSize: "16px" }}
              >
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  style={{ color: "black" }}
                >
                  About
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  style={{ color: "black" }}
                >
                  Base Stats
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  style={{ color: "black" }}
                >
                  Evolution
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Moves"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  style={{ color: "black" }}
                >
                  Moves
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <br />
                Species: {}
                <br />
                Height: {showPokemon.height}
                <br />
                Weight: {showPokemon.weight}
                <br />
                Abilities:{" "}
                {showPokemon?.abilities
                  ?.map((el) => el.ability.name)
                  .join(", ")}
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <br />
                {showPokemon?.stats?.map((el, id) => {
                  return (
                    <p key={id}>
                      {el.stat.name}: {el.base_stat}
                    </p>
                  );
                })}
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <br />
                {species?.evolves_from_species?.name ? (
                  <p>Evolution From {species?.evolves_from_species.name}</p>
                ) : (
                  <p>Evolution From None</p>
                )}
              </div>
              <div
                className="tab-pane fade"
                id="nav-Moves"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <br />
                {showPokemon?.moves?.map((el, id) => {
                  return id <= 5 ? <p key={id}>{el.move.name}</p> : "";
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
