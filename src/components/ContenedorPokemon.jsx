export const ContenedorPokemon = ({ pokemon }) => {
    return (

      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={pokemon.image} className="card-img-top" alt={pokemon.PokeName} />
          <img src={pokemon.variacion} className="card-img-top" alt={pokemon.PokeName} />
          
          <div className="card-body " >
            <h5 className="card-title">Name: {pokemon.PokeName}</h5>
            <p className="card-text">This Pokémon is number {pokemon.id} in the Pokédex.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {pokemon.tipo}</li>
            <li className="list-group-item">Height: {pokemon.height /10}m</li>
            <li className="list-group-item">Weight: {pokemon.weight/ 10}Kgs</li>
          </ul>
          <div className="card-body">
            <a href={`https://www.pokemon.com/us/pokedex/${pokemon.PokeName}`} className="card-link" target="_blank" rel="noopener noreferrer">
              More about
            </a>
            <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.PokeName}_(Pokémon)`} className="card-link" target="_blank" rel="noopener noreferrer">
              Pókedex
            </a>
          </div>
        </div>
      </div>

    );
  };
  