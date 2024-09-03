import { usePokemon} from "../hooks/usePokemon"
import { BuscarPokemon} from "./BuscarPokemon"
import { ContenedorPokemon} from "./ContenedorPokemon"
 
export const PokemonApp = () =>{
 
    const {handleGetPokemon, pokemon, nombre} = usePokemon()
    return(
        <>
            <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
           
            <ContenedorPokemon  pokemon={pokemon} nombre={nombre}/>
           
        </>
    )
 
    
}