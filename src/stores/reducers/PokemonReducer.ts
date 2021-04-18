import { PokemonDispatchTypes, PokemonType, POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_FAIL } from "../../actions/PokemonActionTypes";

interface IDefaultState {
    loading: boolean,
    pokemon?: PokemonType
}

const defaultState : IDefaultState = {
    loading: false,
};

const PokemonReducer = (state : IDefaultState = defaultState, action : PokemonDispatchTypes) : IDefaultState  => {
    switch (action.type) {
        case POKEMON_LOADING :
            return {
                loading: true,
            }
        case POKEMON_FAIL :
            return {
                loading: false
            }
        case POKEMON_SUCCESS :
            return {
                loading: false,
                pokemon: action.payload 
            }
        default: 
            return state
    }
};

export default PokemonReducer;