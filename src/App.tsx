import React, {useState, useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {RootStore} from "./stores/store";
import {GetPokemon} from "./actions/PokemonActions";

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  }
  
  console.log("pokemonstate: ", pokemonState)

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="pokemon-sprite"></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
