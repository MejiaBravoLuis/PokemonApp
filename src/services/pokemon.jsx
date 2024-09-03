export const reqPoke = async (nombre) => {
    
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
        const data = await resp.json();
 
       
        const pokemon = {
            id: data.id,
            PokeName: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            variacion: data.sprites.other['official-artwork'].front_shiny,
            weight: data.weight,
            height: data.height,
            tipo: data.types.map(typeInfo => typeInfo.type.name),
            
            
        };
 
        console.log(pokemon);
 
        return pokemon;
 
    } catch (err) {
        console.error(err);
    }
};
 
 