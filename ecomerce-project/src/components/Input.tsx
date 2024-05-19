
'use client'
import input from '../app/product/cart/input.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {mode} from '../Golobal-Redux/searshSlice/wrteSlice'
import { RootState, AppDispatch } from "../Golobal-Redux/Store";
import  { setSearch } from "../Golobal-Redux/searshSlice/searsh";
import { pokemonApi } from 'src/Golobal-Redux/searshSlice/pokimonApi';
import { Pokemon } from "../Golobal-Redux/searshSlice/types";
import PokemonTable from './PokemonTable';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.searsh.search);
  const startupPokemon = useAppSelector((state) => state.searsh.startupPokemon);
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
  );
  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search))
 }, [dispatch, search]);

  return (
    
    <div className={input.containar}>
<div className={input.searsh}>   
<input
        type="text"
        value={search}
        onChange={(e) => {dispatch(setSearch(e.target.value))
        e.target.value!='' ? dispatch(mode('true')):dispatch(mode('false'));
        } }
        className={input.input} placeholder="Search"
      />
</div>
<div style={{marginTop:'50px'}}>
<PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
</div>
  </div>  
  );
};

export default SearchInput;
//<PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
//</div>