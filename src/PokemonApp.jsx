import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { isLoadin, pokemons = [], page } = useSelector( state => state.pokemons );

    useEffect(() => {
        dispatch( getPokemons());
    }, [])

    return (
      <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loadin: { isLoadin ? 'True': 'False'}</span>
        <ul>
          {pokemons.map( ({ name }) => (
            <li key={ name }>{ name }</li>
          )) }

        </ul>
        <button
          disabled={ isLoadin }
          onClick={ () => dispatch( getPokemons(page) )}
        >
          Nex
        </button>

      </>

    )
}
