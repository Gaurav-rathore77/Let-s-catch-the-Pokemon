{
    /* // subscribe to thapa technical youtube channel: https://www.youtube.com/thapatechnical */
  }
  
  export const PokemonCards = ({ pokemonData }) => {
    return (
     <li className="pokemon-card bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
  <figure className="flex justify-center">
    <img
      src={pokemonData.sprites.other.dream_world.front_default}
      alt={pokemonData.name}
      className="pokemon-image w-28 h-28 object-contain"
    />
  </figure>
  <h1 className="pokemon-name text-xl font-bold text-white text-center capitalize mt-4">
    {pokemonData.name}
  </h1>
  <div className="pokemon-info pokemon-highlight text-center text-sm text-white italic mt-2">
    <p className="bg-white bg-opacity-20 px-2 py-1 rounded-lg">
      {pokemonData.types.map((curType) => curType.type.name).join(", ")}
    </p>
  </div>

  <div className="grid-three-cols grid grid-cols-3 gap-4 mt-4 text-white">
    <p className="pokemon-info">
      <span className="font-semibold">Height:</span> {pokemonData.height}
    </p>
    <p className="pokemon-info">
      <span className="font-semibold">Weight:</span> {pokemonData.weight}
    </p>
    <p className="pokemon-info">
      <span className="font-semibold">Speed:</span> {pokemonData.stats[5].base_stat}
    </p>
  </div>

  <div className="grid-three-cols grid grid-cols-3 gap-4 mt-4 text-white">
    <div className="pokemon-info">
      <p className="font-bold">{pokemonData.base_experience}</p>
      <span>Experience</span>
    </div>
    <div className="pokemon-info">
      <p className="font-bold">{pokemonData.stats[1].base_stat}</p>
      <span>Attack</span>
    </div>
    <div className="pokemon-info">
      <p className="font-bold">
        {pokemonData.abilities
          .map((abilityInfo) => abilityInfo.ability.name)
          .slice(0, 1)
          .join(", ")}
      </p>
      <span>Abilities</span>
    </div>
  </div>
</li>

    );
  };