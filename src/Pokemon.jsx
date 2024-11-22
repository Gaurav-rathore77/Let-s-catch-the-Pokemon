import { useState, useEffect } from "react";
import { PokemonCards } from "./PokemonCards";
export const Pokemone = () => {
  const [Pokemone, setPokemone] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const fetchPokemone = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const pokemonData = data.results.map(async (curPokemon) => {
        const response = await fetch(curPokemon.url);
        const data = await response.json();
        console.log(data);
        return data;
      });

      const detailedResponses = await Promise.all(pokemonData);
      console.log(detailedResponses);
      setPokemone(detailedResponses);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemone();
  }, []);
  const searchData = Pokemone.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loding...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container" >
          <h1>Let's search the Pokémon</h1>
        </div>
        <div class="container">
  <div class="input-wrapper">
    <input
      type="text"
      class="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Pokémon..."
    />
    <div class="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    </div>
  </div>
</div>

        <div>
          <div>
            <ul className="cards">
              {/* {Pokemone.map((curPokemon) => (
                        <div>
                            <h1>{curPokemon.name}</h1>
                        </div>
                    ))} */}
              {searchData.map((curPokemon) => {
                return (
                  <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
