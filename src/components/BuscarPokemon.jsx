import { useState } from "react";
 
export const BuscarPokemon = ({ handleGetPokemon }) => {
    const [NombrePokemon, setNombrePokemon] = useState('');
 
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="card shadow-sm border-light p-4" style={{ width: '100%', maxWidth: '500px' }}>
                    <h5 className="card-title text-center mb-4">Universal Pokédex</h5>
                    <form className="d-flex" onSubmit={(e) => { handleGetPokemon(e, NombrePokemon) }}>
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder=""
                            onChange={(e) => { setNombrePokemon(e.target.value) }}
                        />
                        <button type="submit" className="btn btn-outline-dark">Search</button>
                    </form>
                </div>
            </div>
        </>
    );
};
 